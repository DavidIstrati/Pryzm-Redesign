import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";

const AnimatedPath = ({
  d,
  delay,
  stroke,
  strokeWidth,
}: {
  d: string;
  delay: number;
  stroke: string;
  strokeWidth: string;
}) => {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", d);
    setLength(pathElement.getTotalLength());
  }, [d]);

  const spring = useSpring({
    from: { strokeDashoffset: length },
    to: { strokeDashoffset: 0 },
    config: config.molasses,
    duration: 1000,
    delay: delay,
  });

  return (
    <animated.path
      ref={pathRef}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={length}
      {...spring}
    />
  );
};

const Logo = () => {
  const paths = [
    {
      d: "M51 34H91",
      stroke: "#76CDFF",
      strokeWidth: "5",
      delay: 1000,
    },
    {
      d: "M51 48H84.5",
      stroke: "#CC6DFF",
      strokeWidth: "5",
      delay: 2000,
    },
    {
      d: "M51 63H77",
      stroke: "#32C88E",
      strokeWidth: "5",
      delay: 3000,
    },
    {
      d: "M46.9536 0.5L67.9616 16.6601L64.9131 20.6232L46.9212 6.78323L18.4374 28.2299V75.6416H66.4373V80.6416H13.4374V31.9946L8.99609 35.5H0.5L46.9536 0.5Z",
      stroke: "#FFFFFF",
      strokeWidth: "5",
      delay: 0,
    },
  ];

  return (
    <svg
      width="91"
      height="81"
      viewBox="0 0 91 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((path, index) => (
        <AnimatedPath key={index} {...path} />
      ))}
    </svg>
  );
};

export default Logo;
