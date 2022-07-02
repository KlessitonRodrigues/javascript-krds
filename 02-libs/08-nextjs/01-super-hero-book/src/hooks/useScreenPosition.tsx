import { useEffect, useState } from "react";

const ScreenPosition = (elementID: string) => {
  const [position, setPosition] = useState({ top: 1, bottom: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const el = document.getElementById(elementID);
      const elPosition = el?.getBoundingClientRect();
      const top = Number(elPosition?.top.toFixed(0));
      const bottom = Number(elPosition?.bottom.toFixed(0));

      console.log(position);

      setPosition({
        top,
        bottom,
      });
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return position;
};

export default ScreenPosition;
