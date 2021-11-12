import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    setDimensions([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", () =>
      setDimensions([window.innerWidth, window.innerHeight])
    );
    return () => {
      window.addEventListener("resize", () =>
        setDimensions([window.innerWidth, window.innerHeight])
      );
    };
  }, []);

  return dimensions;
}
