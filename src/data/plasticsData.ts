// Product families from the Destma Plastic Product & Capability Catalogue (2026 / 2027 edition).
// Daily output figures are the catalogue's installed-machine estimates; actual output depends on
// mould, cavity count, cycle time and product weight.

export type Category =
  | 'preforms'
  | 'bottles'
  | 'pharma'
  | 'closures'
  | 'food'
  | 'drinkware'
  | 'household'
  | 'crates'
  | 'furniture';

export interface Product {
  id: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  image: string;
  secondaryImages?: string[];
  specs: {
    material: string;
    process: string;
    range: string;
    neck?: string;
    dailyOutput?: string;
    colors: string[];
    moq: string;
  };
  features: string[];
  applications: string[];
  badge?: string;
}

const MOQ = 'By product — on request';

export const PRODUCTS: Product[] = [
  {
    id: 'pet-preforms',
    name: 'PET Preforms',
    category: 'preforms',
    tagline: 'Precision preforms with repeatable weights and neck finishes for bottle blowing',
    description:
      'PET preforms are the starting point for many bottle formats. Our Yongliang preform injection platform produces repeatable weights, neck finishes and customer-specific specifications for subsequent bottle blowing — in clear and a range of colours.',
    image: '/images/catalogue/pet-preforms.jpg',
    secondaryImages: ['/images/catalogue/banner-preforms.jpg', '/images/catalogue/factory-preform-injection.jpg'],
    specs: {
      material: 'PET (Polyethylene Terephthalate)',
      process: 'Preform injection moulding — 6 Yongliang 260-ton machines',
      range: 'Approx. 12–60 g+; 14 g, 20 g & 21 g in daily production',
      neck: '28 / 38 / 44 mm neck systems',
      dailyOutput: '≈ 240,000 preforms per day',
      colors: ['Clear', 'Blue', 'Green', 'Black', 'White', 'Pink'],
      moq: MOQ,
    },
    features: [
      'Weight consistency checked throughout production',
      'Visual inspection and neck-finish integrity checks',
      'Dimensional and colour-consistency checks',
      'Customer-specific neck and preform specifications',
      'Suitable for subsequent PET bottle blowing',
    ],
    applications: ['Water', 'Beverages', 'Juice', 'Edible oil', 'Personal care', 'Custom packaging'],
    badge: '240k / day',
  },
  {
    id: 'pet-bottles',
    name: 'PET Bottles & Containers',
    category: 'bottles',
    tagline: 'Clear, light and shatter-resistant bottles from 100 mL to 2 L+',
    description:
      'Injection stretch blow-moulded PET bottles for water, beverages, cosmetics and household liquids. Our 14 bottle-blowing machines run 28 mm water bottles and 150 ml / 200 ml bottles, in round, square, oval and custom forms with matched closures.',
    image: '/images/catalogue/pet-bottle-preform.jpg',
    secondaryImages: ['/images/catalogue/factory-blow-moulding-team.jpg', '/images/catalogue/factory-bottle-handling.jpg'],
    specs: {
      material: 'PET (Polyethylene Terephthalate)',
      process: 'Injection stretch blow moulding — 14 bottle-blowing machines',
      range: 'Approx. 100 mL–2.0 L+; round, square, oval and custom forms',
      neck: '28 / 38 / 44 mm',
      dailyOutput: '≈ 630,000 bottles per day',
      colors: ['Clear', 'Custom tints'],
      moq: MOQ,
    },
    features: [
      'Clarity, light weight and shatter resistance',
      '6 machines for 28 mm-neck water bottles',
      '8 machines for 38 mm and 44 mm-neck bottles',
      'Matched caps and closures from our injection lines',
    ],
    applications: ['Water', 'Beverages', 'Cosmetics', 'Household liquids', 'Personal care', 'Specialty packaging'],
    badge: 'Bottled water',
  },
  {
    id: 'pharmaceutical-bottles',
    name: 'Pharmaceutical Bottles',
    category: 'pharma',
    tagline: 'Rigid HDPE / PP bottles with matched closures, in a full colour range',
    description:
      'Rigid plastic bottles and containers for pharmaceutical, nutraceutical, chemical and healthcare packaging, with matched screw caps and tamper-evident options. Pharmaceutical packaging is our largest production share — about 40% of daily output.',
    image: '/images/catalogue/pharma-bottles.jpg',
    secondaryImages: ['/images/catalogue/banner-pharma.jpg', '/images/catalogue/hdpe-jar-white.jpg'],
    specs: {
      material: 'HDPE / PP',
      process: 'Blow and injection moulding',
      range: 'Approx. 30 mL–1.0 L; standard and custom neck / closure formats',
      dailyOutput: '≈ 618,000 pieces per day across pharma bottles & closures',
      colors: ['White', 'Pink', 'Green', 'Black', 'Amber', 'Blue'],
      moq: MOQ,
    },
    features: [
      'Matched caps and secure closure formats',
      'Screw-cap and tamper-evident options',
      'Colour and closure made to order',
      'Custom formats available — specification-led development',
    ],
    applications: ['Syrups', 'Capsules', 'Tablets', 'Powders', 'Healthcare products', 'Laboratory packaging'],
    badge: 'Largest line',
  },
  {
    id: 'hdpe-jars-containers',
    name: 'HDPE Jars & Rigid Containers',
    category: 'pharma',
    tagline: 'Tough, chemical-resistant jars and containers with matched caps',
    description:
      'Blow-moulded HDPE and injection-moulded PP jars and rigid containers for drug, household, chemical and industrial products. HDPE brings toughness, chemical resistance and impact strength.',
    image: '/images/catalogue/hdpe-jar-black.jpg',
    secondaryImages: ['/images/catalogue/hdpe-jar-white.jpg'],
    specs: {
      material: 'HDPE / PP',
      process: 'HDPE blow moulding — 4 machines; PP injection moulding',
      range: '150 ml & 200 ml HDPE bottles in daily production; custom sizes',
      dailyOutput: '≈ 48,000 HDPE bottles per day',
      colors: ['White', 'Black', 'Custom colours'],
      moq: MOQ,
    },
    features: [
      'Toughness, chemical resistance and impact strength',
      'PP drug jars for pharmaceutical applications',
      'Matched caps and closures',
      'Custom shapes, sizes and colours on request',
    ],
    applications: ['Pharmaceutical', 'Household', 'Chemical', 'Industrial'],
  },
  {
    id: 'caps-closures',
    name: 'Caps & Closures',
    category: 'closures',
    tagline: 'Secure sealing, tamper evidence and dispensing in 28 / 38 / 44 mm',
    description:
      'Precision injection-moulded closures matched to the neck and container — 28 mm water caps, 38 mm flip covers, 44 mm covers and customer-specified formats. Tell us the bottle, neck size and function, and we develop the closure around it.',
    image: '/images/catalogue/caps-closures.jpg',
    secondaryImages: ['/images/products/closures/screw-caps-four-colours.jpg', '/images/products/closures/blue-screw-cap.jpg', '/images/catalogue/banner-caps.jpg'],
    specs: {
      material: 'PP / HDPE',
      process: 'Injection moulding',
      range: '28 mm water caps, 38 mm flip covers, 44 mm covers + custom formats',
      neck: '28 / 38 / 44 mm neck families',
      dailyOutput: '≈ 360,000 caps & covers per day',
      colors: ['White', 'Black', 'Green', 'Blue', 'Pink', 'Brown'],
      moq: MOQ,
    },
    features: [
      'Secure sealing — closures matched to the neck and container',
      'Tamper-evident formats show the pack has not been opened',
      'Dispensing closures for liquids and everyday products',
      'Closure colours matched to your product and brand',
    ],
    applications: ['Beverage', 'Pharmaceutical', 'Food', 'Household', 'Personal care', 'Industrial'],
    badge: '28 · 38 · 44 mm',
  },
  {
    id: 'wide-mouth-jar-lids',
    name: 'Wide-Mouth Jar Lids',
    category: 'closures',
    tagline: 'Ribbed screw lids for jars, tubs and rigid containers',
    description:
      'Injection-moulded wide-mouth screw lids with a ribbed grip edge, matched to our HDPE and PP jars and containers — for pharmaceutical, food, household and chemical packaging.',
    image: '/images/products/closures/white-wide-mouth-lid.jpg',
    secondaryImages: ['/images/products/closures/black-wide-mouth-lid.jpg'],
    specs: {
      material: 'PP / HDPE',
      process: 'Injection moulding',
      range: 'Wide-mouth formats matched to the container; custom sizes',
      colors: ['White', 'Black', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Ribbed edge for easy grip', 'Matched to our jars and rigid containers', 'Colour matched to your product and brand'],
    applications: ['Pharmaceutical jars', 'Food tubs', 'Household', 'Chemical'],
  },
  {
    id: 'flip-top-dispensing-caps',
    name: 'Flip-Top Dispensing Caps',
    category: 'closures',
    tagline: 'Snap-open dispensing closures for liquids and everyday products',
    description:
      'Flip-top dispensing closures that open with one hand and snap shut — for personal care, household liquids and other everyday products. Colours matched to your brand.',
    image: '/images/products/closures/green-flip-top-cap.jpg',
    specs: {
      material: 'PP',
      process: 'Injection moulding',
      range: 'Made to your bottle neck finish',
      colors: ['Green', 'Custom colours'],
      moq: MOQ,
    },
    features: ['One-hand flip-top opening', 'Controlled dispensing', 'Custom colours and finishes'],
    applications: ['Personal care', 'Household liquids', 'Cosmetics', 'Food'],
    badge: 'Dispensing',
  },
  {
    id: 'lunch-boxes-food-containers',
    name: 'Lunch Boxes & Food Containers',
    category: 'food',
    tagline: 'PP food storage and lunch boxes for home, school and hospitality',
    description:
      'Oval and square lunch boxes and food-storage containers in single- or multi-compartment designs, with lid and decoration options — for homes, schools, hospitality, retail and food service.',
    image: '/images/catalogue/lunch-boxes.jpg',
    secondaryImages: ['/images/catalogue/banner-food-containers.jpg'],
    specs: {
      material: 'PP (Polypropylene)',
      process: 'Injection moulding — Haitian 250-ton and KONZA 170-ton lines',
      range: 'Approx. 250 mL–5.0 L+; oval and square formats',
      dailyOutput: '≈ 276,000 per day (240k oval · 36k square)',
      colors: ['Blue', 'Pink', 'Yellow', 'Custom colours'],
      moq: MOQ,
    },
    features: [
      'Single- or multi-compartment designs',
      'Lid and decoration options',
      'Rigidity and heat resistance of PP',
      'Hinged closures and custom branding',
    ],
    applications: ['Food storage', 'Meal prep', 'School', 'Hospitality', 'Retail', 'Take-away'],
    badge: 'Food & household',
  },
  {
    id: 'drinking-bottles',
    name: 'Flip-Lid Sports Bottles',
    category: 'drinkware',
    tagline: 'Reusable sports bottles with flip lid, carry loop and clip — colours made to order',
    description:
      'Reusable sports and everyday drinking bottles for convenience and portability. Styles, colours, handles, closures and branding can all be developed to your specification.',
    image: '/images/catalogue/drinking-bottles.jpg',
    secondaryImages: ['/images/products/drinkware/pink-flip-lid-sports-bottles.jpg', '/images/products/drinkware/red-flip-lid-sports-bottles.jpg'],
    specs: {
      material: 'PP / PET',
      process: 'Injection and blow moulding',
      range: 'Approx. 250 mL–1.5 L',
      colors: ['Pink', 'Red', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Flip lid with carry loop and clip', 'Custom colours and handles', 'Choice of closures', 'Your branding and artwork', 'Promotional and retail-ready runs'],
    applications: ['Sports', 'School', 'Promotional', 'Household', 'Outdoor'],
  },
  {
    id: 'sports-bottles-collapsible-cup',
    name: 'Sports Bottles with Collapsible Cup',
    category: 'drinkware',
    tagline: 'Clear-tinted bottles with a clip-on folding cup',
    description:
      'Reusable drinking bottles with a screw lid and a clip-on collapsible cup — a practical pick for school, sports, outdoor and promotional use.',
    image: '/images/products/drinkware/sports-bottles-collapsible-cup.jpg',
    secondaryImages: ['/images/catalogue/banner-drinking.jpg'],
    specs: {
      material: 'PP / PET',
      process: 'Injection and blow moulding',
      range: 'Approx. 250 mL–1.5 L',
      colors: ['Red', 'Blue', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Clip-on collapsible cup', 'Screw lid with carry loop', 'Branding and custom colours'],
    applications: ['School', 'Sports', 'Outdoor', 'Promotional'],
  },
  {
    id: 'large-hydration-bottles',
    name: 'Large Bottles with Carry Handle',
    category: 'drinkware',
    tagline: 'Big-capacity bottles with handle, measuring marks and two-way lid',
    description:
      'Large reusable drinking bottles with a strap handle, printed volume markings and a lid with a flip spout — in clear and tinted finishes.',
    image: '/images/products/drinkware/large-bottles-with-handle.jpg',
    secondaryImages: ['/images/products/drinkware/large-bottles-pair.jpg', '/images/products/drinkware/large-bottles-caps-detail.jpg'],
    specs: {
      material: 'PP / PET',
      process: 'Injection and blow moulding',
      range: 'Large-capacity formats',
      colors: ['Clear', 'Grey', 'Pink', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Strap carry handle', 'Printed volume markings', 'Flip-spout lid'],
    applications: ['Gym & sports', 'Office', 'Outdoor', 'Household'],
    badge: 'Large size',
  },
  {
    id: 'household-stools',
    name: 'Household Stools & Utility Products',
    category: 'household',
    tagline: 'Durable everyday stools, utility products and organisers',
    description:
      'Injection-moulded PP / HDPE stools, utility containers, organisers and other everyday household articles — small to large formats, with dimensions and weight customised to the application.',
    image: '/images/catalogue/stools.jpg',
    specs: {
      material: 'PP / HDPE',
      process: 'Injection moulding',
      range: 'Small to large formats; dimensions and weight customised',
      colors: ['Pink', 'Yellow', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Colour matched to your palette', 'Shape, size and capacity to specification', 'Branding and decoration', 'Mould development to specification'],
    applications: ['Stools', 'Utility containers', 'Household articles', 'Organisers', 'Consumer goods'],
  },
  {
    id: 'round-printed-stools',
    name: 'Round Printed Kids Stools',
    category: 'household',
    tagline: 'Colourful round stools with a printed cartoon seat',
    description:
      'Sturdy round plastic stools with a full-colour printed seat — available in red, green, yellow, pink and blue. Shown here from the side, underneath and on the seat.',
    image: '/images/products/stools/round-printed-stool-red.jpg',
    secondaryImages: ['/images/products/stools/round-printed-stool-green.jpg', '/images/products/stools/round-printed-stool-yellow.jpg', '/images/products/stools/round-printed-stool-pink.jpg', '/images/products/stools/round-printed-stool-blue.jpg', '/images/products/stools/round-stool-printed-seat.jpg'],
    specs: {
      material: 'PP',
      process: 'Injection moulding with printed seat',
      range: 'Kids / low stool size',
      colors: ['Red', 'Green', 'Yellow', 'Pink', 'Blue'],
      moq: MOQ,
    },
    features: ['Full-colour printed seat', 'Ribbed underside for strength', 'Five colours'],
    applications: ['Homes', 'Schools', 'Play areas', 'Retail'],
    badge: '5 colours',
  },
  {
    id: 'square-printed-stools',
    name: 'Square Printed Stools',
    category: 'household',
    tagline: 'Square-seat stools with printed top and reinforced legs',
    description:
      'Square plastic stools with a printed seat, carry slots and a ribbed, reinforced underside — in red and blue.',
    image: '/images/products/stools/square-printed-stool-red.jpg',
    secondaryImages: ['/images/products/stools/square-printed-stool-red-front.jpg', '/images/products/stools/square-stool-printed-seat.jpg', '/images/products/stools/square-stool-red-underside.jpg', '/images/products/stools/square-stool-blue-underside.jpg'],
    specs: {
      material: 'PP',
      process: 'Injection moulding with printed seat',
      range: 'Kids / low stool size',
      colors: ['Red', 'Blue', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Printed seat top', 'Built-in carry slots', 'Ribbed, reinforced underside'],
    applications: ['Homes', 'Schools', 'Shops', 'Events'],
  },
  {
    id: 'plastic-crates',
    name: 'Crates & Baskets',
    category: 'crates',
    tagline: 'Injection-moulded crates for storage, logistics and agriculture',
    description:
      'From small utility crates through heavy-duty industrial formats — for agriculture, logistics, warehousing, distribution and retail handling. Dimensions are customisable; load ratings are mould-specific.',
    image: '/images/catalogue/crates.jpg',
    secondaryImages: ['/images/products/crates/yellow-ventilated-crate.jpg', '/images/products/crates/yellow-crate-side.jpg', '/images/products/crates/yellow-crate-open.jpg', '/images/catalogue/banner-crates.jpg'],
    specs: {
      material: 'PP / HDPE',
      process: 'Injection moulding',
      range: 'Small utility to heavy-duty industrial; custom dimensions',
      colors: ['Yellow', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Ventilated designs for produce handling', 'Custom dimensions available', 'Load ratings specific to each mould', 'Colour and branding to order'],
    applications: ['Agriculture', 'Logistics', 'Warehousing', 'Distribution', 'Retail', 'Industrial handling'],
  },
  {
    id: 'coloured-ventilated-crates',
    name: 'Coloured Ventilated Crates',
    category: 'crates',
    tagline: 'Stackable ventilated crates in green and pink',
    description:
      'Ventilated plastic crates with side handles in bold colours — shown here in green and pink, from the side, top and underneath. Sizes and colours to order.',
    image: '/images/products/crates/green-ventilated-crates.jpg',
    secondaryImages: ['/images/products/crates/pink-ventilated-crates.jpg'],
    specs: {
      material: 'PP / HDPE',
      process: 'Injection moulding',
      range: 'Custom dimensions; load ratings are mould-specific',
      colors: ['Green', 'Pink', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Ventilated sides and base', 'Moulded side handles', 'Colour to order'],
    applications: ['Agriculture', 'Retail display', 'Storage', 'Logistics'],
  },
  {
    id: 'bear-kids-ergonomic-chair',
    name: 'Kids Bear Chair',
    category: 'furniture',
    tagline: 'A playful bear-face chair for little ones',
    description:
      'A one-piece moulded plastic children’s chair with a smiling bear-shaped backrest and smooth, glossy finish — made for homes, nurseries, schools and play areas.',
    image: '/images/products/furniture/kids-bear-chair-pink.jpg',
    secondaryImages: ['/images/products/furniture/kids-bear-chair-angle.jpg'],
    specs: {
      material: 'PP (Polypropylene)',
      process: 'Injection moulding',
      range: 'Children’s size',
      colors: ['Pink', 'Custom colours'],
      moq: MOQ,
    },
    features: ['One-piece moulded design', 'Smooth, rounded edges', 'Glossy, easy-to-wipe surface'],
    applications: ['Homes', 'Nurseries', 'Schools', 'Play areas'],
    badge: 'Kids',
  },
  {
    id: 'eco-fold-plastic-chair',
    name: 'Kids Folding Chair',
    category: 'furniture',
    tagline: 'A compact children’s chair that folds flat for storage',
    description:
      'A lightweight plastic folding chair for children, with a carry-handle cut-out in the backrest — easy to fold away, carry and store.',
    image: '/images/products/furniture/kids-folding-chair-cream.jpg',
    specs: {
      material: 'PP (Polypropylene)',
      process: 'Injection moulding',
      range: 'Children’s size; folds flat',
      colors: ['Cream', 'Custom colours'],
      moq: MOQ,
    },
    features: ['Folds flat for storage', 'Built-in carry handle', 'Lightweight and easy to move'],
    applications: ['Homes', 'Schools', 'Events', 'Outdoor'],
    badge: 'Kids',
  },
];
