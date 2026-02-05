import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBeach from "@/assets/img/libertador/bahtroom1.png";
import heroMountain from "@/assets/img/libertador/urbanica lotion.png";
import heroCoastal from "@/assets/img/libertador/bar.png";

const slides = [
  {
    image: heroBeach,
    title: "The Libertador",
    subtitle: "Duchas de lujo y confort moderno",
  },
  {
    image: heroMountain,
    title: "Refugio de Montaña",
    subtitle: "Donde la naturaleza te abraza",
  },
  {
    image: heroCoastal,
    title: "Lounge Bar",
    subtitle: "Elegancia frente al mar",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in"
            key={`title-${currentSlide}`}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className="font-body text-xl md:text-2xl text-white/90 mb-10 animate-slide-up"
            key={`subtitle-${currentSlide}`}
          >
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              Reservar Ahora
            </Button>
            <Button variant="heroOutline" size="xl">
              Consultar
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
