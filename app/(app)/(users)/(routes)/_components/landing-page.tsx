"use client";

import styles from "./app.module.css";
import { Experience } from "./_Components/Experience";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Interface } from "./_Components/Interface";
import { SimpleCameraRig } from "./_Components/SimpleCameraRig";

import {
  OrbitControls,
  ScrollControls,
  Scroll,
  PerspectiveCamera,
} from "@react-three/drei";
import { ScrollManager } from "./_Components/ScrollManager";

export const LandingPageComponent = () => {
  const [section, setSection] = useState(0);

  const skillsPageBackgroundRef = useRef();

  const [scrollOffset, setScrollOffset] = useState(0);

  const [scrollData, setScrollData] = useState(0);

  const [device, setDevice] = useState("web");
  const [backVideoX, setBackVideoX] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      setDevice(innerWidth > innerHeight ? "web" : "mobile");
      console.log((960 - innerWidth / 2) * -1);

      const videoW = (innerHeight / 1080) * 1920;
      setBackVideoX(
        innerWidth > innerHeight
          ? 0
          : (videoW / 2 - innerWidth / 2) * -1 - videoW * 0.25
      );
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  let x;

  const cameraRef = useRef();

  useEffect(() => {
    if (scrollData) {
      x = mapNumRange(
        scrollOffset,
        0,
        1 / (scrollData.pages - 1),
        0,
        scrollData.el.clientHeight
      );
      // console.log(scrollData.offset)
    }
    const landingPage = skillsPageBackgroundRef.current;
    landingPage.style.transform = `translateY(-${x}px)`;
  }, [scrollOffset]);

  return (
    <main className={`${styles.main} ${device}`}>
      <div className={styles.skillsPage} ref={skillsPageBackgroundRef}>
        <video
          className="back-video"
          autoPlay
          muted
          loop
          style={{
            width: device === "web" ? "100%" : "auto",
            height: "100%",
            transform: `translateX(${backVideoX}px)`,
          }}
        >
          <source src="/bACKGROUND.mp4" type="video/mp4" />
          {/* stock-market-2023-11-27-05-36-31-utc_compressed */}
        </video>
      </div>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[3.5, 3, 5]} // Set the position of the camera
          fov={25} // Field of view
          near={0.1}
          far={1000}
          ref={cameraRef}
        />

        {/* <OrbitControls enableZoom={false} /> */}

        <SimpleCameraRig></SimpleCameraRig>

        <ScrollControls pages={4} damping={0.1} maxSpeed={0.5}>
          <ScrollManager
            section={section}
            onSectionChange={setSection}
            setScrollOffset={setScrollOffset}
            setScrollData={setScrollData}
          />
          <Scroll>
            <Experience
              device={device}
              section={section}
              cameraRef={cameraRef}
            />
          </Scroll>
          <Scroll html>
            <Interface device={device} section={section} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
};
