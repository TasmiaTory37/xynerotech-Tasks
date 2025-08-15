// src/data/services.js

export const services = [
  {
    id: "svc-1",
    title: "AC Repair & Service",
    category: "AC Service",
    price: 1499,
    duration: "60–90 min",
    rating: 4.7,
    ratingCount: 214,
    image:
      "https://i.ibb.co.com/W48BLJVn/card1.jpg",
    description:
      "Full AC health check, gas level check, and filter cleaning.",
    details:
      "Includes indoor unit cleaning, basic diagnosis. Spare parts billed separately. 7‑day service warranty."
  },
  {
    id: "svc-2",
    title: "Electrician On‑Demand",
    category: "Electrician",
    price: 799,
    duration: "30–60 min",
    rating: 4.6,
    ratingCount: 172,
    image:
      "https://i.ibb.co.com/tMCWK6p4/card2.jpg",
    description: "Fan, light, switchboard, wiring checks & minor installs.",
    details: "Diagnosis + small fixes included. New fixtures/parts extra."
  },
  {
    id: "svc-3",
    title: "Home Deep Cleaning",
    category: "Cleaning",
    price: 3999,
    duration: "4–8 hrs",
    rating: 4.8,
    ratingCount: 321,
    image:
      "https://i.ibb.co.com/C5jt8pXS/card3.jpg",
    description:
      "Kitchen, bathrooms, bedrooms, windows, floor sanitization.",
    details:
      "Eco‑friendly chemicals; 2–4 person crew based on area size."
  },
  {
    id: "svc-4",
    title: "Plumbing & Leak Fix",
    category: "Plumbing",
    price: 999,
    duration: "45–90 min",
    rating: 4.5,
    ratingCount: 143,
    image:
      "https://i.ibb.co.com/GQt0r39W/card4.jpg",
    description:
      "Tap replacement, blockage removal, pipe leak & drainage issues.",
    details:
      "Includes inspection + basic fixes. Complex repairs quoted onsite."
  },
  {
    id: "svc-5",
    title: "Sofa & Carpet Cleaning",
    category: "Cleaning",
    price: 1499,
    duration: "90–120 min",
    rating: 4.6,
    ratingCount: 98,
    image:
      "https://i.ibb.co.com/ccsyVtrd/card5.jpg",
    description: "Shampoo wash, deep vacuuming and stain treatment.",
    details: "Dry time ~3–6 hrs depending on fabric & weather."
  },
  {
    id: "svc-6",
    title: "AC Jet Wash (Split)",
    category: "AC Service",
    price: 1899,
    duration: "60–75 min",
    rating: 4.9,
    ratingCount: 77,
    image:
      "https://i.ibb.co.com/23FLXQgd/card6.jpg",
    description:
      "Indoor & outdoor unit jet‑wash, coil & condenser cleaning.",
    details: "Recommended pre‑summer; boosts cooling efficiency."
  },
  {
    id: "svc-7",
    title: "Water Purifier Service",
    category: "Appliance",
    price: 899,
    duration: "40–60 min",
    rating: 4.5,
    ratingCount: 64,
    image:
      "https://i.ibb.co.com/zVjxTJNZ/card7.jpg",
    description: "Filter check, basic cleaning, TDS calibration.",
    details: "Filters/parts charged separately if replacement needed."
  },
  {
    id: "svc-8",
    title: "Fridge Checkup",
    category: "Appliance",
    price: 1099,
    duration: "45–75 min",
    rating: 4.4,
    ratingCount: 58,
    image:
      "https://i.ibb.co.com/S4SQY7CB/card8.jpg",
    description: "Cooling issue diagnosis, gasket & gas check.",
    details: "Spare part & gas refill (if required) extra."
  },
  {
    id: "svc-9",
    title: "Pest Control (Home)",
    category: "Cleaning",
    price: 2499,
    duration: "2–3 hrs",
    rating: 4.6,
    ratingCount: 112,
    image:
      "https://i.ibb.co.com/4RR8ZcjN/card9.jpg",
    description: "Cockroach/ant/termite treatment with safe chemicals.",
    details: "Odor‑safe formulas; re‑visit available within 15 days."
  },
  {
    id: "svc-10",
    title: "Wall Painting (Room)",
    category: "Home Improvement",
    price: 4999,
    duration: "1–2 days",
    rating: 4.3,
    ratingCount: 41,
    image:
      "https://i.ibb.co.com/3YrvF683/card10.jpg",
    description: "Single room repaint with standard emulsion.",
    details: "Putty/primer extra if required; color selection on visit."
  },
  {
    id: "svc-11",
    title: "CCTV Installation (2 Cam)",
    category: "Security",
    price: 6999,
    duration: "3–5 hrs",
    rating: 4.7,
    ratingCount: 53,
    image:
      "https://i.ibb.co.com/4g36hGsr/card11.jpg",
    description: "2 bullet/dome cameras with basic DVR setup.",
    details: "Cable length beyond 20m per cam billed separately."
  },
  {
    id: "svc-12",
    title: "Geyser Service",
    category: "Appliance",
    price: 899,
    duration: "45–60 min",
    rating: 4.5,
    ratingCount: 37,
    image:
      "https://i.ibb.co.com/xtk0Rgq6/card12.jpg",
    description: "Heating issue diagnosis, scaling cleanup.",
    details: "Thermostat/heating coil replacement cost extra."
  }
];


export const getServiceById = (id) => services.find((s) => s.id === id);
