import React from "react";
import { scrollTo } from '@/utils/scrollTo'
// @ts-ignore
const ScrollToButton = ({ toId, duration, children }) => {
  const handleClick = () => scrollTo({ id: toId, duration });

  return <button className="w-full text-left" onClick={handleClick}>{children}</button>;
};

export default ScrollToButton;