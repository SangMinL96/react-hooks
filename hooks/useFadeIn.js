import React, { useRef, useEffect } from "react";
import "./styles.css";

const useFadeIn = () => {
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    current.style.opacity = 1;
    current.style.transition = `opacity 3s `;
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeIn = useFadeIn();
  return (
    <div className="App">
      <h1 {...fadeIn}>Hello ddCodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
