import React, { useRef, useCallback } from "react";
import useAnimationFrame from "./UseAnimationFrame.jsx";

const SliderContainer = ({ children, initialOffsetX, className }) => {
  const refScrollX = useRef(initialOffsetX);
  const refContainer = useRef(null);
  const refContent = useRef(null);

  const enabled = true;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (refScrollX.current >= elContent.clientWidth / 2) {
          refScrollX.current -= elContent.clientWidth / 2;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`overflow-x-hidden whitespace-nowrap max-w-full ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
        {children}
      </div>
    </div>
  );
};

const SliderItem = ({ children, className, width }) => (
  <div className={`inline-flex justify-center items-center ${className}`} style={{ width }}>
    {children}
  </div>
);

export { SliderContainer as default, SliderItem };