'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tickHandler = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      gsap.ticker.remove(tickHandler);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative overflow-hidden my-12 rounded-3xl bg-slate-900 shadow-2xl border border-slate-800" ref={parallaxRef}>
      <section className="parallax__header relative h-[450px] sm:h-[550px] overflow-hidden flex items-center justify-center">
        <div className="parallax__visuals relative w-full h-full">
          <div className="parallax__black-line-overflow absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          <div data-parallax-layers className="parallax__layers relative w-full h-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80"
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt="Cinematic background layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
            />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt="Media & Tech connectivity layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover opacity-60 scale-105 mix-blend-screen"
            />
            <div data-parallax-layer="3" className="parallax__layer-title relative z-10 text-center px-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-md text-xs font-accent font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">
                Vision &amp; Leadership
              </span>
              <h2 className="parallax__title font-display text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
                Architecting <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">30+ Years</span> of Excellence
              </h2>
              <p className="mt-3 font-accent text-sm sm:text-base text-slate-300 max-w-xl mx-auto drop-shadow-md">
                Connecting global entertainment studios, enterprise technologies, and high-impact commercial ventures.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt="Modern corporate layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
          </div>
          <div className="parallax__fade absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20" />
        </div>
      </section>
    </div>
  );
}
