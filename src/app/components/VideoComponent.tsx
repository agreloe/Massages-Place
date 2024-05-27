import React, { useRef, useEffect } from 'react';
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(videoRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    let anim = gsap.fromTo(q('.section'), {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: Expo.easeOut,
    }
    )

    anim.play();

  })



  return (
    <div ref={videoRef} className='flex items-center justify-between sm:flex-col sm:gap-16 sm-justify-center h-full'>
        <div className='section'>
            <p className='color-text-color text-2xl sm:hidden'>&#10022;</p>
            <h1 className='sm:text-center'>Masajes Compostela</h1>
            <p className='w-[60%] sm:w-full sm:text-center'>Tu oasis de relajación y bienestar. El destino ideal para tu descanso y rejuvenecimiento.</p>
        </div>

        <span className='h-full w-[1px] block bg-text_color absolute top-0 left-[50%] translate-[-50%, -50%] sm:hidden'></span>

        <div className="arc-wrapper section">

      <div className='arc'>
        <video className='arc-video' autoPlay loop muted>
        <source src="/video-massage.mp4" type="video/mp4" />
        </video>
      </div>
        </div>
    </div>
  );
};

export default VideoComponent;