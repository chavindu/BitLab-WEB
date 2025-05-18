// src/components/utils/ScrollToTop.js (or any preferred path)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: effect runs when pathname changes

  return null; // This component doesn't render anything visible
}

export default ScrollToTop;