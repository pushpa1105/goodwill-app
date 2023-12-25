import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";


import anime from "animejs";

export const ScrollManager = (props) => {
  const { section, onSectionChange, setScrollOffset, setScrollData } = props;

  const data = useScroll();
  setScrollData(data);

  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const prevSection = useRef(0);
  data.fill.classList.add("fixScroll");

  const setDelay = useRef(0);

 

  useEffect(() => {
    // if (section === 0) {
    //   console.log(section);
    // }


    anime({
      targets: data.el,
      scrollTop: section * data.el.clientHeight,
      duration: 1000,
      delay: setDelay.current,
      begin: () => {
        isAnimating.current = true;

      },
      complete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);





  useFrame(() => {
    setScrollOffset(data.offset);
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;

      return;
    }
    // console.log(data.offset,data.scroll.current)
    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
      setDelay.current = 100;
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0);
      setDelay.current = 0;
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};

