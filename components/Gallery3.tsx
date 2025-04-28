"use client";
import { useEffect, useState, useMemo } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

const Gallery3 = ({ images }: GalleryProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);


  const mainImage = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem key={index} className="relative aspect-video w-full h-[500px] md:w-screen md:h-screen">
          <Image
            src={image}
            alt={`Carousel Main Image ${index + 1}`}
            fill
            className='object-cover ml-4'
          />
          <div className='absolute h-screen top-0 bg-black opacity-50 w-full'></div>
        
        </CarouselItem>
      )),
    [images],
  );


  useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = thumbnailApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on("select", handleTopSelect);
    thumbnailApi.on("select", handleBottomSelect);

    return () => {
      mainApi.off("select", handleTopSelect);
      thumbnailApi.off("select", handleBottomSelect);
    };
  }, [mainApi, thumbnailApi]);

  const handleClick = (index: number) => {
    if (!mainApi || !thumbnailApi) {
      return;
    }
    thumbnailApi.scrollTo(index);
    mainApi.scrollTo(index);
    setCurrent(index);
  };

  return (
    <div className="w-full sm:w-auto">
      <Carousel setApi={setMainApi}>
        <CarouselContent>{mainImage}</CarouselContent>
         <Carousel className="absolute right-1 bottom-0 pr-2" setApi={setThumbnailApi}>
      </Carousel>      
      </Carousel>
    </div>
  );
};


export default Gallery3;