// Approximate swatch colours for the product colour names in plasticsData.
const KEYWORDS: [RegExp, string][] = [
  [/metallic/i, 'linear-gradient(135deg,#d4d4d8,#71717a,#e4e4e7)'],
  [/sage/i, 'linear-gradient(135deg,#a3b8a0 50%,#f5f5f0 50%)'],
  [/rose|mauve/i, 'linear-gradient(135deg,#e8b4b8 50%,#b48ea0 50%)'],
  [/navy/i, '#0b1f4d'],
  [/charcoal|slate|smoke/i, '#3f3f46'],
  [/black/i, '#111111'],
  [/ivory/i, '#f6f1e3'],
  [/white/i, '#ffffff'],
  [/pink|bubblegum/i, '#f9a8d4'],
  [/cyan|sky/i, '#67e8f9'],
  [/lime|mint/i, '#a3e635'],
  [/yellow/i, '#facc15'],
  [/red|ruby|cherry/i, '#dc2626'],
  [/emerald/i, '#059669'],
  [/forest|green/i, '#15803d'],
  [/royal|ocean|destma blue|blue/i, '#004EAB'],
];

export function swatchFor(name: string) {
  return KEYWORDS.find(([re]) => re.test(name))?.[1] ?? '#cbd5e1';
}
