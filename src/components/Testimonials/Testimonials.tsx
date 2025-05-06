"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Laura M.",
    role: "CTO at HealthSync",
    comment:
      "Nico was key in helping our system scale effortlessly. A top-level professional.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Carlos R.",
    role: "Founder at DevSolutions",
    comment:
      "Excellent technical quality and a proactive attitude. He always delivers.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sofía G.",
    role: "Project Manager at FutureWeb",
    comment:
      "The best developer we've worked with so far. We'd hire him again without hesitation.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Andrés T.",
    role: "CEO at CodeCraft",
    comment:
      "Always resourceful with creative ideas. His work made a big difference in our project.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Valentina S.",
    role: "Tech Lead at NovaApps",
    comment:
      "I trust Nico for any technical challenge. Great commitment and professionalism.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Julián D.",
    role: "Engineer at BrightSoft",
    comment:
      "Collaborative, talented, and always willing to contribute. Nico is a reference in his field.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay cada 5 segundos
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[33.3333%] flex justify-center items-center"
              >
                <Card className="w-full p-6">
                  <CardContent className="flex flex-col items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full shadow-md"
                    />
                    <p className="text-lg font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                    <p className="text-base italic mt-2">"{t.comment}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Button onClick={scrollPrev}>Previous</Button>
          <Button onClick={scrollNext}>Next</Button>
        </div>
      </div>
    </section>
  );
}
