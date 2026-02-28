import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { elements, categories } from './data';

interface ElementData {
  number: number;
  symbol: string;
  name: string;
  mass: string;
  category: string;
  col: number;
  row: number;
  orbitals: number[];
}

const ElementBox = ({ el, isActive }: { el: ElementData, isActive: boolean }) => (
  <div className="@container w-full h-full relative overflow-hidden">
    <div className={`absolute inset-0 border-[max(1px,0.12rem)] border-current bg-[#101318] transition-shadow duration-300 ${isActive ? 'shadow-[0_0_2rem_currentColor]' : ''}`}>
      
      {/* Atomic Number */}
      <span className="absolute top-[4%] left-[6%] text-[18cqw] leading-none font-medium">{el.number}</span>
      
      {/* Symbol & Name */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-[8%] transition-transform duration-500 z-10 ${isActive ? 'translate-y-[2%]' : ''}`}>
        <div className={`${isActive ? 'text-[32cqw]' : 'text-[42cqw]'} font-bold leading-none transition-all duration-500`}>{el.symbol}</div>
        <div className="text-[10cqw] mt-[2%] leading-[1.1] text-center break-words w-full font-medium">{el.name}</div>
      </div>

      {/* Mass */}
      <span className="absolute bottom-[4%] left-0 right-0 text-center text-[9cqw] leading-none opacity-80">
        {el.mass}
      </span>

      {/* Atom Model - Kept inside the box */}
      {isActive && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          {el.orbitals.map((count, i) => {
            // Adjusted size to stay within the 100% box (max size ~92%)
            const size = 35 + i * 8.5; 
            const duration = 25 - i * 3; 
            return (
              <div 
                key={i} 
                className="absolute border-[max(1px,0.3cqw)] border-current rounded-full opacity-15 animate-[spin_linear_infinite]"
                style={{ 
                  width: `${size}%`, 
                  height: `${size}%`,
                  animationDuration: `${duration}s`
                }}
              >
                {Array.from({ length: count }).map((_, j) => {
                  const angle = (360 / count) * j;
                  return (
                    <div 
                      key={j} 
                      className="absolute inset-0" 
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <div className="absolute top-[-1cqw] left-[calc(50%-1cqw)] w-[2cqw] h-[2cqw] bg-current rounded-full opacity-100 shadow-[0_0_0.5cqw_currentColor]" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  </div>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeElement, setActiveElement] = useState<number | null>(null);

  const activeElData = elements.find(e => e.number === activeElement);

  return (
    <div className="min-h-screen bg-[#101318] text-white p-2 sm:p-4 md:p-8 font-sans flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto relative pt-24 lg:pt-0">
        
        {/* Header / Legend */}
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-6 justify-center lg:justify-start lg:absolute lg:top-0 lg:left-[12%] lg:w-[70%] z-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 ${activeCategory && activeCategory !== cat.id ? 'opacity-20 scale-95' : 'opacity-100 hover:opacity-80 hover:scale-105'}`}
              style={{ color: `var(--color-${cat.id})` }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Periodic Table Grid */}
        <div className="grid grid-cols-18 gap-[0.4vw] relative lg:mt-16 w-full">
          {elements.map(el => {
            const isFaded = activeCategory && activeCategory !== el.category;
            const isActive = activeElement === el.number;
            
            return (
              <div key={el.number} style={{ gridColumn: el.col, gridRow: el.row }} className="relative aspect-square">
                <motion.div
                  layoutId={`element-${el.number}`}
                  onClick={() => setActiveElement(el.number)}
                  className={`absolute inset-0 cursor-pointer transition-all duration-300
                    ${isFaded && !isActive ? 'opacity-10 grayscale blur-[1px]' : 'opacity-100'}
                    ${isActive ? 'opacity-0 pointer-events-none' : 'hover:scale-125 hover:z-20'}
                  `}
                  style={{ color: `var(--color-${el.category})` }}
                >
                  <ElementBox el={el} isActive={false} />
                </motion.div>
              </div>
            );
          })}
          
          {/* Placeholders for Lanthanoids and Actinoids */}
          <div className="col-start-3 row-start-6 relative aspect-square">
            <div className="@container absolute inset-0">
              <div className="absolute inset-0 border-[max(1px,0.12rem)] border-current opacity-30 flex items-center justify-center" style={{ color: 'var(--color-lanthanoid)' }}>
                <span className="text-[22cqw] font-bold">57-71</span>
              </div>
            </div>
          </div>
          <div className="col-start-3 row-start-7 relative aspect-square">
            <div className="@container absolute inset-0">
              <div className="absolute inset-0 border-[max(1px,0.12rem)] border-current opacity-30 flex items-center justify-center" style={{ color: 'var(--color-actinoid)' }}>
                <span className="text-[22cqw] font-bold">89-103</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Active Element Overlay */}
      <AnimatePresence>
        {activeElData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-[#101318]/70"
              onClick={() => setActiveElement(null)}
            />
            
            <div className="relative flex flex-col items-center gap-4 pointer-events-none">
              {/* Orbitals (Valence) - Now part of the centered layout but outside the box */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex justify-center gap-3 text-lg sm:text-xl font-mono font-bold"
                style={{ color: `var(--color-${activeElData.category})` }}
              >
                {activeElData.orbitals.map((o, i) => <span key={i}>{o}</span>)}
              </motion.div>

              <motion.div
                layoutId={`element-${activeElData.number}`}
                className="relative w-[70vw] max-w-[280px] sm:max-w-[320px] aspect-square pointer-events-auto cursor-pointer z-[101]"
                style={{ color: `var(--color-${activeElData.category})` }}
                onClick={() => setActiveElement(null)}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <ElementBox el={activeElData} isActive={true} />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
