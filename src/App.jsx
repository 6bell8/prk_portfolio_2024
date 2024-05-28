import React, { useEffect, useRef, useState } from 'react';

import MainContents from './components/MainContents';
import ReadMe from './components/ReadMe';
import Repositories from './components/Repositories';
import ContactMe from './components/ContactMe';
import pjs01 from './assets/images/pjs01.svg';
import pjs02 from './assets/images/pjs02.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnAllState, setBtnAllState] = useState(false);

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const logoRef2 = useRef(null);
  const gnbRef = useRef(null);
  const btnAllRef = useRef(null);
  const depth01Ref = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const btnAll = btnAllRef.current;
    const header = headerRef.current;
    const depth01 = depth01Ref.current;

    btnAll.addEventListener('click', () => {
      header.classList.toggle('open');
    });

    depth01.forEach((item, index) => {
      item.addEventListener('click', () => {
        header.classList.remove('open');
        return false;
      });
    });

    const handleResize = () => {
      const w = window.outerWidth;
      if (w <= 1200) {
        header.classList.add('mobile');
      } else {
        header.classList.remove('mobile', 'open');
      }
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = event => {
      event.preventDefault();
      const { deltaY } = event;
      const { scrollTop, clientHeight } = containerRef.current;

      if (deltaY > 0) {
        containerRef.current.scrollTo({
          top: scrollTop + clientHeight,
          behavior: 'smooth',
        });
      } else {
        containerRef.current.scrollTo({
          top: scrollTop - clientHeight,
          behavior: 'smooth',
        });
      }
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'contactMe') {
          setIsOpen(true);
          setBtnAllState(true);
        } else if (!entry.isIntersecting && entry.target.id === 'contactMe') {
          setIsOpen(false);
          setBtnAllState(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleItemClick = index => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    setIsOpen(!isOpen);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header id="header" ref={headerRef}>
        {isOpen ? (
          <h1 className="mainLogo" ref={logoRef2}>
            <a href="/">
              <img src={pjs02} alt="pjs2" />
            </a>
          </h1>
        ) : (
          <h1 className="mainLogo" ref={logoRef}>
            <a href="/">
              <img src={pjs01} alt="pjs1" />
            </a>
          </h1>
        )}
        <nav id="gnb" ref={gnbRef}>
          <ul className="mainList">
            {['about.js', 'readMe', 'repositories', 'contactMe'].map((item, index) => (
              <li key={index} ref={el => (depth01Ref.current[index] = el)} onClick={() => handleItemClick(index)}>
                <a href={`#${item.toLowerCase()}`} className="depth01">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className={`btnAll ${btnAllState ? 'invert' : ''}`} ref={btnAllRef} onClick={toggleOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main id="main" className="black">
        <div className="scroll-container" ref={containerRef}>
          <section className="section" id="mainTitle" ref={el => (sectionRefs.current[0] = el)}>
            <MainContents />
          </section>
          <section className="section" id="readMe" ref={el => (sectionRefs.current[1] = el)}>
            <ReadMe />
          </section>
          <section className="section" id="repositories" ref={el => (sectionRefs.current[2] = el)}>
            <Repositories />
          </section>
          <section className="section" id="contactMe" ref={el => (sectionRefs.current[3] = el)}>
            <ContactMe />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
