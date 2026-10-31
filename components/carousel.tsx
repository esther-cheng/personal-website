import React, { useEffect, useState } from "react";

export interface CarouselSlide {
  type?: "image" | "iframe";
  src: string;
  alt?: string;
  allow?: string;
  id?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, slides.length]);

  if (!slides || slides.length === 0) return null;

  const current = slides[currentSlide];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button
          type="button"
          className="carousel-btn prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <div className="carousel-slide-content">
          {current.type === "iframe" ? (
            <iframe
              src={current.src}
              className="course-advisor-demo"
              allow={current.allow || "fullscreen"}
              id={current.id || "video"}
              title={current.alt || "Demo video"}
            />
          ) : (
            <img
              src={current.src}
              alt={current.alt || "Project slide"}
              className="course-advisor-demo pbm-carousel-image carousel-zoomable"
              onClick={() => setIsZoomed(true)}
              title="Click to zoom in"
            />
          )}
        </div>

        <button
          type="button"
          className="carousel-btn next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {isZoomed && current.type !== "iframe" && (
        <div
          className="carousel-modal-backdrop"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
        >
          <button
            type="button"
            className="carousel-modal-close"
            onClick={() => setIsZoomed(false)}
            aria-label="Close enlarged view"
          >
            &times;
          </button>

          <button
            type="button"
            className="carousel-modal-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div
            className="carousel-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt || "Enlarged project slide"}
              className="carousel-modal-image"
            />
          </div>

          <button
            type="button"
            className="carousel-modal-btn next"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next image"
          >
            &#10095;
          </button>

          <div className="carousel-modal-caption">
            {current.alt && <span>{current.alt}</span>}
            <span className="carousel-modal-counter">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

