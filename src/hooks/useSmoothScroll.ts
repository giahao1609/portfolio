import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1.2,
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
