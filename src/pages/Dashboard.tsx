import React, { useState, useMemo } from 'react';
import { usePharmacy } from '../context/PharmacyContext';
import { formatCurrency, formatDate, getStockStatusBadge } from '../lib/formatters';
import {
  DollarSign,
  TrendingUp,
  Package,
  AlertTriangle,
  FileText,
  Users,
  ShoppingCart,
  PlusCircle,
  Truck,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Pill,
  Sparkles,
  ShieldAlert,
  Building2,
  Calendar,
  RotateCcw
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';

export const Dashboard: React.FC = () => {
  const {
    sales,
    purchases,
    medicines,
    prescriptions,
    customers,
    settings,
    setActiveTab,
    getLowStockCount,
    getExpiringSoonCount,
    getExpiredCount,
    adjustStock,
    isDemoMode,
    resetDemoData,
    toggleDemoMode
  } = usePharmacy();

  // Period Filter: default to 2026 in Demo Mode, or today in Live mode
  const [selectedPeriod, setSelectedPeriod] = useState<'2026' | '2025' | 'all' | 'today'>(() => {
    return isDemoMode ? '2026' : 'today';
  });

  const todayStr = new Date().toISOString().split('T')[0];

  // Filter sales by selected period
  const filteredSales = useMemo(() => {
    return sales.filter(s => {
      if (s.status !== 'Completed') return false;
      if (selectedPeriod === '2026') return s.createdAt.startsWith('2026');
      if (selectedPeriod === '2025') return s.createdAt.startsWith('2025');
      if (selectedPeriod === 'today') return s.createdAt.startsWith(todayStr);
      return true; // all
    });
  }, [sales, selectedPeriod, todayStr]);

  const periodRevenue = useMemo(() => {
    return filteredSales.reduce((acc, curr) => acc + curr.grandTotal, 0);
  }, [filteredSales]);

  // COGS & Gross Profit calculation
  const periodCOGS = useMemo(() => {
    const medCostMap: Record<string, number> = {};
    medicines.forEach(m => {
      medCostMap[m.id] = m.purchasePrice;
    });

    let totalCost = 0;
    filteredSales.forEach(s => {
      s.items.forEach(item => {
        const unitCost = medCostMap[item.medicineId] || (item.unitPrice * 0.65);
        totalCost += unitCost * item.quantity;
      });
    });
    return totalCost;
  }, [filteredSales, medicines]);

  const periodGrossProfit = Math.max(0, periodRevenue - periodCOGS);
  const periodGrossMargin = periodRevenue > 0 ? (periodGrossProfit / periodRevenue) * 100 : 0;
  const avgTransactionValue = filteredSales.length > 0 ? periodRevenue / filteredSales.length : 0;

  // Inventory Valuations
  const totalInventoryValuation = useMemo(() => {
    return medicines.reduce((acc, curr) => acc + curr.purchasePrice * curr.stockQuantity, 0);
  }, [medicines]);

  const totalSellingValuation = useMemo(() => {
    return medicines.reduce((acc, curr) => acc + curr.sellingPrice * curr.stockQuantity, 0);
  }, [medicines]);

  const lowStockCount = getLowStockCount();
  const expiringSoonCount = getExpiringSoonCount();
  const expiredCount = getExpiredCount();

  const totalPrescriptions = prescriptions.length;
  const pendingRxCount = prescriptions.filter(p => p.status === 'Pending' || p.status === 'Verified').length;

  // Monthly Sales Trend Data (Jan - Dec)
  const monthlyTrendData = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    if (selectedPeriod === 'today') {
      // 7-day view for Today
      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d.toISOString().split('T')[0];
      });

      return last7Days.map(dateStr => {
        const daySales = sales.filter(s => s.createdAt.startsWith(dateStr) && s.status === 'Completed');
        const revenue = daySales.reduce((acc, curr) => acc + curr.grandTotal, 0);
        const dayName = new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short' });
        return { name: dayName, revenue, transactions: daySales.length };
      });
    }

    // Monthly view for 2025, 2026, or All
    return months.map((monthName, idx) => {
      const monthPrefix = String(idx + 1).padStart(2, '0');
      let matchingSales = [];

      if (selectedPeriod === '2026') {
        matchingSales = sales.filter(s => s.createdAt.startsWith(`2026-${monthPrefix}`) && s.status === 'Completed');
      } else if (selectedPeriod === '2025') {
        matchingSales = sales.filter(s => s.createdAt.startsWith(`2025-${monthPrefix}`) && s.status === 'Completed');
      } else {
        // All
        matchingSales = sales.filter(s => s.createdAt.includes(`-${monthPrefix}-`) && s.status === 'Completed');
      }

      const revenue = matchingSales.reduce((acc, curr) => acc + curr.grandTotal, 0);
      return {
        name: monthName,
        revenue: Math.round(revenue),
        transactions: matchingSales.length
      };
    });
  }, [sales, selectedPeriod]);

  // Category Breakdown
  const categoryMap: Record<string, number> = {};
  medicines.forEach(m => {
    const cat = m.category || 'Other';
    categoryMap[cat] = (categoryMap[cat] || 0) + m.stockQuantity;
  });

  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));
  const COLORS = ['#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#84cc16', '#6366f1', '#14b8a6', '#f97316'];

  // Top Selling Items (computed from selected period)
  const topSellingMeds = useMemo(() => {
    const itemSalesMap: Record<string, { name: string; qty: number; total: number; category: string }> = {};
    const medCategoryMap: Record<string, string> = {};
    medicines.forEach(m => { medCategoryMap[m.id] = m.category; });

    filteredSales.forEach(s => {
      s.items.forEach(item => {
        if (!itemSalesMap[item.medicineId]) {
          itemSalesMap[item.medicineId] = {
            name: item.name,
            qty: 0,
            total: 0,
            category: medCategoryMap[item.medicineId] || 'General'
          };
        }
        itemSalesMap[item.medicineId].qty += item.quantity;
        itemSalesMap[item.medicineId].total += item.total;
      });
    });

    return Object.values(itemSalesMap)
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 5);
  }, [filteredSales, medicines]);

  // Critical Alerts List
  const alertMedicines = medicines.filter(
    m => m.status === 'Low Stock' || m.status === 'Out of Stock' || m.status === 'Expiring Soon' || m.status === 'Expired'
  );

  const hasSalesTrend = monthlyTrendData.some(d => d.revenue > 0);
  const hasCategoryData = categoryData.some(d => d.value > 0);

  return (
    <div className="space-y-6">
      {/* Demo Company Banner */}
      {isDemoMode && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs shadow-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                  DEMO COMPANY • HealthPlus Pharmacy Ltd
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-900 dark:text-amber-200 font-bold text-[10px]">
                  Ghana (GH₵)
                </span>
              </div>
              <p className="text-amber-800/80 dark:text-amber-300/80 text-[11px] mt-0.5">
                Demonstration company with realistic, interconnected transactions covering <strong>1 January 2025 – 31 December 2026</strong>. Completely isolated from live production.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                if (window.confirm("Reset all HealthPlus Pharmacy Ltd demo data back to clean 2025–2026 baseline?")) {
                  resetDemoData();
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 font-bold text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition shadow-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo Data</span>
            </button>
            <button
              onClick={() => toggleDemoMode(false)}
              className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition shadow-xs"
            >
              Switch to Live Production
            </button>
          </div>
        </div>
      )}

      {/* Welcome & Quick Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-900/10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-md mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Operational Dashboard & Analytics
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back to {settings.pharmacyName}
          </h1>
          <p className="text-sm text-emerald-100/90 mt-1 max-w-xl">
            Real-time insights for your inventory, financial performance, active prescriptions, and stock reordering alerts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('pos')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold shadow-md transition"
          >
            <ShoppingCart className="w-4 h-4 text-emerald-600" />
            <span>Open POS Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white text-xs font-bold border border-white/20 transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Medicine</span>
          </button>
        </div>
      </div>

      {/* Financial Year / Period Filter Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
            Analytics Time Period:
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setSelectedPeriod('2026')}
            className={`px-3 py-1.5 rounded-lg transition shrink-0 ${
              selectedPeriod === '2026'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            2026 (Current Financial Year)
          </button>
          <button
            onClick={() => setSelectedPeriod('2025')}
            className={`px-3 py-1.5 rounded-lg transition shrink-0 ${
              selectedPeriod === '2025'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            2025 (Previous Financial Year)
          </button>
          <button
            onClick={() => setSelectedPeriod('all')}
            className={`px-3 py-1.5 rounded-lg transition shrink-0 ${
              selectedPeriod === 'all'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Time (2025–2026)
          </button>
          <button
            onClick={() => setSelectedPeriod('today')}
            className={`px-3 py-1.5 rounded-lg transition shrink-0 ${
              selectedPeriod === 'today'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Today / Live
          </button>
        </div>
      </div>

      {/* Metrics Row (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sales Revenue for Period */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {selectedPeriod === 'today' ? "Today's Revenue" : `Sales Revenue (${selectedPeriod.toUpperCase()})`}
            </span>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {formatCurrency(periodRevenue, settings.currencySymbol)}
            </h3>
            {filteredSales.length > 0 && (
              <span className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-3.5 h-3.5" /> {filteredSales.length} Invoices
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Avg basket: {formatCurrency(avgTransactionValue, settings.currencySymbol)}
          </p>
        </div>

        {/* Gross Profit & Margin */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Gross Profit ({selectedPeriod.toUpperCase()})
            </span>
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {formatCurrency(periodGrossProfit, settings.currencySymbol)}
            </h3>
            <span className="inline-flex items-center text-xs font-bold text-teal-600 dark:text-teal-400">
              {periodGrossMargin.toFixed(1)}% Margin
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            COGS: {formatCurrency(periodCOGS, settings.currencySymbol)}
          </p>
        </div>

        {/* Inventory Valuation */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Inventory Valuation
            </span>
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {formatCurrency(totalInventoryValuation, settings.currencySymbol)}
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Retail worth: {formatCurrency(totalSellingValuation, settings.currencySymbol)}
          </p>
        </div>

        {/* Low Stock & Expiry */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Stock Health & Expiry
            </span>
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {lowStockCount + expiringSoonCount + expiredCount}
            </h3>
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
              {lowStockCount} Low • {expiringSoonCount} Expiring
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {expiredCount === 0 ? 'Zero expired items requiring disposal' : `${expiredCount} expired products require disposal`}
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Revenue & Invoices Trend (2 cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Sales Revenue Trend ({selectedPeriod === 'today' ? 'Last 7 Days' : `Year ${selectedPeriod.toUpperCase()}`})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Monthly revenue and completed invoices in {settings.currency} ({settings.currencySymbol})
              </p>
            </div>
            <button
              onClick={() => setActiveTab('reports')}
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              Full Analytics <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {hasSalesTrend ? (
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip
                    formatter={(val: any, name: any) => [
                      name === 'revenue' ? `${settings.currencySymbol}${Number(val).toLocaleString()}` : `${val} sales`,
                      name === 'revenue' ? 'Revenue' : 'Invoices'
                    ]}
                    contentStyle={{
                      borderRadius: '12px',
                      borderColor: '#cbd5e1',
                      fontSize: '12px',
                      fontWeight: 600
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    name="revenue"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-72 w-full flex flex-col items-center justify-center p-6 text-center rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">No sales recorded for this period</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                  Select 2026 or 2025 to explore pre-populated demo sales trends and financial metrics.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stock Breakdown by Category (1 col) */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
            Category Breakdown
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Stock quantity by pharmaceutical category
          </p>

          {hasCategoryData ? (
            <>
              <div className="h-48 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={categoryData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
                      {categoryData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-2 space-y-1.5 max-h-36 overflow-y-auto text-xs pr-1">
                {categoryData.map((cat, i) => (
                  <div key={cat.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 truncate">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                      <span className="truncate">{cat.name}</span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white shrink-0">{cat.value} units</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-56 w-full flex flex-col items-center justify-center text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700/80 space-y-2">
              <Pill className="w-8 h-8 text-slate-400" />
              <p className="font-bold text-xs text-slate-700 dark:text-slate-300">No medicines in catalog</p>
            </div>
          )}
        </div>
      </div>

      {/* Top-Selling Medicines & Purchases Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top-Selling Medicines */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Pill className="w-5 h-5 text-emerald-600" /> Top-Selling Medicines ({selectedPeriod.toUpperCase()})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ranked by total quantity sold during {selectedPeriod}
              </p>
            </div>
            <button
              onClick={() => setActiveTab('sales')}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All Sales</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {topSellingMeds.length > 0 ? (
            <div className="space-y-3">
              {topSellingMeds.map((med, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                  <div className="flex items-center gap-3 truncate">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="truncate">
                      <p className="font-bold text-slate-900 dark:text-white truncate">{med.name}</p>
                      <p className="text-[11px] text-slate-500">{med.category}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-black text-slate-900 dark:text-white">{med.qty} units</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                      {formatCurrency(med.total, settings.currencySymbol)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 py-6 text-center">No sales recorded for this period.</p>
          )}
        </div>

        {/* Purchases & Supplier Delivery Overview */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-600" /> Recent Purchases & Stock-In ({selectedPeriod.toUpperCase()})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Wholesale consignments and stock replenishment
              </p>
            </div>
            <button
              onClick={() => setActiveTab('purchases')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Purchases Module</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {purchases
              .filter(p => {
                if (selectedPeriod === '2026') return p.orderDate.startsWith('2026');
                if (selectedPeriod === '2025') return p.orderDate.startsWith('2025');
                return true;
              })
              .slice(0, 4)
              .map((po, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">{po.purchaseOrderNo}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        po.paymentStatus === 'Paid'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : po.paymentStatus === 'Partial'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}>
                        {po.paymentStatus}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{po.supplierName}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-black text-slate-900 dark:text-white">
                      {formatCurrency(po.totalAmount, settings.currencySymbol)}
                    </p>
                    <p className="text-[11px] text-slate-400">{formatDate(po.orderDate)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Customer & Patient Overview Widget */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" /> Patient & Customer Activity Widget
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Registered patient profiles, clinical allergy warnings, chronic conditions & loyalty points
            </p>
          </div>
          <button
            onClick={() => setActiveTab('customers')}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Open Patient Directory</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Customer Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Total Patients</span>
            <p className="text-xl font-black text-slate-900 dark:text-white mt-1">{customers.length}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Active Loyalty Points</span>
            <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              {customers.reduce((acc, c) => acc + (c.loyaltyPoints || 0), 0).toLocaleString()} pts
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Total Patient Spend</span>
            <p className="text-xl font-black text-slate-900 dark:text-white mt-1">
              {formatCurrency(customers.reduce((acc, c) => acc + (c.totalSpent || 0), 0), settings.currencySymbol)}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/60">
            <span className="text-[11px] font-semibold text-rose-800 dark:text-rose-300 uppercase">Allergy Risk Profiles</span>
            <p className="text-xl font-black text-rose-600 dark:text-rose-400 mt-1">
              {customers.filter(c => c.allergies && c.allergies.length > 0).length} Patients
            </p>
          </div>
        </div>

        {/* Customer Directory List Cards */}
        {customers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {customers.slice(0, 3).map((cust, idx) => (
              <div key={`dash-cust-${cust.id}-${idx}`} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900 dark:text-white">{cust.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    ⭐ {cust.loyaltyPoints || 0} pts
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">📞 {cust.phone}</p>
                
                {/* Allergy flags */}
                {cust.allergies && cust.allergies.length > 0 ? (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cust.allergies.map((all, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                        ⚠️ {all}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[10px] text-slate-400 block pt-1">No known drug allergies</span>
                )}

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Lifetime Spend:</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {formatCurrency(cust.totalSpent || 0, settings.currencySymbol)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Critical Stock Alerts Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-500" /> Critical Inventory Alerts
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Medicines that are low on stock, expiring within 90 days, or expired.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('inventory')}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            View All Catalog &rarr;
          </button>
        </div>

        {alertMedicines.length === 0 ? (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-sm bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            🎉 Great job! All medicine stock levels and expiry dates are healthy.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="p-3 rounded-l-xl">Medicine Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Stock / Min</th>
                  <th className="p-3">Expiry Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right rounded-r-xl">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {alertMedicines.map((m, idx) => (
                  <tr key={`alert-med-${m.id}-${idx}`} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">
                      {m.name}
                      <span className="block text-[11px] font-normal text-slate-500">{m.strength} • {m.genericName}</span>
                    </td>
                    <td className="p-3">{m.category}</td>
                    <td className="p-3 font-bold">
                      {m.stockQuantity} <span className="text-slate-400 font-normal">/ {m.minReorderLevel} min</span>
                    </td>
                    <td className="p-3">{formatDate(m.expiryDate)}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${getStockStatusBadge(m.status)}`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => adjustStock(m.id, 50, 'Quick Restock from Dashboard Alert')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-semibold transition"
                      >
                        Restock +50
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
