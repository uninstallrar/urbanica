import { Button } from "@/components/ui/button";
import offerSuite from "@/assets/offer-suite.jpg";
import offerSpa from "@/assets/offer-spa.jpg";
import offerDining from "@/assets/offer-dining.jpg";
import terrace from "@/assets/img/libertador/rooms/terrace.png";
import standar1 from "@/assets/img/libertador/rooms/standart.png";
import grandking from "@/assets/img/libertador/rooms/grandking.png";
import club from "@/assets/img/libertador/rooms/club.png";
<section id="habitaciones" className="py-20 bg-cream scroll-mt-24"></section>

const offers = [
  {
    id: 1,
    image: terrace,
    title: "Terrace",
    description:
      "Nuestra habitación Terrace ofrece vistas espectaculares a la Ciudad de Buenos Aires. Lujo y comodidad son las características principales. Cuenta con una cama king size, con finas sábanas de algodón y una gran TV LED. El baño ofrece productos de baño de lujo y una cabina de ducha acrístalada.",
    price: "€450",
    originalPrice: "€600",
    perNight: true,
  },
  {
    id: 2,
    image: standar1,
    title: "Standard",
    description:
      "Relájate con tratamientos de spa premium, masajes terapéuticos y acceso ilimitado a nuestras instalaciones.",
    price: "€280",
    originalPrice: "€350",
    perNight: true,
  },
  {
    id: 3,
    image: grandking,
    title: "Grand King",
    description:
      "Degusta nuestra cocina gourmet con cena romántica frente al mar, maridaje de vinos y chef privado.",
    price: "€180",
    originalPrice: "€220",
    perNight: false,
  },

{
    id: 2,
    image: club,
    title: "Club",
    description:
      "Disfruta mayores comodidades que ofrece nuestra categoría superior: frigobar, pava eléctrica con té y café de cortesía, espejos de cuerpo completo, tv smart de 42'' y sillón individual son algunos de los amenities que harán la diferencia en su estadía. El baño cuenta con bañera individual que invita a relajarse y disfrutar.",
    price: "€280",
    originalPrice: "€350",
    perNight: true,
  },

];
const OffersSection = () => {
  return (
    <section id="Ofertas" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Habitaciones 
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiencias Inolvidables
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras ofertas especiales diseñadas para brindarte
            momentos únicos y recuerdos que perdurarán para siempre.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="card-elegant bg-background group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-body text-sm font-semibold">
                  -
                  {Math.round(
                    ((parseInt(offer.originalPrice.replace("€", "")) -
                      parseInt(offer.price.replace("€", ""))) /
                      parseInt(offer.originalPrice.replace("€", ""))) *
                      100
                  )}
                  %
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {offer.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                  {offer.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-heading text-3xl font-bold text-gold">
                    {offer.price}
                  </span>
                  <span className="font-body text-muted-foreground line-through">
                    {offer.originalPrice}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {offer.perNight ? "/ noche" : "/ persona"}
                  </span>
                </div>

                {/* Button */}
                <Button variant="gold" className="w-full">
                  Reservar Ahora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
