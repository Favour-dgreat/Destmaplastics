// Facts from the Destma Plastic Product & Capability Catalogue (2026 / 2027 edition).

export const STATS = {
  machines: 53,
  lines: 9,
  piecesPerDay: 1_554_000,
  piecesPerMonthM: 40.4, // 26 working days
  piecesPerYearM: 485,
  materials: 'PET • HDPE • PP',
};

export const MACHINE_GROUPS = [
  { count: 29, label: 'Injection moulding' },
  { count: 14, label: 'PET bottle blowing' },
  { count: 6, label: 'PET preform injection' },
  { count: 4, label: 'HDPE blow moulding' },
];

/** Installed machines & daily capacity (catalogue p.17). */
export const MACHINES = [
  { line: 'PET preform injection', machine: 'Yongliang 260-ton', qty: 6, product: '14 g, 20 g & 21 g PET preforms', daily: 240_000 },
  { line: 'PET bottle blowing — 28 mm neck', machine: 'PET bottle blowing', qty: 6, product: 'PET water bottles', daily: 270_000 },
  { line: 'PET bottle blowing — 38 mm neck', machine: 'PET bottle blowing', qty: 4, product: '150 ml & 200 ml PET bottles', daily: 180_000 },
  { line: 'PET bottle blowing — 44 mm neck', machine: 'PET bottle blowing', qty: 4, product: '150 ml & 200 ml PET bottles', daily: 180_000 },
  { line: 'HDPE blow moulding', machine: 'HDPE blow moulding', qty: 4, product: '150 ml & 200 ml HDPE bottles', daily: 48_000 },
  { line: 'Injection moulding', machine: 'Yongliang 238-ton', qty: 6, product: '38 mm flip covers & 44 mm covers', daily: 210_000 },
  { line: 'Injection moulding', machine: 'Haitian 350-ton', qty: 5, product: '28 mm water caps', daily: 150_000 },
  { line: 'Injection moulding', machine: 'Haitian 250-ton', qty: 6, product: 'Oval lunch boxes', daily: 240_000 },
  { line: 'Injection moulding', machine: 'KONZA 170-ton', qty: 12, product: 'Square lunch boxes', daily: 36_000 },
];

/** Share of the 1,554,000 pieces / day (catalogue p.17). */
export const CAPACITY_BY_APPLICATION = [
  { label: 'Pharmaceutical packaging', detail: 'PET & HDPE bottles and closures', perDay: 618_000, share: 39.8 },
  { label: 'Bottled water packaging', detail: '28 mm bottles and water caps', perDay: 420_000, share: 27.0 },
  { label: 'Food & household', detail: 'Oval and square lunch boxes', perDay: 276_000, share: 17.8 },
  { label: 'PET preforms', detail: 'Water and pharmaceutical supply', perDay: 240_000, share: 15.4 },
];

/** "Our manufacturing approach" (catalogue p.2). */
export const APPROACH = [
  { title: 'Specify', body: 'Understand product, material and performance requirements.' },
  { title: 'Engineer', body: 'Translate requirements into practical moulding and production solutions.' },
  { title: 'Manufacture', body: 'Run controlled production with attention to consistency and efficiency.' },
  { title: 'Verify', body: 'Inspect finished products against agreed specifications.' },
];

/** Custom manufacturing journey (catalogue p.7–8). */
export const CUSTOM_PROCESS = [
  { title: 'Design', body: 'Product concept, dimensions and functional requirements.', tag: 'Agreed specification' },
  { title: 'Prototype', body: 'Development and evaluation of product samples.', tag: 'Approved sample' },
  { title: 'Tooling', body: 'Mould development based on approved specifications.', tag: 'Production-ready mould' },
  { title: 'Production', body: 'Controlled injection, blow moulding and PET processing.', tag: 'Controlled output' },
  { title: 'Finishing', body: 'Colour, decoration and agreed finishing requirements.', tag: 'Colour & decoration' },
  { title: 'Delivery', body: 'Inspection, packaging and preparation for distribution.', tag: 'Inspected & packed' },
];

export const SERVICES = [
  { title: 'OEM production', body: 'Manufacture to your approved product specification, drawing or mould.' },
  { title: 'ODM development', body: 'Product development around your application, format and functional requirements.' },
  { title: 'Private label', body: 'Customer-branded packaging and plastic products, ready for market launch.' },
  { title: 'Custom moulds', body: 'Mould solutions built around approved product geometry and production requirements.' },
];

