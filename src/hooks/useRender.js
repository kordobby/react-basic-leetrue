import { useEffect, useRef } from "react";

const useRender = (componentName) => {
  const renders = useRef(1);
  useEffect(() => {
    renders.current += 1;
  });
  console.log(`
--------------------------------------
Component: ${componentName}
Renders: ${renders.current}
--------------------------------------
  `);
};

export default useRender;
