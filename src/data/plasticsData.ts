export interface Product {
  id: string;
  name: string;
  category: 'crates' | 'closures' | 'furniture' | 'stools' | 'drinkware' | 'custom';
  tagline: string;
  description: string;
  image: string;
  secondaryImages?: string[];
  specs: {
    material: string;
    capacityOrSize?: string;
    stackingLoad?: string;
    temperatureRange?: string;
    foodGrade: boolean;
    recyclable: boolean;
    colors: string[];
    moq: string;
  };
  features: string[];
  applications: string[];
  badge?: string;
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'heavy-duty-agro-crate',
    name: 'AgroMax Heavy-Duty Harvest Crate',
    category: 'crates',
    tagline: 'Engineered for extreme agricultural stacking & cold-chain transit',
    description: 'High-density polyethylene (HDPE) perforated harvest crate designed for commercial farms, fruit orchards, poultry transport, and supermarket distribution logistics. Features reinforced corner pillars for up to 500kg stacking loads.',
    image: '/images/1ONtk.jpg',
    secondaryImages: ['/images/cAnbr.jpg', '/images/ym3ir.jpg'],
    specs: {
      material: 'Virgin High-Density Polyethylene (HDPE)',
      capacityOrSize: '540 x 360 x 300 mm (45 Litres)',
      stackingLoad: 'Up to 500 kg (10-high stacking)',
      temperatureRange: '-30°C to +75°C',
      foodGrade: true,
      recyclable: true,
      colors: ['Vibrant Yellow', 'Destma Blue', 'Forest Green', 'Signal Red'],
      moq: '250 Units'
    },
    features: [
      'Reinforced impact-resistant corners and ribs',
      'Optimized ventilation slots for continuous airflow and freshness',
      'Ergonomic dual-sided comfort carry handles',
      'Interlocking base grooves prevent transit slippage',
      'UV-stabilized resin prevents brittleness under African sun'
    ],
    applications: ['Poultry & Egg Logistics', 'Citrus & Tomato Farming', 'Bakery Crates', 'Supermarket Distribution'],
    badge: 'Bestseller',
    isFeatured: true
  },
  {
    id: 'tamper-evident-beverage-cap',
    name: 'AeroSeal 38mm Tamper-Evident Closure',
    category: 'closures',
    tagline: 'Precision hermetic sealing for carbonated drinks & juices',
    description: 'Precision-moulded tamper-evident drop-ring closure engineered with zero-leakage linerless micro-fins. Designed for high-speed automated bottling lines up to 36,000 bottles per hour.',
    image: '/images/LtNRt.jpg',
    secondaryImages: ['/images/C2t26.jpg', '/images/Kb3Zx.jpg'],
    specs: {
      material: 'Polypropylene (PP) / HDPE Food Grade',
      capacityOrSize: '38mm standard neck finish (PCO 1881 / 1810)',
      stackingLoad: '12 Bar Internal Gas Pressure Retentive',
      temperatureRange: '-10°C to +85°C Hot-Fill Capable',
      foodGrade: true,
      recyclable: true,
      colors: ['Royal Blue', 'Pure White', 'Emerald Green', 'Pitch Black'],
      moq: '50,000 Units'
    },
    features: [
      'High-torque ribbed outer grip for smooth consumer opening',
      'Instant break tamper band gives visual tamper assurance',
      'Compatible with high-speed automated capping machinery',
      '100% organoleptic tested to preserve beverage taste'
    ],
    applications: ['Water Bottling', 'Carbonated Soft Drinks', 'Fresh Juices & Dairy', 'Pharmaceutical Liquids'],
    badge: 'ISO 9001 Certified',
    isFeatured: true
  },
  {
    id: 'bear-kids-ergonomic-chair',
    name: 'Destma Toddler Comfort Bear Chair',
    category: 'furniture',
    tagline: 'Shatter-proof, ultra-safe ergonomic seating for classrooms & home',
    description: 'Moulded with high-resilience polypropylene with zero sharp corners or metal joints. Contoured lumbar support with whimsical bear-ear styling designed for nursery schools, Montessori hubs, and kids rooms.',
    image: '/images/HS4hb.jpg',
    secondaryImages: ['/images/TCbPv.jpg'],
    specs: {
      material: 'Non-Toxic Food-Contact Grade Polypropylene (PP)',
      capacityOrSize: '360 x 340 x 510 mm (Seat Height: 260 mm)',
      stackingLoad: 'Tested up to 90 kg static load',
      temperatureRange: '-10°C to +60°C',
      foodGrade: true,
      recyclable: true,
      colors: ['Blush Pink', 'Sky Cyan', 'Mint Lime', 'Sunny Yellow'],
      moq: '100 Units'
    },
    features: [
      'BPA-free and heavy-metal-free virgin polymers',
      'Anti-tip splayed leg geometry prevents accidental spills',
      'Ultra-glossy wipe-clean hygienic surface',
      'Stackable up to 12 chairs high for compact classroom storage'
    ],
    applications: ['Early Childhood Education', 'Daycare Centres', 'Pediatric Clinics', 'Home Playrooms'],
    badge: 'Parent & School Favorite',
    isFeatured: true
  },
  {
    id: 'eco-fold-plastic-chair',
    name: 'ProFold Heavy-Duty Folding Chair',
    category: 'furniture',
    tagline: 'Lightweight portability meets unyielding structural rigidity',
    description: 'High-density blow-moulded seat and backrest with integrated carry handle. Engineered for outdoor marquee events, conferences, banquet halls, and institutional gatherings.',
    image: '/images/hfReH.jpg',
    specs: {
      material: 'Virgin HDPE + Reinforced Polymer Pivot Pins',
      capacityOrSize: '440 x 480 x 810 mm (Folded: 980 x 440 x 70 mm)',
      stackingLoad: 'Rated for 150 kg continuous load',
      temperatureRange: '-20°C to +70°C All-Weather',
      foodGrade: false,
      recyclable: true,
      colors: ['Ivory White', 'Charcoal Slate', 'Destma Navy'],
      moq: '50 Units'
    },
    features: [
      'Fast-fold mechanism with anti-pinch hinge protection',
      'Weather-resistant resin will not rot, rust, or fade in the rain',
      'Non-marring rubberized foot glides protect interior floors',
      'Integrated rear ergonomic hand-hold for effortless transport'
    ],
    applications: ['Event Rentals & Marquees', 'Churches & Mosques', 'Corporate Auditoriums', 'Hospitality'],
    badge: 'Heavy Duty',
    isFeatured: true
  },
  {
    id: 'kids-graphic-square-stool',
    name: 'Destma WonderStool Reinforced Stool',
    category: 'stools',
    tagline: 'Ultra-tough multi-rib internal grid for guaranteed non-collapse',
    description: 'Featuring in-mould labelling (IML) technology that prevents graphic peeling, scratching, or water damage. Reinforced criss-cross ribbing underneath delivers rock-solid structural integrity.',
    image: '/images/fT56I.jpg',
    secondaryImages: ['/images/eFiEt.jpg', '/images/Ru3E1.jpg', '/images/dtmiy.jpg'],
    specs: {
      material: 'Impact Copolymer Polypropylene',
      capacityOrSize: '280 x 280 x 290 mm',
      stackingLoad: '120 kg Load Tested',
      temperatureRange: '-15°C to +65°C',
      foodGrade: true,
      recyclable: true,
      colors: ['Ruby Red', 'Destma Blue', 'Sunny Yellow', 'Pastel Pink'],
      moq: '150 Units'
    },
    features: [
      'In-Mould-Labelled (IML) vivid cartoon surface resists scratch & scrub',
      'Dual side grip cutouts for quick one-handed carrying',
      'Reinforced grid truss underneath prevents sagging or snapping',
      'Slip-resistant textured footings'
    ],
    applications: ['Kindergartens', 'Domestic Bathrooms & Kitchens', 'Outdoor Playgrounds', 'Retail Gift Stores'],
    badge: 'Popular',
    isFeatured: true
  },
  {
    id: 'kids-graphic-round-stool',
    name: 'AeroStep Circular Play Stool',
    category: 'stools',
    tagline: 'Smooth bevelled edges with concentric radial reinforcement',
    description: 'Designed for safety and fun. Concentric underside ribbing distributes weight uniformly across all four legs, providing unmatched stability for growing toddlers and energetic play.',
    image: '/images/WhatsApp Image 2026-10-03 at 09.16.01.jpeg',
    secondaryImages: ['/images/WhatsApp Image 2026-10-03 at 09.16.07.jpeg', '/images/IsU9j.jpg', '/images/bVbsL.jpg'],
    specs: {
      material: 'Pure Polypropylene Copolymer',
      capacityOrSize: 'Diameter 270 mm x Height 260 mm',
      stackingLoad: '100 kg Certified',
      temperatureRange: '-10°C to +60°C',
      foodGrade: true,
      recyclable: true,
      colors: ['Cherry Red', 'Bubblegum Pink', 'Ocean Blue'],
      moq: '150 Units'
    },
    features: [
      'High-gloss vibrant character top plate',
      'Rounded radius on all contact surfaces protects against scrapes',
      'Honeycomb radial web base maximizes load per gram of polymer',
      'Stackable footprint saves floor space'
    ],
    applications: ['Preschools', 'Children Bedroom Seating', 'Study Desks', 'Family Dining Assist'],
    isFeatured: false
  },
  {
    id: 'pro-sport-hydration-flask',
    name: 'AeroGrip 1800ml Ergonomic Hydration Flask',
    category: 'drinkware',
    tagline: 'Tritan/PP shatter-resistant dual-cap jug with silicon grip',
    description: 'Large-capacity sport hydration bottle equipped with measurement markers, ergonomic handle loop, textured anti-slip center band, and hygienic flip-lock spout for athletic hydration and daily water goals.',
    image: '/images/degBw.jpg',
    secondaryImages: ['/images/IQm6Y.jpg', '/images/oNZnG.jpg'],
    specs: {
      material: 'BPA-Free Food Grade PETG / Tritan Body with PP Lid',
      capacityOrSize: '1,800 ml & 1,600 ml dual markings',
      stackingLoad: 'Pressure-tested leakproof up to 45° tilt and drop',
      temperatureRange: '-10°C to +60°C',
      foodGrade: true,
      recyclable: true,
      colors: ['Nordic Sage & Chalk', 'Rose Quartz & Mauve', 'Smoke Charcoal'],
      moq: '500 Units'
    },
    features: [
      'Dual-opening lid system for ice loading and precision sipping',
      'One-touch pop-up dust cover protects drinking mouthpiece',
      'Embossed volume timeline encourages daily hydration target',
      'Heavy-duty molded bail handle for gym, hiking & outdoor carry'
    ],
    applications: ['Athletics & Gym', 'Construction & Field Work', 'School & University', 'Corporate Branded Merchandise'],
    badge: 'Trending',
    isFeatured: true
  },
  {
    id: 'cosmetic-fliptop-closure',
    name: 'VelvetTouch 45mm Cosmetic Flip-Top Cap',
    category: 'closures',
    tagline: 'High-aesthetic satin finish with controlled orifice dispensing',
    description: 'A luxurious deep emerald green dispensing closure designed for premium lotions, shampoos, sanitizers, and body oils. Features active butterfly hinge rated for over 1,500 opens without fatigue.',
    image: '/images/lqrAE.jpg',
    secondaryImages: ['/images/C2t26.jpg'],
    specs: {
      material: 'Premium Virgin Polypropylene (PP)',
      capacityOrSize: '45mm snap-on & screw-thread finish',
      stackingLoad: 'Hermetic valve seals up to 3 Bar',
      temperatureRange: '-10°C to +70°C',
      foodGrade: true,
      recyclable: true,
      colors: ['Emerald Green', 'Gloss Black', 'Pristine White', 'Custom Metallic'],
      moq: '25,000 Units'
    },
    features: [
      'Snap-shut audible click confirms secure closure',
      'Ultra-flat top profile enables upside-down bottle merchandising',
      'No-drip cut-off orifice prevents container mess',
      'Chemical-resistant against essential oils and surfactants'
    ],
    applications: ['Cosmetics & Skincare', 'Haircare & Shampoos', 'Industrial Detergents', 'Personal Care Packaging'],
    isFeatured: false
  }
];