/** Industries we serve (catalogue p.15). */
export const INDUSTRIES = [
  { title: 'Pharmaceutical & healthcare', body: 'Bottles, containers and closures for medicines and healthcare products.', image: '/images/catalogue/pharma-bottles.jpg' },
  { title: 'Beverage', body: 'Bottle and closure formats for water, beverages and other liquids.', image: '/images/catalogue/pet-bottle-preform.jpg' },
  { title: 'Food', body: 'Food containers and lunch boxes for home, school, hospitality and retail.', image: '/images/catalogue/lunch-boxes.jpg' },
  { title: 'Household & consumer', body: 'Stools, utility products and everyday consumer formats.', image: '/images/catalogue/stools.jpg' },
  { title: 'Personal care', body: 'Practical, presentation-focused packaging and closures.', image: '/images/catalogue/caps-closures.jpg' },
  { title: 'Chemical & industrial', body: 'HDPE containers and packaging for chemical and commercial use.', image: '/images/catalogue/hdpe-jar-white.jpg' },
  { title: 'Agriculture & logistics', body: 'Crates and handling products for storage, movement and distribution.', image: '/images/catalogue/crates.jpg' },
  { title: 'Retail & distribution', body: 'Market-ready plastic products and private-label packaging.', image: '/images/catalogue/drinking-bottles.jpg' },
];

/** Material & process guide (catalogue p.13). */
export const MATERIALS = [
  { code: 'PET', title: 'Bottles & preforms', strengths: 'Clarity • light weight • shatter resistance', process: 'Preform injection • bottle blowing', uses: ['Beverage', 'Water', 'Edible products', 'Personal care'], image: '/images/catalogue/pet-bottle-preform.jpg' },
  { code: 'HDPE', title: 'Rigid containers', strengths: 'Toughness • chemical resistance • impact strength', process: 'Blow moulding', uses: ['Pharmaceutical', 'Household', 'Chemical', 'Industrial'], image: '/images/catalogue/hdpe-jar-white.jpg' },
  { code: 'PP', title: 'Functional consumer products', strengths: 'Rigidity • heat resistance • hinged closures', process: 'Injection moulding', uses: ['Food storage', 'Lunch boxes', 'Caps & closures', 'Household'], image: '/images/catalogue/lunch-boxes.jpg' },
];

/** Quality assurance workflow (catalogue p.16). */
export const QA_WORKFLOW = [
  { title: 'Raw material preparation', body: 'Approved resins prepared for the selected product and process.' },
  { title: 'Moulding / forming', body: 'Injection, PET preform injection, PET blowing and HDPE blow moulding.' },
  { title: 'In-process checks', body: 'Key characteristics checked during production against the specification.' },
  { title: 'Quality inspection', body: 'Visual, dimensional and other applicable checks before release.' },
  { title: 'Packing & handling', body: 'Accepted products packed, identified and prepared for dispatch.' },
  { title: 'Delivery / supply', body: 'Organised for customer orders, distribution and agreed delivery.' },
];

export const TESTS = [
  { title: 'Top-load testing', body: 'Crush resistance of bottles under vertical load.', applies: 'Bottles' },
  { title: 'Leakage testing', body: 'Seal integrity of caps and closures on the container.', applies: 'Closures' },
  { title: 'Dimensional precision check', body: 'Measured with digital callipers against the agreed specification.', applies: 'Digital callipers' },
];

/** What to include in a quote request (catalogue p.14 & 18). */
export const BRIEF_ITEMS = ['Sample', 'Photo', 'Drawing', 'Dimensions', 'Target quantity', 'Intended application', 'Destination', 'Target date'];

export const PARTNERSHIP = [
  { title: 'Quality materials', body: 'Material selection and controlled production support dependable performance.' },
  { title: 'Modern machines', body: 'Injection and blowing equipment for scalable production.' },
  { title: 'Product variety', body: 'Bottles, containers, closures, lunch boxes, household and utility products.' },
  { title: 'Custom production', body: 'Production can work from a mould, sample or defined specification.' },
  { title: 'Practical value', body: 'Solutions aligned with application, design, quantity and commercial requirements.' },
  { title: 'Reliable supply', body: 'Structured production supports repeat orders and growing demand.' },
];
