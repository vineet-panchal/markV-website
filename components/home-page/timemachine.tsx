import React from 'react';
import Spline from '@splinetool/react-spline';
import { AuroraText } from '@/components/magicui/aurora-text';
import { Cover } from '../ui/cover';

const timemachine = () => {
  return (
    <>
      <main className="h-[100%] bg-midnight shadow-3xl py-10 mt-20">
        <div className="relative top-20 transform z-10 text-center flex flex-col items-center justify-center">
          <div className=" z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            <span className="">
              Travel Back Through
              <span>
                <AuroraText className="text-16xl italic font-[nyght-serif-dark]"> Time</AuroraText>
              </span> 
            </span>
            <span className=" text-4xl md:text-4xl lg:text-6xl font-semibold text-center bg-clip-text text-white">
              <br /> at <Cover className="font-[nyght-serif-dark] italic">
                {/* <AuroraText className="text-16xl italic font-[nyght-serif-dark]">
                  light speed
                </AuroraText> */}
                light speed
              </Cover>
            </span> 
          </div>
        </div>
        <Spline
          scene="https://prod.spline.design/poaxHmjn6ibZuMeg/scene.splinecode" 
        />
      </main>
    </>
  )
}

export default timemachine;