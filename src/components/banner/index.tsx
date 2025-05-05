"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import B1 from "./images/banner1.png";
import B2 from "./images/banner2.gif";
import B3 from "./images/banner3.gif";

const images = [B1, B2, B3];

function Banner() {
    const plugin = React.useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
        })
    );

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // شبیه‌سازی زمان لود
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full px-4 max-w-7xl mx-auto">
            {loading ? (
                <div className="w-full h-[400px]">
                    <Skeleton className="w-full h-full rounded-xl" />
                </div>
            ) : (
                <Carousel plugins={[plugin.current]} className="relative">
                    <CarouselContent>
                        {images.map((image, i) => (
                            <CarouselItem key={i}>
                                <div className="relative w-full h-[400px]">
                                    <Image
                                        src={image}
                                        alt={`banner-${i}`}
                                        fill
                                        className="object-cover rounded-xl"
                                        priority
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </div>
    );
}

export default Banner;
