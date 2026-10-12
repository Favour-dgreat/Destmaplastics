'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialNotes?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialProduct = '',
  initialNotes = '',
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: initialProduct || 'AgroMax™ Heavy-Duty Harvest Crate',
    quantity: '500',
    location: 'Lagos',
    notes: initialNotes || '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialProduct, initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }

    const message = `*Destma Plastics - B2B Quotation Request:*
- Client Name: ${formData.name}
- Company: ${formData.company || 'N/A'}
- WhatsApp/Phone: ${formData.phone}
- Email: ${formData.email}
- Product: ${formData.product}
- Order Quantity: ${formData.quantity}
- Destination State: ${formData.location}
- Specifications/Notes: ${formData.notes || 'None'}`;

    window.open(`https://wa.me/234800337862?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Dialog (White Theme) */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-8">
        
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-amber-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-black text-slate-900">Quotation Request Transmitted!</h3>
            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto font-medium">
              We have launched your customized dispatch ticket. A commercial account representative is connecting with you right now.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-xs uppercase shadow-md shadow-blue-600/20"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Direct Factory RFP</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">Request Official Wholesale Quote</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6 font-medium">
              Receive factory-direct unit pricing, MOQ terms, and nationwide freight options.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Company / Enterprise</label>
                  <input
                    type="text"
                    placeholder="Corporate name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Product Line</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-bold"
                  >
                    <option value="AgroMax™ Heavy-Duty Harvest Crate">AgroMax™ Harvest Crate (500kg Load)</option>
                    <option value="AeroSeal™ 38mm Tamper-Evident Closure">AeroSeal™ 38mm Tamper Closure</option>
                    <option value="Destma Comfort™ Toddler Bear Chair">Toddler Bear Chair</option>
                    <option value="ProFold Heavy-Duty Folding Chair">ProFold Folding Chair</option>
                    <option value="Destma WonderStool™ Reinforced Stool">WonderStool™ Reinforced Stool</option>
                    <option value="AeroGrip™ 1800ml Ergonomic Flask">AeroGrip™ 1800ml Flask</option>
                    <option value="Custom OEM Tooling & Mould">Custom OEM Tooling & Mould</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Quantity Required</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1,000 units"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Delivery Destination State</label>
                <input
                  type="text"
                  placeholder="e.g. Lagos, Ibadan, Abuja, Kano, Port Harcourt..."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Additional Specifications / Colors</label>
                <textarea
                  rows={2}
                  placeholder="e.g. In custom green colorway with our company logo embossed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Generate Proforma</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
