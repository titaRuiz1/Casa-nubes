import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComponent({ images }: { images: string[] }) {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  return (
    <>
      <section className="py-10 md:py-10 lg:py-10 bg-section-beige">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps",
          }}
          className="w-full bg-section-beige"
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-4 basis-auto">
                <div
                  onClick={() => setPreviewImage(image)}
                  className="cursor-pointer hover:opacity-90 transition-opacity bg-[#f5f1e8]"
                >
                  <img
                    src={image}
                    alt={`Habitación Gatmalap ${index + 1}`}
                    className="h-[300px] md:h-[400px] w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 text-black opacity-50" />
          <CarouselNext className="right-4 text-black opacity-50" />
        </Carousel>
      </section>

      {/* Modal de previsualización */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white rounded-xl p-3 transition-all hover:scale-110 text-black"
            aria-label="Cerrar vista previa"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          <img
            src={previewImage}
            alt="Vista previa"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