export const PILLARS = [
  {
    icon: 'ShieldCheck',
    title: 'Uncompromising Quality',
    subtitle: 'ISO 9001 & Virgin Polymer Formulation',
    description: 'We source only 100% prime virgin and certified circular polymers. Every batch is analyzed for melt flow index, tensile strength, and impact resistance in our state-of-the-art testing facility.',
    metric: '99.92%',
    metricLabel: 'Batch Quality Pass Rate',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    icon: 'Zap',
    title: 'Superior Strength',
    subtitle: 'Extreme Durability for Rough Handling',
    description: 'Our plastics are specifically formulated with UV inhibitors and impact modifiers to withstand tropical heat, rough transport logistics, and multi-year heavy commercial duty cycles without fading or cracking.',
    metric: '500kg+',
    metricLabel: 'Crate Stacking Capacity',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    icon: 'TrendingUp',
    title: 'Unbeatable Value',
    subtitle: 'Factory-Direct Pricing & Fast Turnaround',
    description: 'By operating advanced high-cavitation electric injection moulding machines with automated robotic pickers, we deliver the lowest cost per unit across West Africa with guaranteed on-time dispatch.',
    metric: '35%',
    metricLabel: 'Average Packaging Cost Savings',
    color: 'from-amber-500 to-yellow-400'
  }
];

