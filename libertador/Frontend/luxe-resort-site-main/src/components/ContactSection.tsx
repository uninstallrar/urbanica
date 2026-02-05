import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Contacto444444 
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes
            posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Ubicación
                </h3>
                <p className="font-body text-muted-foreground">
                   Av. Del Libertador 5690

                  <br />
                   Belgrano, Buenos Aires
                  <br />
                  Argentina 
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Teléfono
                </h3>
                <p className="font-body text-muted-foreground">
                  Teléfono: 011 4787-3003
                  <br />
                  +34 600 123 456 (Numero ficticio WhatsApp)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Email
                </h3>
                <p className="font-body text-muted-foreground">
                  info@hoteldorado.com
                  <br />
                  reservas@hoteldorado.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-sm text-foreground mb-2 block">
                  Nombre completo
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="border-border focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <label className="font-body text-sm text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="border-border focus:border-gold focus:ring-gold"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Teléfono
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 600 000 000"
                className="border-border focus:border-gold focus:ring-gold"
              />
            </div>

            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Mensaje
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                required
                className="border-border focus:border-gold focus:ring-gold resize-none"
              />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Nuestra Ubicación
        </h2>
        <div className="bg-gray-100 rounded-lg p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184775659963!2d-73.9857009!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2a5b6e9e7b%3A0x8c6b5e6a7c9d5e6f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1659876543210"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            title="Ubicación del hotel"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
