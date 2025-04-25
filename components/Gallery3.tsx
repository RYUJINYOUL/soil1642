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

const Gallery3 = ({ images }: GalleryProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // const [innerHeight, setInnerHeignt] = useState(window.innerHeight);
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // const resizeListener = () => {
  //   setInnerHeignt(window.innerHeight);
  //   setInnerWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", resizeListener);

  //   return () => {
  //     window.removeEventListener("resize", resizeListener);
  //   };
  // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정


  // console.log("innerHeight", innerHeight);
  // console.log("innerHeight", innerWidth);

  const mainImage = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem key={index} className="relative aspect-video w-full">
          <Image
            src={image}
            alt={`Carousel Main Image ${index + 1}`}
            fill
            // width={innerWidth}
            // height={innerHeight}
            style={{ objectFit: "fill" }}
          />
          <div className='absolute lg:h-full h-screen top-0 bg-black opacity-50 w-full'></div>
          {/* <div className='absolute h-[400px] top-0 bg-gradient-to-t from-white w-full'></div> */}
        </CarouselItem>
      )),
    [images],
  );

  const thumbnailImages = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem
          key={index}
          className="relative aspect-video basis-1/5"
          onClick={() => handleClick(index)}
        >
          <Image
            className={`${index === current ? "border-2" : ""}`}
            src={image}
            width={60}
            height={60}
            alt={`Carousel Thumbnail Image ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        </CarouselItem>
      )),
    [images, current],
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
        {/* <div className="left-[500px]"> */}
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
         <Carousel className="absolute right-1 bottom-0 pr-2" setApi={setThumbnailApi}>
        {/* <CarouselContent>{thumbnailImages}</CarouselContent> */}
      </Carousel>      
        {/* </div> */}
      </Carousel>
    </div>
  );
};


export default Gallery3;