export const FACTORY_METRICS = [
  { value: '50M+', label: 'Units Delivered Across Africa', change: '+24% YoY' },
  { value: '48+', label: 'High-Precision Injection Presses', change: '80T to 1200T Clamp' },
  { value: '99.8%', label: 'On-Time Logistics Delivery', change: 'Fleet Nationwide' },
  { value: '100%', label: 'Recyclable Polymer Formulations', change: 'Circular Loop' }
];

export const TESTIMONIALS = [
  {
    quote: "Switching to Destma Plastic's heavy-duty harvest crates reduced our fruit transit damage by over 42%. Their stacking stability on rough rural roads is unmatched in Nigeria.",
    author: 'Alhaji Mansur Dantata',
    role: 'Managing Director',
    company: 'Sahel Agro-Logistics Ltd.',
    location: 'Kano & Kaduna',
    rating: 5,
    tag: 'Agricultural Crates'
  },
  {
    quote: "Destma produces over 800,000 beverage closures for our bottling lines every month. Zero line jamming, pristine hermetic seals, and dependable dispatch schedules.",
    author: 'Engr. Folake Adeleke',
    role: 'Operations Director',
    company: 'Cascade Springs & Beverages',
    location: 'Ikeja, Lagos',
    rating: 5,
    tag: 'Bottling Closures'
  },
  {
    quote: "We outfitted 25 nursery campuses with the Destma Bear Chairs. They are completely indestructible, vibrant, lightweight for the children, and clean up instantly.",
    author: 'Mrs. Chinyere Okeke',
    role: 'Head of Procurement',
    company: 'Beacon International Academies',
    location: 'Abuja & Port Harcourt',
    rating: 5,
    tag: 'School Furniture'
  }
];

