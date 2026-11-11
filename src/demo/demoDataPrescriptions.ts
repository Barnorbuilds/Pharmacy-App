import { Prescription } from '../types';

export const demoPrescriptions: Prescription[] = [
  {
    "id": "rx-2025-001",
    "prescriptionNo": "RX-2025-0101",
    "customerId": "cust-gh-06",
    "customerName": "Efua Darko",
    "doctorName": "Dr. Naa Darkua Quaye",
    "doctorRegNo": "MDC-GH-7731",
    "hospitalClinic": "Nyaho Medical Centre, Airport",
    "diagnosis": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
    "items": [
      {
        "medicineName": "Metformin HCl 500mg Extended Release",
        "dosage": "500mg",
        "frequency": "Twice daily with meals",
        "duration": "30 days",
        "quantity": 60,
        "instructions": "Do not crush or chew XR tablet"
      },
      {
        "medicineName": "Neurobion Forte Vitamin B-Complex",
        "dosage": "1 Tab",
        "frequency": "Once daily",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "For nerve regeneration"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-01-04T10:15:00Z",
    "dispensedAt": "2025-01-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-001."
  },
  {
    "id": "rx-2025-002",
    "prescriptionNo": "RX-2025-0201",
    "customerId": "cust-gh-11",
    "customerName": "Ebenezer Tetteh",
    "doctorName": "Dr. Samuel Ofori-Atta",
    "doctorRegNo": "MDC-GH-5510",
    "hospitalClinic": "37 Military Hospital, Accra",
    "diagnosis": "Acute Bacterial Sinusitis & Post-Nasal Drip",
    "items": [
      {
        "medicineName": "Amoxicillin / Clavulanate 625mg",
        "dosage": "625mg",
        "frequency": "Every 12 hours",
        "duration": "7 days",
        "quantity": 14,
        "instructions": "Complete full antibiotic course"
      },
      {
        "medicineName": "Otrivin Adult Nasal Spray 10ml",
        "dosage": "2 sprays",
        "frequency": "Every 8 hours as needed",
        "duration": "5 days",
        "quantity": 1,
        "instructions": "Do not use longer than 7 consecutive days"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-02-04T10:15:00Z",
    "dispensedAt": "2025-02-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-002."
  },
  {
    "id": "rx-2025-003",
    "prescriptionNo": "RX-2025-0202",
    "customerId": "cust-gh-16",
    "customerName": "Grace Frimpong",
    "doctorName": "Dr. Beatrice Addo-Yobo",
    "doctorRegNo": "MDC-GH-6824",
    "hospitalClinic": "Greater Accra Regional Hospital (Ridge)",
    "diagnosis": "Uncomplicated Acute Plasmodium Falciparum Malaria",
    "items": [
      {
        "medicineName": "Coartem 80/480mg (Artemether / Lumefantrine)",
        "dosage": "1 Tab",
        "frequency": "Twice daily for 3 days",
        "duration": "3 days",
        "quantity": 6,
        "instructions": "Take with meals or milk for maximum absorption"
      },
      {
        "medicineName": "Paracetamol 500mg Tablets",
        "dosage": "1000mg",
        "frequency": "Every 6-8 hours",
        "duration": "3 days",
        "quantity": 12,
        "instructions": "For high fever and joint pain"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-02-16T10:15:00Z",
    "dispensedAt": "2025-02-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-003."
  },
  {
    "id": "rx-2025-004",
    "prescriptionNo": "RX-2025-0301",
    "customerId": "cust-gh-21",
    "customerName": "Francis Appiah",
    "doctorName": "Dr. Kojo Mensah Asante",
    "doctorRegNo": "MDC-GH-8201",
    "hospitalClinic": "Trust Hospital, Osu",
    "diagnosis": "Severe Lower Lumbar Muscle Spasm & Sciatica",
    "items": [
      {
        "medicineName": "Diclofenac Potassium 50mg Tablets",
        "dosage": "50mg",
        "frequency": "Twice daily after food",
        "duration": "10 days",
        "quantity": 20,
        "instructions": "Always take after food to protect stomach"
      },
      {
        "medicineName": "Omeprazole 20mg Delayed-Release Capsules",
        "dosage": "20mg",
        "frequency": "Once daily before food",
        "duration": "10 days",
        "quantity": 10,
        "instructions": "Gastric mucosa protection"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-03-04T10:15:00Z",
    "dispensedAt": "2025-03-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-004."
  },
  {
    "id": "rx-2025-005",
    "prescriptionNo": "RX-2025-0401",
    "customerId": "cust-gh-26",
    "customerName": "Vida Mensah",
    "doctorName": "Dr. Vivian Arthur-Cann",
    "doctorRegNo": "MDC-GH-9315",
    "hospitalClinic": "Airport Clinic International",
    "diagnosis": "Bronchial Asthma Flare-up with Spasmodic Cough",
    "items": [
      {
        "medicineName": "Salbutamol Inhaler 100mcg (Ventolin)",
        "dosage": "2 Puffs",
        "frequency": "Every 4-6 hours as needed",
        "duration": "30 days",
        "quantity": 1,
        "instructions": "Inhale deeply through spacer if needed"
      },
      {
        "medicineName": "Prednisolone 20mg Tablets",
        "dosage": "20mg",
        "frequency": "Once daily in morning",
        "duration": "5 days",
        "quantity": 5,
        "instructions": "Short burst taper"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-04-04T10:15:00Z",
    "dispensedAt": "2025-04-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-005."
  },
  {
    "id": "rx-2025-006",
    "prescriptionNo": "RX-2025-0402",
    "customerId": "cust-gh-31",
    "customerName": "Benjamin Tackie",
    "doctorName": "Dr. Kwabena Frimpong-Boateng",
    "doctorRegNo": "MDC-GH-4192",
    "hospitalClinic": "Korle Bu Teaching Hospital",
    "diagnosis": "Essential Stage 2 Hypertension & Hypercholesterolemia",
    "items": [
      {
        "medicineName": "Amlodipine Besylate 10mg Tablets",
        "dosage": "10mg",
        "frequency": "Once daily (Morning)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take with water after breakfast"
      },
      {
        "medicineName": "Atorvastatin 20mg Film-Coated",
        "dosage": "20mg",
        "frequency": "Once daily (Night)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take at bedtime"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-04-16T10:15:00Z",
    "dispensedAt": "2025-04-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-006."
  },
  {
    "id": "rx-2025-007",
    "prescriptionNo": "RX-2025-0501",
    "customerId": "cust-gh-36",
    "customerName": "Comfort Asare",
    "doctorName": "Dr. Naa Darkua Quaye",
    "doctorRegNo": "MDC-GH-7731",
    "hospitalClinic": "Nyaho Medical Centre, Airport",
    "diagnosis": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
    "items": [
      {
        "medicineName": "Metformin HCl 500mg Extended Release",
        "dosage": "500mg",
        "frequency": "Twice daily with meals",
        "duration": "30 days",
        "quantity": 60,
        "instructions": "Do not crush or chew XR tablet"
      },
      {
        "medicineName": "Neurobion Forte Vitamin B-Complex",
        "dosage": "1 Tab",
        "frequency": "Once daily",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "For nerve regeneration"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-05-04T10:15:00Z",
    "dispensedAt": "2025-05-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-007."
  },
  {
    "id": "rx-2025-008",
    "prescriptionNo": "RX-2025-0601",
    "customerId": "cust-gh-41",
    "customerName": "Stephen Donkor",
    "doctorName": "Dr. Samuel Ofori-Atta",
    "doctorRegNo": "MDC-GH-5510",
    "hospitalClinic": "37 Military Hospital, Accra",
    "diagnosis": "Acute Bacterial Sinusitis & Post-Nasal Drip",
    "items": [
      {
        "medicineName": "Amoxicillin / Clavulanate 625mg",
        "dosage": "625mg",
        "frequency": "Every 12 hours",
        "duration": "7 days",
        "quantity": 14,
        "instructions": "Complete full antibiotic course"
      },
      {
        "medicineName": "Otrivin Adult Nasal Spray 10ml",
        "dosage": "2 sprays",
        "frequency": "Every 8 hours as needed",
        "duration": "5 days",
        "quantity": 1,
        "instructions": "Do not use longer than 7 consecutive days"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-06-04T10:15:00Z",
    "dispensedAt": "2025-06-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-008."
  },
  {
    "id": "rx-2025-009",
    "prescriptionNo": "RX-2025-0602",
    "customerId": "cust-gh-46",
    "customerName": "Hannah Sarpong",
    "doctorName": "Dr. Beatrice Addo-Yobo",
    "doctorRegNo": "MDC-GH-6824",
    "hospitalClinic": "Greater Accra Regional Hospital (Ridge)",
    "diagnosis": "Uncomplicated Acute Plasmodium Falciparum Malaria",
    "items": [
      {
        "medicineName": "Coartem 80/480mg (Artemether / Lumefantrine)",
        "dosage": "1 Tab",
        "frequency": "Twice daily for 3 days",
        "duration": "3 days",
        "quantity": 6,
        "instructions": "Take with meals or milk for maximum absorption"
      },
      {
        "medicineName": "Paracetamol 500mg Tablets",
        "dosage": "1000mg",
        "frequency": "Every 6-8 hours",
        "duration": "3 days",
        "quantity": 12,
        "instructions": "For high fever and joint pain"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-06-16T10:15:00Z",
    "dispensedAt": "2025-06-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-009."
  },
  {
    "id": "rx-2025-010",
    "prescriptionNo": "RX-2025-0701",
    "customerId": "cust-gh-51",
    "customerName": "Rosemary Afriyie",
    "doctorName": "Dr. Kojo Mensah Asante",
    "doctorRegNo": "MDC-GH-8201",
    "hospitalClinic": "Trust Hospital, Osu",
    "diagnosis": "Severe Lower Lumbar Muscle Spasm & Sciatica",
    "items": [
      {
        "medicineName": "Diclofenac Potassium 50mg Tablets",
        "dosage": "50mg",
        "frequency": "Twice daily after food",
        "duration": "10 days",
        "quantity": 20,
        "instructions": "Always take after food to protect stomach"
      },
      {
        "medicineName": "Omeprazole 20mg Delayed-Release Capsules",
        "dosage": "20mg",
        "frequency": "Once daily before food",
        "duration": "10 days",
        "quantity": 10,
        "instructions": "Gastric mucosa protection"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-07-04T10:15:00Z",
    "dispensedAt": "2025-07-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-010."
  },
  {
    "id": "rx-2025-011",
    "prescriptionNo": "RX-2025-0801",
    "customerId": "cust-gh-56",
    "customerName": "Ernest Tawiah",
    "doctorName": "Dr. Vivian Arthur-Cann",
    "doctorRegNo": "MDC-GH-9315",
    "hospitalClinic": "Airport Clinic International",
    "diagnosis": "Bronchial Asthma Flare-up with Spasmodic Cough",
    "items": [
      {
        "medicineName": "Salbutamol Inhaler 100mcg (Ventolin)",
        "dosage": "2 Puffs",
        "frequency": "Every 4-6 hours as needed",
        "duration": "30 days",
        "quantity": 1,
        "instructions": "Inhale deeply through spacer if needed"
      },
      {
        "medicineName": "Prednisolone 20mg Tablets",
        "dosage": "20mg",
        "frequency": "Once daily in morning",
        "duration": "5 days",
        "quantity": 5,
        "instructions": "Short burst taper"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-08-04T10:15:00Z",
    "dispensedAt": "2025-08-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-011."
  },
  {
    "id": "rx-2025-012",
    "prescriptionNo": "RX-2025-0802",
    "customerId": "cust-gh-01",
    "customerName": "Kwame Asante",
    "doctorName": "Dr. Kwabena Frimpong-Boateng",
    "doctorRegNo": "MDC-GH-4192",
    "hospitalClinic": "Korle Bu Teaching Hospital",
    "diagnosis": "Essential Stage 2 Hypertension & Hypercholesterolemia",
    "items": [
      {
        "medicineName": "Amlodipine Besylate 10mg Tablets",
        "dosage": "10mg",
        "frequency": "Once daily (Morning)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take with water after breakfast"
      },
      {
        "medicineName": "Atorvastatin 20mg Film-Coated",
        "dosage": "20mg",
        "frequency": "Once daily (Night)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take at bedtime"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-08-16T10:15:00Z",
    "dispensedAt": "2025-08-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-012."
  },
  {
    "id": "rx-2025-013",
    "prescriptionNo": "RX-2025-0901",
    "customerId": "cust-gh-06",
    "customerName": "Efua Darko",
    "doctorName": "Dr. Naa Darkua Quaye",
    "doctorRegNo": "MDC-GH-7731",
    "hospitalClinic": "Nyaho Medical Centre, Airport",
    "diagnosis": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
    "items": [
      {
        "medicineName": "Metformin HCl 500mg Extended Release",
        "dosage": "500mg",
        "frequency": "Twice daily with meals",
        "duration": "30 days",
        "quantity": 60,
        "instructions": "Do not crush or chew XR tablet"
      },
      {
        "medicineName": "Neurobion Forte Vitamin B-Complex",
        "dosage": "1 Tab",
        "frequency": "Once daily",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "For nerve regeneration"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-09-04T10:15:00Z",
    "dispensedAt": "2025-09-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-013."
  },
  {
    "id": "rx-2025-014",
    "prescriptionNo": "RX-2025-1001",
    "customerId": "cust-gh-11",
    "customerName": "Ebenezer Tetteh",
    "doctorName": "Dr. Samuel Ofori-Atta",
    "doctorRegNo": "MDC-GH-5510",
    "hospitalClinic": "37 Military Hospital, Accra",
    "diagnosis": "Acute Bacterial Sinusitis & Post-Nasal Drip",
    "items": [
      {
        "medicineName": "Amoxicillin / Clavulanate 625mg",
        "dosage": "625mg",
        "frequency": "Every 12 hours",
        "duration": "7 days",
        "quantity": 14,
        "instructions": "Complete full antibiotic course"
      },
      {
        "medicineName": "Otrivin Adult Nasal Spray 10ml",
        "dosage": "2 sprays",
        "frequency": "Every 8 hours as needed",
        "duration": "5 days",
        "quantity": 1,
        "instructions": "Do not use longer than 7 consecutive days"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-10-04T10:15:00Z",
    "dispensedAt": "2025-10-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-014."
  },
  {
    "id": "rx-2025-015",
    "prescriptionNo": "RX-2025-1002",
    "customerId": "cust-gh-16",
    "customerName": "Grace Frimpong",
    "doctorName": "Dr. Beatrice Addo-Yobo",
    "doctorRegNo": "MDC-GH-6824",
    "hospitalClinic": "Greater Accra Regional Hospital (Ridge)",
    "diagnosis": "Uncomplicated Acute Plasmodium Falciparum Malaria",
    "items": [
      {
        "medicineName": "Coartem 80/480mg (Artemether / Lumefantrine)",
        "dosage": "1 Tab",
        "frequency": "Twice daily for 3 days",
        "duration": "3 days",
        "quantity": 6,
        "instructions": "Take with meals or milk for maximum absorption"
      },
      {
        "medicineName": "Paracetamol 500mg Tablets",
        "dosage": "1000mg",
        "frequency": "Every 6-8 hours",
        "duration": "3 days",
        "quantity": 12,
        "instructions": "For high fever and joint pain"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-10-16T10:15:00Z",
    "dispensedAt": "2025-10-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-015."
  },
  {
    "id": "rx-2025-016",
    "prescriptionNo": "RX-2025-1101",
    "customerId": "cust-gh-21",
    "customerName": "Francis Appiah",
    "doctorName": "Dr. Kojo Mensah Asante",
    "doctorRegNo": "MDC-GH-8201",
    "hospitalClinic": "Trust Hospital, Osu",
    "diagnosis": "Severe Lower Lumbar Muscle Spasm & Sciatica",
    "items": [
      {
        "medicineName": "Diclofenac Potassium 50mg Tablets",
        "dosage": "50mg",
        "frequency": "Twice daily after food",
        "duration": "10 days",
        "quantity": 20,
        "instructions": "Always take after food to protect stomach"
      },
      {
        "medicineName": "Omeprazole 20mg Delayed-Release Capsules",
        "dosage": "20mg",
        "frequency": "Once daily before food",
        "duration": "10 days",
        "quantity": 10,
        "instructions": "Gastric mucosa protection"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-11-04T10:15:00Z",
    "dispensedAt": "2025-11-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-016."
  },
  {
    "id": "rx-2025-017",
    "prescriptionNo": "RX-2025-1201",
    "customerId": "cust-gh-26",
    "customerName": "Vida Mensah",
    "doctorName": "Dr. Vivian Arthur-Cann",
    "doctorRegNo": "MDC-GH-9315",
    "hospitalClinic": "Airport Clinic International",
    "diagnosis": "Bronchial Asthma Flare-up with Spasmodic Cough",
    "items": [
      {
        "medicineName": "Salbutamol Inhaler 100mcg (Ventolin)",
        "dosage": "2 Puffs",
        "frequency": "Every 4-6 hours as needed",
        "duration": "30 days",
        "quantity": 1,
        "instructions": "Inhale deeply through spacer if needed"
      },
      {
        "medicineName": "Prednisolone 20mg Tablets",
        "dosage": "20mg",
        "frequency": "Once daily in morning",
        "duration": "5 days",
        "quantity": 5,
        "instructions": "Short burst taper"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-12-04T10:15:00Z",
    "dispensedAt": "2025-12-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-017."
  },
  {
    "id": "rx-2025-018",
    "prescriptionNo": "RX-2025-1202",
    "customerId": "cust-gh-31",
    "customerName": "Benjamin Tackie",
    "doctorName": "Dr. Kwabena Frimpong-Boateng",
    "doctorRegNo": "MDC-GH-4192",
    "hospitalClinic": "Korle Bu Teaching Hospital",
    "diagnosis": "Essential Stage 2 Hypertension & Hypercholesterolemia",
    "items": [
      {
        "medicineName": "Amlodipine Besylate 10mg Tablets",
        "dosage": "10mg",
        "frequency": "Once daily (Morning)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take with water after breakfast"
      },
      {
        "medicineName": "Atorvastatin 20mg Film-Coated",
        "dosage": "20mg",
        "frequency": "Once daily (Night)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take at bedtime"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2025-12-16T10:15:00Z",
    "dispensedAt": "2025-12-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2025-018."
  },
  {
    "id": "rx-2026-019",
    "prescriptionNo": "RX-2026-0101",
    "customerId": "cust-gh-36",
    "customerName": "Comfort Asare",
    "doctorName": "Dr. Naa Darkua Quaye",
    "doctorRegNo": "MDC-GH-7731",
    "hospitalClinic": "Nyaho Medical Centre, Airport",
    "diagnosis": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
    "items": [
      {
        "medicineName": "Metformin HCl 500mg Extended Release",
        "dosage": "500mg",
        "frequency": "Twice daily with meals",
        "duration": "30 days",
        "quantity": 60,
        "instructions": "Do not crush or chew XR tablet"
      },
      {
        "medicineName": "Neurobion Forte Vitamin B-Complex",
        "dosage": "1 Tab",
        "frequency": "Once daily",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "For nerve regeneration"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-01-04T10:15:00Z",
    "dispensedAt": "2026-01-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-019."
  },
  {
    "id": "rx-2026-020",
    "prescriptionNo": "RX-2026-0201",
    "customerId": "cust-gh-41",
    "customerName": "Stephen Donkor",
    "doctorName": "Dr. Samuel Ofori-Atta",
    "doctorRegNo": "MDC-GH-5510",
    "hospitalClinic": "37 Military Hospital, Accra",
    "diagnosis": "Acute Bacterial Sinusitis & Post-Nasal Drip",
    "items": [
      {
        "medicineName": "Amoxicillin / Clavulanate 625mg",
        "dosage": "625mg",
        "frequency": "Every 12 hours",
        "duration": "7 days",
        "quantity": 14,
        "instructions": "Complete full antibiotic course"
      },
      {
        "medicineName": "Otrivin Adult Nasal Spray 10ml",
        "dosage": "2 sprays",
        "frequency": "Every 8 hours as needed",
        "duration": "5 days",
        "quantity": 1,
        "instructions": "Do not use longer than 7 consecutive days"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-02-04T10:15:00Z",
    "dispensedAt": "2026-02-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-020."
  },
  {
    "id": "rx-2026-021",
    "prescriptionNo": "RX-2026-0202",
    "customerId": "cust-gh-46",
    "customerName": "Hannah Sarpong",
    "doctorName": "Dr. Beatrice Addo-Yobo",
    "doctorRegNo": "MDC-GH-6824",
    "hospitalClinic": "Greater Accra Regional Hospital (Ridge)",
    "diagnosis": "Uncomplicated Acute Plasmodium Falciparum Malaria",
    "items": [
      {
        "medicineName": "Coartem 80/480mg (Artemether / Lumefantrine)",
        "dosage": "1 Tab",
        "frequency": "Twice daily for 3 days",
        "duration": "3 days",
        "quantity": 6,
        "instructions": "Take with meals or milk for maximum absorption"
      },
      {
        "medicineName": "Paracetamol 500mg Tablets",
        "dosage": "1000mg",
        "frequency": "Every 6-8 hours",
        "duration": "3 days",
        "quantity": 12,
        "instructions": "For high fever and joint pain"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-02-16T10:15:00Z",
    "dispensedAt": "2026-02-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-021."
  },
  {
    "id": "rx-2026-022",
    "prescriptionNo": "RX-2026-0301",
    "customerId": "cust-gh-51",
    "customerName": "Rosemary Afriyie",
    "doctorName": "Dr. Kojo Mensah Asante",
    "doctorRegNo": "MDC-GH-8201",
    "hospitalClinic": "Trust Hospital, Osu",
    "diagnosis": "Severe Lower Lumbar Muscle Spasm & Sciatica",
    "items": [
      {
        "medicineName": "Diclofenac Potassium 50mg Tablets",
        "dosage": "50mg",
        "frequency": "Twice daily after food",
        "duration": "10 days",
        "quantity": 20,
        "instructions": "Always take after food to protect stomach"
      },
      {
        "medicineName": "Omeprazole 20mg Delayed-Release Capsules",
        "dosage": "20mg",
        "frequency": "Once daily before food",
        "duration": "10 days",
        "quantity": 10,
        "instructions": "Gastric mucosa protection"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-03-04T10:15:00Z",
    "dispensedAt": "2026-03-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-022."
  },
  {
    "id": "rx-2026-023",
    "prescriptionNo": "RX-2026-0401",
    "customerId": "cust-gh-56",
    "customerName": "Ernest Tawiah",
    "doctorName": "Dr. Vivian Arthur-Cann",
    "doctorRegNo": "MDC-GH-9315",
    "hospitalClinic": "Airport Clinic International",
    "diagnosis": "Bronchial Asthma Flare-up with Spasmodic Cough",
    "items": [
      {
        "medicineName": "Salbutamol Inhaler 100mcg (Ventolin)",
        "dosage": "2 Puffs",
        "frequency": "Every 4-6 hours as needed",
        "duration": "30 days",
        "quantity": 1,
        "instructions": "Inhale deeply through spacer if needed"
      },
      {
        "medicineName": "Prednisolone 20mg Tablets",
        "dosage": "20mg",
        "frequency": "Once daily in morning",
        "duration": "5 days",
        "quantity": 5,
        "instructions": "Short burst taper"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-04-04T10:15:00Z",
    "dispensedAt": "2026-04-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-023."
  },
  {
    "id": "rx-2026-024",
    "prescriptionNo": "RX-2026-0402",
    "customerId": "cust-gh-01",
    "customerName": "Kwame Asante",
    "doctorName": "Dr. Kwabena Frimpong-Boateng",
    "doctorRegNo": "MDC-GH-4192",
    "hospitalClinic": "Korle Bu Teaching Hospital",
    "diagnosis": "Essential Stage 2 Hypertension & Hypercholesterolemia",
    "items": [
      {
        "medicineName": "Amlodipine Besylate 10mg Tablets",
        "dosage": "10mg",
        "frequency": "Once daily (Morning)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take with water after breakfast"
      },
      {
        "medicineName": "Atorvastatin 20mg Film-Coated",
        "dosage": "20mg",
        "frequency": "Once daily (Night)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take at bedtime"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-04-16T10:15:00Z",
    "dispensedAt": "2026-04-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-024."
  },
  {
    "id": "rx-2026-025",
    "prescriptionNo": "RX-2026-0501",
    "customerId": "cust-gh-06",
    "customerName": "Efua Darko",
    "doctorName": "Dr. Naa Darkua Quaye",
    "doctorRegNo": "MDC-GH-7731",
    "hospitalClinic": "Nyaho Medical Centre, Airport",
    "diagnosis": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
    "items": [
      {
        "medicineName": "Metformin HCl 500mg Extended Release",
        "dosage": "500mg",
        "frequency": "Twice daily with meals",
        "duration": "30 days",
        "quantity": 60,
        "instructions": "Do not crush or chew XR tablet"
      },
      {
        "medicineName": "Neurobion Forte Vitamin B-Complex",
        "dosage": "1 Tab",
        "frequency": "Once daily",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "For nerve regeneration"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-05-04T10:15:00Z",
    "dispensedAt": "2026-05-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-025."
  },
  {
    "id": "rx-2026-026",
    "prescriptionNo": "RX-2026-0601",
    "customerId": "cust-gh-11",
    "customerName": "Ebenezer Tetteh",
    "doctorName": "Dr. Samuel Ofori-Atta",
    "doctorRegNo": "MDC-GH-5510",
    "hospitalClinic": "37 Military Hospital, Accra",
    "diagnosis": "Acute Bacterial Sinusitis & Post-Nasal Drip",
    "items": [
      {
        "medicineName": "Amoxicillin / Clavulanate 625mg",
        "dosage": "625mg",
        "frequency": "Every 12 hours",
        "duration": "7 days",
        "quantity": 14,
        "instructions": "Complete full antibiotic course"
      },
      {
        "medicineName": "Otrivin Adult Nasal Spray 10ml",
        "dosage": "2 sprays",
        "frequency": "Every 8 hours as needed",
        "duration": "5 days",
        "quantity": 1,
        "instructions": "Do not use longer than 7 consecutive days"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-06-04T10:15:00Z",
    "dispensedAt": "2026-06-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-026."
  },
  {
    "id": "rx-2026-027",
    "prescriptionNo": "RX-2026-0602",
    "customerId": "cust-gh-16",
    "customerName": "Grace Frimpong",
    "doctorName": "Dr. Beatrice Addo-Yobo",
    "doctorRegNo": "MDC-GH-6824",
    "hospitalClinic": "Greater Accra Regional Hospital (Ridge)",
    "diagnosis": "Uncomplicated Acute Plasmodium Falciparum Malaria",
    "items": [
      {
        "medicineName": "Coartem 80/480mg (Artemether / Lumefantrine)",
        "dosage": "1 Tab",
        "frequency": "Twice daily for 3 days",
        "duration": "3 days",
        "quantity": 6,
        "instructions": "Take with meals or milk for maximum absorption"
      },
      {
        "medicineName": "Paracetamol 500mg Tablets",
        "dosage": "1000mg",
        "frequency": "Every 6-8 hours",
        "duration": "3 days",
        "quantity": 12,
        "instructions": "For high fever and joint pain"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-06-16T10:15:00Z",
    "dispensedAt": "2026-06-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-027."
  },
  {
    "id": "rx-2026-028",
    "prescriptionNo": "RX-2026-0701",
    "customerId": "cust-gh-21",
    "customerName": "Francis Appiah",
    "doctorName": "Dr. Kojo Mensah Asante",
    "doctorRegNo": "MDC-GH-8201",
    "hospitalClinic": "Trust Hospital, Osu",
    "diagnosis": "Severe Lower Lumbar Muscle Spasm & Sciatica",
    "items": [
      {
        "medicineName": "Diclofenac Potassium 50mg Tablets",
        "dosage": "50mg",
        "frequency": "Twice daily after food",
        "duration": "10 days",
        "quantity": 20,
        "instructions": "Always take after food to protect stomach"
      },
      {
        "medicineName": "Omeprazole 20mg Delayed-Release Capsules",
        "dosage": "20mg",
        "frequency": "Once daily before food",
        "duration": "10 days",
        "quantity": 10,
        "instructions": "Gastric mucosa protection"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-07-04T10:15:00Z",
    "dispensedAt": "2026-07-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-028."
  },
  {
    "id": "rx-2026-029",
    "prescriptionNo": "RX-2026-0801",
    "customerId": "cust-gh-26",
    "customerName": "Vida Mensah",
    "doctorName": "Dr. Vivian Arthur-Cann",
    "doctorRegNo": "MDC-GH-9315",
    "hospitalClinic": "Airport Clinic International",
    "diagnosis": "Bronchial Asthma Flare-up with Spasmodic Cough",
    "items": [
      {
        "medicineName": "Salbutamol Inhaler 100mcg (Ventolin)",
        "dosage": "2 Puffs",
        "frequency": "Every 4-6 hours as needed",
        "duration": "30 days",
        "quantity": 1,
        "instructions": "Inhale deeply through spacer if needed"
      },
      {
        "medicineName": "Prednisolone 20mg Tablets",
        "dosage": "20mg",
        "frequency": "Once daily in morning",
        "duration": "5 days",
        "quantity": 5,
        "instructions": "Short burst taper"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-08-04T10:15:00Z",
    "dispensedAt": "2026-08-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-029."
  },
  {
    "id": "rx-2026-030",
    "prescriptionNo": "RX-2026-0802",
    "customerId": "cust-gh-31",
    "customerName": "Benjamin Tackie",
    "doctorName": "Dr. Kwabena Frimpong-Boateng",
    "doctorRegNo": "MDC-GH-4192",
    "hospitalClinic": "Korle Bu Teaching Hospital",
    "diagnosis": "Essential Stage 2 Hypertension & Hypercholesterolemia",
    "items": [
      {
        "medicineName": "Amlodipine Besylate 10mg Tablets",
        "dosage": "10mg",
        "frequency": "Once daily (Morning)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take with water after breakfast"
      },
      {
        "medicineName": "Atorvastatin 20mg Film-Coated",
        "dosage": "20mg",
        "frequency": "Once daily (Night)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take at bedtime"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-08-16T10:15:00Z",
    "dispensedAt": "2026-08-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-030."
  },
  {
    "id": "rx-2026-031",
    "prescriptionNo": "RX-2026-0901",
    "customerId": "cust-gh-36",
    "customerName": "Comfort Asare",
    "doctorName": "Dr. Naa Darkua Quaye",
    "doctorRegNo": "MDC-GH-7731",
    "hospitalClinic": "Nyaho Medical Centre, Airport",
    "diagnosis": "Type 2 Diabetes Mellitus with Peripheral Neuropathy",
    "items": [
      {
        "medicineName": "Metformin HCl 500mg Extended Release",
        "dosage": "500mg",
        "frequency": "Twice daily with meals",
        "duration": "30 days",
        "quantity": 60,
        "instructions": "Do not crush or chew XR tablet"
      },
      {
        "medicineName": "Neurobion Forte Vitamin B-Complex",
        "dosage": "1 Tab",
        "frequency": "Once daily",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "For nerve regeneration"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-09-04T10:15:00Z",
    "dispensedAt": "2026-09-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-031."
  },
  {
    "id": "rx-2026-032",
    "prescriptionNo": "RX-2026-1001",
    "customerId": "cust-gh-41",
    "customerName": "Stephen Donkor",
    "doctorName": "Dr. Samuel Ofori-Atta",
    "doctorRegNo": "MDC-GH-5510",
    "hospitalClinic": "37 Military Hospital, Accra",
    "diagnosis": "Acute Bacterial Sinusitis & Post-Nasal Drip",
    "items": [
      {
        "medicineName": "Amoxicillin / Clavulanate 625mg",
        "dosage": "625mg",
        "frequency": "Every 12 hours",
        "duration": "7 days",
        "quantity": 14,
        "instructions": "Complete full antibiotic course"
      },
      {
        "medicineName": "Otrivin Adult Nasal Spray 10ml",
        "dosage": "2 sprays",
        "frequency": "Every 8 hours as needed",
        "duration": "5 days",
        "quantity": 1,
        "instructions": "Do not use longer than 7 consecutive days"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-10-04T10:15:00Z",
    "dispensedAt": "2026-10-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-032."
  },
  {
    "id": "rx-2026-033",
    "prescriptionNo": "RX-2026-1002",
    "customerId": "cust-gh-46",
    "customerName": "Hannah Sarpong",
    "doctorName": "Dr. Beatrice Addo-Yobo",
    "doctorRegNo": "MDC-GH-6824",
    "hospitalClinic": "Greater Accra Regional Hospital (Ridge)",
    "diagnosis": "Uncomplicated Acute Plasmodium Falciparum Malaria",
    "items": [
      {
        "medicineName": "Coartem 80/480mg (Artemether / Lumefantrine)",
        "dosage": "1 Tab",
        "frequency": "Twice daily for 3 days",
        "duration": "3 days",
        "quantity": 6,
        "instructions": "Take with meals or milk for maximum absorption"
      },
      {
        "medicineName": "Paracetamol 500mg Tablets",
        "dosage": "1000mg",
        "frequency": "Every 6-8 hours",
        "duration": "3 days",
        "quantity": 12,
        "instructions": "For high fever and joint pain"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-10-16T10:15:00Z",
    "dispensedAt": "2026-10-16T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-033."
  },
  {
    "id": "rx-2026-034",
    "prescriptionNo": "RX-2026-1101",
    "customerId": "cust-gh-51",
    "customerName": "Rosemary Afriyie",
    "doctorName": "Dr. Kojo Mensah Asante",
    "doctorRegNo": "MDC-GH-8201",
    "hospitalClinic": "Trust Hospital, Osu",
    "diagnosis": "Severe Lower Lumbar Muscle Spasm & Sciatica",
    "items": [
      {
        "medicineName": "Diclofenac Potassium 50mg Tablets",
        "dosage": "50mg",
        "frequency": "Twice daily after food",
        "duration": "10 days",
        "quantity": 20,
        "instructions": "Always take after food to protect stomach"
      },
      {
        "medicineName": "Omeprazole 20mg Delayed-Release Capsules",
        "dosage": "20mg",
        "frequency": "Once daily before food",
        "duration": "10 days",
        "quantity": 10,
        "instructions": "Gastric mucosa protection"
      }
    ],
    "status": "Dispensed",
    "createdAt": "2026-11-04T10:15:00Z",
    "dispensedAt": "2026-11-04T10:45:00Z",
    "dispensedBy": "Ama Boateng",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-034."
  },
  {
    "id": "rx-2026-035",
    "prescriptionNo": "RX-2026-1201",
    "customerId": "cust-gh-56",
    "customerName": "Ernest Tawiah",
    "doctorName": "Dr. Vivian Arthur-Cann",
    "doctorRegNo": "MDC-GH-9315",
    "hospitalClinic": "Airport Clinic International",
    "diagnosis": "Bronchial Asthma Flare-up with Spasmodic Cough",
    "items": [
      {
        "medicineName": "Salbutamol Inhaler 100mcg (Ventolin)",
        "dosage": "2 Puffs",
        "frequency": "Every 4-6 hours as needed",
        "duration": "30 days",
        "quantity": 1,
        "instructions": "Inhale deeply through spacer if needed"
      },
      {
        "medicineName": "Prednisolone 20mg Tablets",
        "dosage": "20mg",
        "frequency": "Once daily in morning",
        "duration": "5 days",
        "quantity": 5,
        "instructions": "Short burst taper"
      }
    ],
    "status": "Verified",
    "createdAt": "2026-12-04T10:15:00Z",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-035."
  },
  {
    "id": "rx-2026-036",
    "prescriptionNo": "RX-2026-1202",
    "customerId": "cust-gh-01",
    "customerName": "Kwame Asante",
    "doctorName": "Dr. Kwabena Frimpong-Boateng",
    "doctorRegNo": "MDC-GH-4192",
    "hospitalClinic": "Korle Bu Teaching Hospital",
    "diagnosis": "Essential Stage 2 Hypertension & Hypercholesterolemia",
    "items": [
      {
        "medicineName": "Amlodipine Besylate 10mg Tablets",
        "dosage": "10mg",
        "frequency": "Once daily (Morning)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take with water after breakfast"
      },
      {
        "medicineName": "Atorvastatin 20mg Film-Coated",
        "dosage": "20mg",
        "frequency": "Once daily (Night)",
        "duration": "30 days",
        "quantity": 30,
        "instructions": "Take at bedtime"
      }
    ],
    "status": "Verified",
    "createdAt": "2026-12-16T10:15:00Z",
    "notes": "Verified doctor seal & license on file with Pharmacy Council. Valid Rx ID #GH-2026-036."
  }
];
