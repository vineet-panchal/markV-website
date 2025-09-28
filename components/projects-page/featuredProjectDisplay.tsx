import React from 'react';
import { WobbleCard } from '../ui/wobble-card';
import Image, { StaticImageData } from 'next/image';


interface FeaturedProjectDisplayProps {
  bgColor: string;
  displayImg?: string | StaticImageData;
}


export default function FeaturedProjectDisplay({ bgColor, displayImg }: FeaturedProjectDisplayProps) {
  return (
    <>
      <WobbleCard containerClassName={`${bgColor} relative rounded-xl border border-neutral-800 min-h-[500px] lg:min-h-[300px] h-full`}>
        <div className="absolute top-5">caksdf</div>
        {displayImg && (
          <div className="absolute bottom-0 rounded-xl left-1/2 -translate-x-1/2 flex justify-center items-center w-[55vh] " >
            <Image
              src={displayImg}
              alt={`${displayImg}`.toLowerCase()}
              className="rounded-xl flex justify-center w-full h-auto items-center align-bottom" 
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </WobbleCard>
    </>
  );
};