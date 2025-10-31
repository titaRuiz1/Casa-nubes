import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function Gallery({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const observerRef = useRef(null);

  // Convertir objeto a array si es necesario
  const galleryImages = Array.isArray(images)
    ? images
    : Object.entries(images).map(([key, src]) => ({
        src,
        alt: `Galería ${key} - La Casa del Bosque de Nubes`,
        id: key,
      }));

  useEffect(() => {
    // Intersection Observer para animaciones
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observar todos los elementos de la galería
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => observerRef.current.observe(item));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Manejar teclas
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  useEffect(() => {
    // Prevenir scroll cuando el lightbox está abierto
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="galeria" className='bg-section-olive'>
      <div className='container mx-auto px-4 max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Galería
          </h2>
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id || index}
              image={image}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Cerrar galería"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] w-full flex items-center justify-center">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={showNextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Siguiente imagen"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            <span>{currentImageIndex + 1}</span> / <span>{galleryImages.length}</span>
          </div>
        </div>
      )}
    </section>
  );
}

// Componente separado para cada item de la galería con lazy loading
function GalleryItem({ image, index, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className="gallery-item group relative overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid bg-gray-100"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      onClick={onClick}
      style={{ marginBottom: '8px' }}
    >
      {isInView && (
        <img
          src={image.src}
          alt={image.alt}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto transform group-hover:scale-105 transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
