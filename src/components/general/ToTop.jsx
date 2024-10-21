import { useEffect } from "react";

const ToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
};

export default ToTop;