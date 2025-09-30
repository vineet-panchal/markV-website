import React from 'react';
import { WobbleCard } from '../ui/wobble-card';
import Image, { StaticImageData } from 'next/image';


interface FeaturedProjectDisplayProps {
  bgColor: string;
  displayImg?: string | StaticImageData;
  header: string;
}


export default function FeaturedProjectDisplay({ bgColor, displayImg, header }: FeaturedProjectDisplayProps) {
  return (
    <>
      <WobbleCard containerClassName={`${bgColor} relative rounded-xl border border-neutral-800 min-h-[500px] lg:min-h-[300px] h-full`}>
        {displayImg && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-[55vh]">
            <div className="font-[outfit] font-bold lg:text-2xl mb-2 text-left pb-5">{header}</div>
            <Image
              src={displayImg}
              alt={header}
              className="rounded-xl w-full h-auto object-contain"
            />
          </div>
        )}
      </WobbleCard>
    </>
  );
};