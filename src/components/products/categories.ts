export const CATEGORIES = [
  { id: 'all', label: 'All products' },
  { id: 'preforms', label: 'Preforms' },
  { id: 'bottles', label: 'PET bottles' },
  { id: 'pharma', label: 'Pharma & jars' },
  { id: 'closures', label: 'Caps & closures' },
  { id: 'food', label: 'Lunch boxes' },
  { id: 'drinkware', label: 'Drinking bottles' },
  { id: 'household', label: 'Stools' },
  { id: 'crates', label: 'Crates' },
  { id: 'furniture', label: 'Kids chairs' },
];

export const CATEGORY_LABEL: Record<string, string> = {
  preforms: 'PET Preforms',
  bottles: 'PET Bottles & Containers',
  pharma: 'Pharma & Healthcare',
  closures: 'Caps & Closures',
  food: 'Food Packaging',
  drinkware: 'Drinking Bottles',
  household: 'Stools & Household',
  crates: 'Crates & Industrial',
  furniture: 'Kids Furniture',
};

export const isCategory = (id: string | null): id is string => !!id && CATEGORIES.some((c) => c.id === id);
