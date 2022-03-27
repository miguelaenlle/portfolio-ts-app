import { useEffect, useState } from "react";

export default function useOnScreen(
  ref: null | React.RefObject<HTMLDivElement>
) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref) {
      if (ref.current) {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
          observer.disconnect();
        };
      }
    }
  }, []);

  return isIntersecting;
}
