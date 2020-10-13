import { useEffect, useRef, useState } from "react";

function useHover() {
  const [hover, hoverSet] = useState(false);

  const ref = useRef(null);

  function handleMouseOver() {
    hoverSet(true);
  }

  function handleMouseOut() {
    hoverSet(false);
  }

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hover];
}

export default useHover;
