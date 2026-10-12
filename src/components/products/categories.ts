export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'crates', label: 'Crates' },
  { id: 'closures', label: 'Caps & Closures' },
  { id: 'furniture', label: 'Chairs' },
  { id: 'stools', label: 'Stools' },
  { id: 'drinkware', label: 'Drinkware' },
];

export const CATEGORY_LABEL: Record<string, string> = {
  crates: 'Crates & Logistics',
  closures: 'Caps & Closures',
  furniture: 'Chairs & Furniture',
  stools: 'Kids & Play Stools',
  drinkware: 'Bottles & Drinkware',
  custom: 'Custom Moulding',
};

export const isCategory = (id: string | null): id is string => !!id && CATEGORIES.some((c) => c.id === id);
