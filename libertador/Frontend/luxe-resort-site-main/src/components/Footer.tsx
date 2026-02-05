import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-gold-light mb-4">
              Hotel Dorado
            </h3>
            <p className="font-body text-background/70 mb-6">
              Un oasis de lujo y tranquilidad donde cada detalle está pensado
              para brindarte una experiencia inolvidable.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 font-body">
              <li>
                <a
                  href="#inicio"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#ofertas"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Avenida del Mar, 123
                  <br />
                  Costa del Sol, Málaga 29600
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">+34 952 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">info@hoteldorado.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Ubicación
            </h4>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8889425994545!2d-4.426177!3d36.721244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7be4c1f8f5d%3A0x5e8c6dc3d12c7a0d!2sCosta%20del%20Sol%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Hotel Dorado"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-body text-background/60 text-sm">
            © {new Date().getFullYear()} Hotel Dorado. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
