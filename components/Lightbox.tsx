
import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  isDarkMode: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose, isDarkMode }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-in fade-in duration-300">
      <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
        <button 
          onClick={() => setIsZoomed(!isZoomed)}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          title={isZoomed ? "Zoom Out" : "Zoom In"}
        >
          {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
        </button>
        <button 
          onClick={onClose}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          title="Close"
        >
          <X size={24} />
        </button>
      </div>

      <div className={`w-full h-full flex items-center justify-center overflow-auto lightbox-scroll p-4 md:p-12 cursor-zoom-${isZoomed ? 'out' : 'in'}`}
           onClick={() => !isZoomed ? setIsZoomed(true) : onClose()}>
        <img 
          src={src} 
          alt={alt}
          onClick={(e) => {
            if (isZoomed) {
              e.stopPropagation();
              setIsZoomed(false);
            }
          }}
          className={`transition-all duration-300 max-w-full max-h-full object-contain ${
            isZoomed ? 'scale-[2.0] cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          style={{
            transformOrigin: 'center center'
          }}
        />
      </div>
      
      {!isZoomed && (
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/60 text-sm">{alt}</p>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
