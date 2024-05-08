import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from './Button'
import './index.scss'
import Logo from './Logo'
import NavDeslice from './NavDeslice';


export const Navbar = () => {

  const [btnActivate, setBtnActivate] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to('.navbar', {
      duration: 0.3,
      y: isVisible ? 0 : -100, 
      opacity: isVisible ? 1 : 0, 
      ease: 'power2.inOut', 
    });
  }, [isVisible]);

  return (
    <div className='navbar'>
          { btnActivate &&
            <NavDeslice btnActivate={btnActivate}/>
          }
        <div className='navbar__click'>
        <HiOutlineMenuAlt3 onClick={() => setBtnActivate(prevState => !prevState)} size={40} />
        </div>
      <div className='navbar__blur'></div>
        <div>
          <Logo/>
        </div>
        <div className='navbar__buttons'>
          <a href='#about'><span>01.</span> About</a>
          <a href='#work'><span>02.</span> Experience</a>
          <a href='#proyect'><span>03.</span> Proyect</a>
          <a href='#contact'><span>04.</span> Contact</a>
          <Button url='./resume.pdf' text='Resume' width={0.75} height={1}/>
        </div>
    </div>
  )
}
