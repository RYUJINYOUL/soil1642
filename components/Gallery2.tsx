"use client";
import { useEffect, useState, useMemo } from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

const Gallery2 = ({ images }: GalleryProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const mainImage = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem key={index} className="relative aspect-video w-full h-[353px] rounded-md">
          <Image
            src={image}
            alt={`Carousel Main Image ${index + 1}`}
            fill
            className='object-cover ml-4 rounded-md'
          />
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


  return (
    <div className="w-full">
    <Carousel>
      <div className="flex flex-row justify-between items-end">
      <article className="flex flex-row gap-3">
   
            <div className="flex flex-col justify-center">
              <div>
               
              </div>
              <div className="text-[34px] font-bold leading-[34px] ">
               
              </div>
            </div>
          </article>
        <div className="relative left-[-45px]">
          <div className="absolute bottom-[45px]">
            <CarouselPrevious className="right-2" />
            <CarouselNext className=" left-1" />
          </div>
        </div>
      </div>
      <CarouselContent className="w-full">{mainImage}</CarouselContent>
    </Carousel>
  </div>
    // <div className="w-full sm:w-auto">
    //   <Carousel className="flex justify-center items-center" setApi={setMainApi}>
    //     <CarouselContent className="w-[640px]">{mainImage}</CarouselContent>
    //     <CarouselPrevious className="left-5"/>
    //     <CarouselNext className="right-5" />
    //   </Carousel>
    // </div>
  );
};


export default Gallery2;