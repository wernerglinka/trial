import { useState, useEffect } from "react";

/**
 * useWindowWidth()
 * Function returns true is the actual widow width is smaller then the
 * passed-in value of smallWindowWidth
 * @param {number} smallWindowWidth - The value to which the actual window width is compared to
 * @return {boolean} Is True for width < smallWindowWidth
 */
function useWindowWidth(smallWindowWidth) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout;

    const handleResize = () => {
      // debounce resize events
      if (!timeout) {
        timeout = setTimeout(function() {
          setWidth(window.innerWidth);
        }, 300);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width < smallWindowWidth;
}

export default useWindowWidth;
