import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
      href
      id="scrollToTop"
      className="back-to-top"
    >
      <i className="fa fa-chevron-up" />
    </button>
  );
};

export default ScrollButton;
