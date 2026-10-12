'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, Sparkles, MessageCircle, Truck, Clock } from 'lucide-react';

interface QuoteCalculatorProps {
  onOpenDirectQuote: (data: { product: string; quantity: number; notes: string }) => void;
}

export default function QuoteCalculator({ onOpenDirectQuote }: QuoteCalculatorProps) {
  const products = [
    { name: 'AgroMax™ Heavy-Duty Harvest Crate', basePrice: 4800, unit: 'crates', minQty: 100, maxQty: 25000, step: 50 },
    { name: 'AeroSeal™ 38mm Tamper-Evident Closures', basePrice: 38, unit: 'closures', minQty: 10000, maxQty: 500000, step: 5000 },
    { name: 'Destma Comfort™ Toddler Bear Chair', basePrice: 3900, unit: 'chairs', minQty: 50, maxQty: 10000, step: 25 },
    { name: 'Destma WonderStool™ Reinforced Stool', basePrice: 2400, unit: 'stools', minQty: 100, maxQty: 20000, step: 50 },
    { name: 'AeroGrip™ 1800ml Ergonomic Flask', basePrice: 2800, unit: 'flasks', minQty: 200, maxQty: 30000, step: 100 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(500);
  const [needCustomColor, setNeedCustomColor] = useState(false);
  const [needLogoEmboss, setNeedLogoEmboss] = useState(false);

  // Calculate discount percentage based on quantity
  const getDiscountPercent = () => {
    if (selectedProduct.name.includes('Closure')) {
      if (quantity >= 200000) return 28;
      if (quantity >= 50000) return 18;
      if (quantity >= 25000) return 10;
      return 0;
    } else {
      if (quantity >= 5000) return 26;
      if (quantity >= 1000) return 18;
      if (quantity >= 300) return 10;
      return 0;
    }
  };

  const discountPercent = getDiscountPercent();
  const unitPrice = Math.round(selectedProduct.basePrice * (1 - discountPercent / 100));
  const totalCost = unitPrice * quantity;
  const totalSavings = Math.round((selectedProduct.basePrice * quantity) - totalCost);

  const estimatedLeadTime = quantity > 5000 || needCustomColor ? '4 - 6 Business Days' : '24 - 48 Hours Express';
  const estimatedPallets = Math.max(1, Math.ceil(quantity / (selectedProduct.name.includes('Closure') ? 25000 : 75)));

  const handleConfettiAndWhatsApp = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0052cc', '#00b140', '#ffb703', '#ffffff'],
      });
    } catch {
      // ignore
    }

    const message = `Hello Destma Plastics, I calculated a B2B quote on your website:
- Product: ${selectedProduct.name}
- Quantity: ${quantity.toLocaleString()} ${selectedProduct.unit}
- Custom Color: ${needCustomColor ? 'Yes' : 'Standard'}
- Logo Embossing: ${needLogoEmboss ? 'Yes' : 'No'}
- Estimated Unit Price: ₦${unitPrice.toLocaleString()}
Please confirm inventory availability and logistics dispatch for this order.`;

    window.open(`https://wa.me/234800337862?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Wholesale Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Destma B2B Bulk Order &{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Savings Estimator
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Real-time direct factory pricing. Scale your packaging and seating requirements 
            with tiered volume discounts and rapid nationwide fulfillment.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl flex flex-col gap-6">
            
            {/* Step 1: Select Product */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Select Product Line
              </label>
              <select
                value={selectedProduct.name}
                onChange={(e) => {
                  const found = products.find((p) => p.name === e.target.value) || products[0];
                  setSelectedProduct(found);
                  setQuantity(found.minQty * 3);
                }}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-emerald-500"
              >
                {products.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Quantity Slider & Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Target Order Quantity
                </label>
                <div className="text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {quantity.toLocaleString()} {selectedProduct.unit}
                </div>
              </div>

              <input
                type="range"
                min={selectedProduct.minQty}
                max={selectedProduct.maxQty}
                step={selectedProduct.step}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1">
                <span>Min: {selectedProduct.minQty.toLocaleString()}</span>
                <span>Max: {selectedProduct.maxQty.toLocaleString()}</span>
              </div>
            </div>

            {/* Step 3: Customization Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <label
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  needCustomColor
                    ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="text-xs font-bold">Custom Brand Masterbatch</span>
                <input
                  type="checkbox"
                  checked={needCustomColor}
                  onChange={(e) => setNeedCustomColor(e.target.checked)}
                  className="w-4 h-4 accent-blue-600"
                />
              </label>

              <label
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  needLogoEmboss
                    ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="text-xs font-bold">In-Mould Company Logo</span>
                <input
                  type="checkbox"
                  checked={needLogoEmboss}
                  onChange={(e) => setNeedLogoEmboss(e.target.checked)}
                  className="w-4 h-4 accent-amber-600"
                />
              </label>
            </div>

            {/* Tier Savings Callout */}
            {discountPercent > 0 && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 animate-pulse" />
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-emerald-800">{discountPercent}% Bulk Volume Discount Applied!</span>{' '}
                  You are saving an estimated <strong className="text-slate-900">₦{totalSavings.toLocaleString()}</strong> compared to standard single batch pricing.
                </div>
              </div>
            )}

            {/* Logistics & Dispatch Estimates */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Dispatch Speed</div>
                  <div className="text-xs font-bold text-slate-900">{estimatedLeadTime}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Est. Logistics Pallets</div>
                  <div className="text-xs font-bold text-slate-900">~{estimatedPallets} Pallets</div>
                </div>
              </div>
            </div>

          </div>

          {/* Pricing & Execution Summary Card */}
          <div className="lg:col-span-5 rounded-3xl p-1 bg-gradient-to-b from-emerald-500/30 via-blue-500/20 to-slate-200 shadow-xl">
            <div className="rounded-[22px] bg-white p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    B2B Quotation Summary
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Direct Factory
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-xs text-slate-500 font-semibold">Estimated Unit Price</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      ₦{unitPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">/ unit</span>
                    {discountPercent > 0 && (
                      <span className="text-xs line-through text-slate-400 font-medium">
                        ₦{selectedProduct.basePrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span className="font-medium">Order Quantity</span>
                    <span className="font-bold text-slate-900">{quantity.toLocaleString()} units</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="font-medium">Factory Volume Discount</span>
                    <span className="font-bold text-emerald-700">{discountPercent}% OFF</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="font-medium">Custom Colorways</span>
                    <span className="font-bold text-slate-900">{needCustomColor ? 'Custom Run' : 'Standard'}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="font-medium">In-Mould Brand Labelling</span>
                    <span className="font-bold text-slate-900">{needLogoEmboss ? 'Included' : 'Standard'}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-700">Estimated Order Total</span>
                    <span className="text-2xl font-black text-emerald-600">
                      ₦{totalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">
                    *Excludes VAT & regional freight. Formal proforma issued upon order confirmation.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={handleConfettiAndWhatsApp}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly via WhatsApp</span>
                </button>

                <button
                  onClick={() =>
                    onOpenDirectQuote({
                      product: selectedProduct.name,
                      quantity,
                      notes: `Custom Color: ${needCustomColor ? 'Yes' : 'No'}, Logo Emboss: ${
                        needLogoEmboss ? 'Yes' : 'No'
                      }`,
                    })
                  }
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors"
                >
                  Submit Official RFP / Email Proforma
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
