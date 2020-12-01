import React, { createRef, useState } from "react";

import "./ripple.scss";

interface RippleItemProps {
  containerRef: React.RefObject<HTMLDivElement>;
  pageX: number;
  pageY: number;
}

function useDebounce(action: TimerHandler, delay: number) {
  const [inDebounce, setInDebounce] = useState<number>();
  return function () {
    clearTimeout(inDebounce);
    setInDebounce(setTimeout(action, delay));
  };
}

const RippleItem = ({ containerRef, pageX, pageY }: RippleItemProps) => {
  if (!containerRef.current) {
    return <></>;
  }
  const size = containerRef.current.offsetWidth;
  const pos = containerRef.current.getBoundingClientRect();
  const x = pageX - pos.left - size / 2;
  const y = pageY - pos.top - size / 2;

  return (
    <span
      style={{
        top: y + "px",
        left: x + "px",
        height: size + "px",
        width: size + "px",
      }}
      className="sdc-effect-ripple-container-item"
    />
  );
};

interface Props {}

const Ripple = ({}: Props) => {
  const [ripples, setRipples] = useState<JSX.Element[]>([]);
  const containerRef = createRef<HTMLDivElement>();
  const cleanUp = useDebounce(() => {
    console.log("clean");
    setRipples([]);
  }, 2000);

  function addRipple(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!containerRef.current) {
      return;
    }

    const newRipple = (
      <RippleItem containerRef={containerRef} pageX={e.pageX} pageY={e.pageY} />
    );
    setRipples((current) => {
      return [...current, newRipple];
    });
  }

  return (
    <div
      ref={containerRef}
      className="sdc-effect-ripple-container"
      onMouseDown={addRipple}
      onMouseUp={cleanUp}
      onMouseLeave={cleanUp}
    >
      {ripples}
    </div>
  );
};

export default Ripple;
