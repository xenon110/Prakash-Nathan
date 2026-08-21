"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 90;
const IMG_HEIGHT = 125;

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-[0_8px_25px_rgba(15,23,42,0.1)] border border-slate-200/80 bg-white"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`gallery-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/5 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-blue-50 via-white to-slate-50 flex flex-col items-center justify-center p-4 border border-blue-200"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[9px] font-accent font-bold text-[#1D4ED8] uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-display font-bold text-[#0F172A]">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const IMAGES = [
    "/assets/gallery/Abhishek Kapoor.png",
    "/assets/gallery/Aditi Rao Hydari.png",
    "/assets/gallery/Ali Fazal, Richa Chadda & Amitosh Nagpal.jpeg",
    "/assets/gallery/Amir Khan.png",
    "/assets/gallery/Amrita Puri.png",
    "/assets/gallery/Armaan Malik.png",
    "/assets/gallery/Ashutosh Gowariker.png",
    "/assets/gallery/Carolina Marin.png",
    "/assets/gallery/cii event.jpeg",
    "/assets/gallery/Dalip Tahil.jpeg",
    "/assets/gallery/Gashmeer Mahajani.png",
    "/assets/gallery/Govinda.jpeg",
    "/assets/gallery/Hansal Mehta.jpeg",
    "/assets/gallery/Jaaved Jaaferi.png",
    "/assets/gallery/Javed Ali.jpeg",
    "/assets/gallery/K K Menon.jpeg",
    "/assets/gallery/Kabir Khan.jpeg",
    "/assets/gallery/Kaizad Gustad.jpeg",
    "/assets/gallery/Kunicka Sadanand.jpeg",
    "/assets/gallery/Lauren Gottlieb.png",
    "/assets/gallery/Mahesh Manjrekar.png",
    "/assets/gallery/Milind Soman.jpeg",
    "/assets/gallery/Neha Sharma.jpeg",
    "/assets/gallery/Nitin Kakkar.jpeg",
    "/assets/gallery/Nivetha Pethuraj.jpeg",
    "/assets/gallery/Om Puri.png",
    "/assets/gallery/Prakash Jha.png",
    "/assets/gallery/Pratik Gandhi.jpeg",
    "/assets/gallery/Prithviraj Sukumaran.png",
    "/assets/gallery/Raghuram Rajan.png",
    "/assets/gallery/Raima Sen.png",
    "/assets/gallery/Rajesh Mapuskar.png",
    "/assets/gallery/Rajkumar Hirani.png",
    "/assets/gallery/Roshan se Roshan tak event- Rakesh & Rithik Roshan.png",
    "/assets/gallery/Sachin Tendulkar.png",
    "/assets/gallery/Sanjay Mishra.jpeg",
    "/assets/gallery/Saurabh Shukla.jpeg",
    "/assets/gallery/Shraddha Kapoor.png",
    "/assets/gallery/Sunny Leone 2.png",
    "/assets/gallery/Vir Das.png",
    "/assets/gallery/Warina Hussain.jpeg"
];

const TOTAL_IMAGES = IMAGES.length;
const MAX_SCROLL = 5000;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphGallery() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-gradient-to-b from-blue-50/40 via-white to-slate-50 overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(29,78,216,0.04)]">
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A]"
                    >
                        A Cinematic Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.8 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-5 font-accent text-xs font-bold tracking-[0.3em] text-[#1D4ED8]"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[2%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
                        Moments in <span className="text-[#1D4ED8]">Focus</span>
                    </h2>
                    <p className="font-accent text-sm md:text-base text-[#475569] max-w-lg leading-relaxed">
                        Scroll through a curated collection of behind-the-scenes moments, <br className="hidden md:block" />
                        film premieres, and industry milestones.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 100;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.2 : 0.85);
                            const arcApexY = containerSize.height * (isMobile ? 0.05 : -0.2);
                            const arcCenterY = arcApexY + arcRadius;

                            const visibleSpread = isMobile ? 100 : 130;
                            const startAngle = -90 - (visibleSpread / 2); // Start at left edge
                            const step = isMobile ? 10 : 7; // Fixed angle between images

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            
                            // Calculate how much we need to rotate to see the last image
                            const totalArcAngle = (TOTAL_IMAGES - 1) * step;
                            const maxRotation = Math.max(0, totalArcAngle - visibleSpread + 60); // Padding at end
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