export const FAQS = [
  {
    question: 'Can you produce custom moulds or brand our company logo onto the plastics?',
    answer: 'Yes! Destma Plastics offers end-to-end OEM and custom mould engineering. We can incorporate your company logo directly into the mould tooling, provide silk-screen printing, or apply high-resolution In-Mould Labelling (IML) for indelible branding.'
  },
  {
    question: 'What raw materials and polymers do you use?',
    answer: 'We utilize prime virgin High-Density Polyethylene (HDPE), Polypropylene (PP Copolymer and Homopolymer), PETG/Tritan, and food-grade pigments approved by regulatory authorities. For eco-conscious enterprises, we also formulate high-performance post-consumer recycled (PCR) blends.'
  },
  {
    question: 'What is your delivery coverage and typical lead time for bulk orders?',
    answer: 'We supply nationwide across all 36 states of Nigeria and export to West African corridors (Ghana, Benin, Togo, Côte d’Ivoire). Stock items dispatch within 24 to 48 hours. Custom color or volume production runs typically dispatch in 5 to 7 business days.'
  },
  {
    question: 'Do you offer samples for engineering and quality evaluation?',
    answer: 'Absolutely. We provide evaluation samples of our crates, closures, and furniture to prospective corporate distributors and manufacturing clients upon request.'
  },
  {
    question: 'Are Destma Plastic products certified food-safe and BPA-free?',
    answer: 'Yes. All our food containers, water bottles, produce crates, and beverage closures are 100% BPA-free, non-toxic, and conform to international food contact hygiene standards.'
  }
];
