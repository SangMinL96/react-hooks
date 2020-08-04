import { useEffect } from "react";

export const useMovieLeave = (leaveText) => {
  if (typeof leaveText !== "function") {
    return;
  }
  const handle = () => {
    leaveText();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
