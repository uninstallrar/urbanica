import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const rooms = [
  {
    name: "Suite Deluxe",
    description: "Vista al mar, cama king, jacuzzi",
    price: "$180 / noche",
    images: ["/room1.jpg", "/room2.jpg", "/room3.jpg"],
  },
  {
    name: "Habitación Premium",
    description: "Balcón privado, desayuno incluido",
    price: "$130 / noche",
    images: ["/room4.jpg", "/room5.jpg"],
  },
];

export default function RoomsSection() {
  return (
    <section id="habitaciones" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Habitaciones</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {rooms.map((room, index) => (
          <Card key={index} className="overflow-hidden">
            <Carousel>
              <CarouselContent>
                {room.images.map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={img}
                      className="w-full h-[280px] object-cover"
                      alt={room.name}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <CardContent className="space-y-3 pt-4">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-muted-foreground">{room.description}</p>
              <p className="font-bold">{room.price}</p>

              <Button className="w-full">Reservar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
