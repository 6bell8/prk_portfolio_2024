import React, { useEffect, useRef, useState } from 'react';

import MainContents from './components/MainContents';
import ReadMe from './components/ReadMe';
import Repositories from './components/Repositories';
import emailjs from 'emailjs-com';
import pjs01 from './assets/images/pjs01.svg';
import pjs02 from './assets/images/pjs02.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const containerRef = useRef(null);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const logoRef2 = useRef(null);
  const gnbRef = useRef(null);
  const btnAllRef = useRef(null);
  const depth01Ref = useRef([]);

  useEffect(() => {
    // Button click event
    const btnAll = btnAllRef.current;
    const header = headerRef.current;
    const depth01 = depth01Ref.current;

    btnAll.addEventListener('click', () => {
      header.classList.toggle('open');
      depth01.forEach(item => item.classList.remove('on'));
      const gnbTL = gsap.timeline();
      gnbTL.to('#gnb .mainList li', {
        opacity: 1,
        duration: 3,
        ease: 'bounce',
        stagger: {
          opacity: 1,
          amount: 0.5,
        },
      });
    });

    depth01.forEach((item, index) => {
      item.addEventListener('click', () => {
        header.classList.remove('open');
        setTimeout(() => {
          swiperInstance.slideTo(index);
        }, 800);
        return false;
      });
    });

    // Window resize event
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
    emailjs.init('SdR5qXey80PN1lUbS');

    return () => {
      container.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };

    // ParticlesJS and EmailJS initialization
    // particlesJS.load('bgParticle', '../js/particlesjs-config.json', () => {});
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const templateParams = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs.send('service_0w601hh', 'template_emi30to', templateParams).then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('메일을 보내셨습니다.');
      },
      error => {
        console.log('FAILED...', error);
        alert('메일 전송에 실패하였습니다.');
      },
    );
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
            {['about.js', 'ReadMe', 'Repositories', 'ContactMe'].map((item, index) => (
              <li
                key={index}
                ref={el => (depth01Ref.current[index] = el)}
                onClick={() => {
                  toggleOpen();
                }}
              >
                <a href={`#${item.toLowerCase()}`} className="depth01">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="btnAll" ref={btnAllRef} onClick={toggleOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main id="main" className="black">
        <div className="scroll-container" ref={containerRef}>
          <section className="section" id="mainTitle">
            <div className="inner" data-swiper-parallax-scale="0.75" number={0}>
              <MainContents />
            </div>
          </section>
          <section className="section" id="readMe">
            <ReadMe />
          </section>
          <section className="section" id="repositories">
            <Repositories />
          </section>
          <section className="section">{/* <Particle /> */}</section>
        </div>
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="submit" name="submit" value="Send" />
      </form>
      <div id="bgParticle"></div>
    </div>
  );
};

export default App;
