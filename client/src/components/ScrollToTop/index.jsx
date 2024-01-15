import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      
      if (prevPathname !== pathname) {
        window.scrollTo(0, 0);
        setPrevPathname(pathname);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, prevPathname]);

  return null;
}

export default ScrollToTop;
