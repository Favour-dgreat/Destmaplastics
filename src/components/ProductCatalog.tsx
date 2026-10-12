'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/data/plasticsData';
import { Search, Filter, Eye, Check, ChevronRight, X, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForQuote: (productName: string) => void;
}

export default function ProductCatalog({ onSelectProductForQuote }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'crates', label: 'Agro & Logistics Crates' },
    { id: 'closures', label: 'Caps & Closures' },
    { id: 'furniture', label: 'Seating & Furniture' },
    { id: 'stools', label: 'Kids & Play Stools' },
    { id: 'drinkware', label: 'Hydration & Bottles' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.specs.material.toLowerCase().includes(query) ||
        item.applications.some((app) => app.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const openProductModal = (product: Product) => {
    setActiveModalProduct(product);
    setActiveModalImage(product.image);
  };

  return (
    <section id="products" className="py-20 lg:py-32 bg-[#f8fafc] relative">
      {/* Background ambient accents */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-blue-100/60 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-emerald-100/60 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Grade Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Precision-Moulded{' '}
              <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Top Products Currently in the Market
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-xl font-medium">
              Explore our line of heavy-duty crates, leakproof closures, and durable furniture. 
              Available for immediate nationwide supply and custom OEM tooling.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product, material, use..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white border border-slate-200 my-8 shadow-sm">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No products found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                {/* Top Image Box */}
                <div>
                  <div className="relative w-full h-56 bg-slate-50 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => openProductModal(product)}
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 shadow-md transition-all"
                      title="Inspect Product Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600">
                        {product.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] text-slate-500 font-bold">
                        MOQ: {product.specs.moq}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-medium">
                      {product.tagline}
                    </p>

                    {/* Micro Specs Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 font-bold truncate max-w-full">
                        {product.specs.material.split(' ')[0]} {product.specs.material.split(' ')[1] || ''}
                      </span>
                      {product.specs.stackingLoad && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold truncate">
                          {product.specs.stackingLoad.split('(')[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => openProductModal(product)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    Specs & Details
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Product Detail Modal (White Theme) */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveModalProduct(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] flex flex-col justify-between overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column: Visual Gallery */}
              <div className="md:col-span-6 flex flex-col gap-3">
                <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={activeModalImage || activeModalProduct.image}
                    alt={activeModalProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain p-6"
                  />
                  {activeModalProduct.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-black bg-blue-600 text-white shadow">
                      {activeModalProduct.badge}
                    </span>
                  )}
                </div>

                {/* Thumbnails row if secondary images exist */}
                {activeModalProduct.secondaryImages && activeModalProduct.secondaryImages.length > 0 && (
                  <div className="flex items-center gap-2 overflow-x-auto pt-1">
                    <button
                      onClick={() => setActiveModalImage(activeModalProduct.image)}
                      className={`relative w-16 h-16 rounded-xl bg-slate-50 border overflow-hidden p-1 transition-all ${
                        (activeModalImage === activeModalProduct.image || !activeModalImage)
                          ? 'border-blue-600 ring-2 ring-blue-500/30'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={activeModalProduct.image}
                        alt="Primary Angle"
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                    {activeModalProduct.secondaryImages.map((secImg, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(secImg)}
                        className={`relative w-16 h-16 rounded-xl bg-slate-50 border overflow-hidden p-1 transition-all ${
                          activeModalImage === secImg
                            ? 'border-blue-600 ring-2 ring-blue-500/30'
                            : 'border-slate-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={secImg}
                          alt={`Angle ${idx + 2}`}
                          fill
                          className="object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Detailed Specifications */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-600 mb-1">
                    {activeModalProduct.category}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{activeModalProduct.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                    {activeModalProduct.description}
                  </p>

                  {/* Technical Specifications Table */}
                  <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 divide-y divide-slate-200 text-xs">
                    <div className="py-1.5 flex justify-between">
                      <span className="text-slate-500 font-medium">Material Resin</span>
                      <span className="font-bold text-slate-900">{activeModalProduct.specs.material}</span>
                    </div>
                    {activeModalProduct.specs.capacityOrSize && (
                      <div className="py-1.5 flex justify-between">
                        <span className="text-slate-500 font-medium">Dimensions / Capacity</span>
                        <span className="font-bold text-slate-900">{activeModalProduct.specs.capacityOrSize}</span>
                      </div>
                    )}
                    {activeModalProduct.specs.stackingLoad && (
                      <div className="py-1.5 flex justify-between">
                        <span className="text-slate-500 font-medium">Rated Load / Pressure</span>
                        <span className="font-bold text-emerald-600">{activeModalProduct.specs.stackingLoad}</span>
                      </div>
                    )}
                    {activeModalProduct.specs.temperatureRange && (
                      <div className="py-1.5 flex justify-between">
                        <span className="text-slate-500 font-medium">Thermal Resistance</span>
                        <span className="font-bold text-slate-900">{activeModalProduct.specs.temperatureRange}</span>
                      </div>
                    )}
                    <div className="py-1.5 flex justify-between">
                      <span className="text-slate-500 font-medium">Food Contact Grade</span>
                      <span className="font-bold text-slate-900">
                        {activeModalProduct.specs.foodGrade ? 'Certified BPA-Free Food Grade' : 'Industrial Grade'}
                      </span>
                    </div>
                    <div className="py-1.5 flex justify-between">
                      <span className="text-slate-500 font-medium">Minimum Order (MOQ)</span>
                      <span className="font-black text-amber-600">{activeModalProduct.specs.moq}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Key Engineering Features
                    </div>
                    <ul className="space-y-1.5">
                      {activeModalProduct.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      const prodName = activeModalProduct.name;
                      setActiveModalProduct(null);
                      onSelectProductForQuote(prodName);
                    }}
                    className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                  >
                    <span>Request Instant Bulk Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/234800337862?text=Hello%20Destma%20Plastics,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(
                      activeModalProduct.name
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
