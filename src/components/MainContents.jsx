import React, { useState, useEffect } from 'react';
import aboutJs from '../assets/images/aboutJS.svg';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec'];
const grassColors = [
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor05', 'grassColor02', 'grassColor01'],
  ['grassColor01', 'grassColor05', 'grassColor01', 'grassColor03', 'grassColor01', 'grassColor02', 'grassColor01'],
  ['grassColor01', 'grassColor02', 'grassColor01', 'grassColor03', 'grassColor01', 'grassColor03', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor05', 'grassColor04', 'grassColor04', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor02', 'grassColor05', 'grassColor04', 'grassColor02', 'grassColor05', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor04', 'grassColor01', 'grassColor05', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor05', 'grassColor04', 'grassColor03', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor04', 'grassColor05', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor05', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor01', 'grassColor01', 'grassColor03', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor05', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor05', 'grassColor04', 'grassColor02', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor05', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor04', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor05', 'grassColor05', 'grassColor04', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor05', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor05', 'grassColor04', 'grassColor02', 'grassColor05', 'grassColor04', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor03', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor03', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor05', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor03', 'grassColor04', 'grassColor01'],
  ['grassColor01', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor03', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor03', 'grassColor01', 'grassColor04', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor02', 'grassColor01', 'grassColor03', 'grassColor01', 'grassColor04', 'grassColor01'],
  ['grassColor01', 'grassColor05', 'grassColor01', 'grassColor02', 'grassColor01', 'grassColor02', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor03', 'grassColor01', 'grassColor04', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
];

const Contents = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [isVisiblePlants, setisVisiblePlants] = useState(new Set());

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAboutVisible(true);
    }, 1500);
    const timer2 = setTimeout(() => {
      setIsScrollVisible(true);
    }, 3000);

    const timer3 = [];

    grassColors.forEach((col, colIndex) => {
      col.forEach((color, liIndex) => {
        const globalIndex = colIndex * grassColors[0].length + liIndex;
        const randomDelay = Math.random() * 2000 + 1000;
        const timer = setTimeout(() => {
          setisVisiblePlants(prev => new Set(prev).add(globalIndex));
        }, randomDelay);
        timer3.push(timer);
      });
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      timer3.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      <div className="inner">
        <div className="contentsBox">
          <div className="contents" data-swiper-parallax-scale="1.25">
            <div className="titleBox">
              <div className="gitBox">
                <ul className="calendar">
                  {months.map(month => (
                    <li key={month}>{month}</li>
                  ))}
                </ul>
                <div className="grassBox">
                  {grassColors?.map((col, colIndex) => (
                    <ul className={`grassCol col${colIndex + 1}`} key={`col${colIndex + 1}`}>
                      {col.map((color, liIndex) => {
                        const globalIndex = colIndex * grassColors[0].length + liIndex;
                        const isPlantVisible = isVisiblePlants.has(globalIndex);
                        return <li className={`grass ${isPlantVisible ? 'plants' : ''}`} id={color} key={`col${colIndex + 1}-li${liIndex + 1}`}></li>;
                      })}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <img src={aboutJs} alt="aboutJs" className="aboutJS" style={{ opacity: isAboutVisible ? 0 : 1, transition: 'opacity 1s' }} />
          </div>
          <div className="aboutdesc">
            <span className="txt">about.js는 Jin Sung의 이니셜인 JS를 차용해서 구상한 포트폴리오입니다. </span>
          </div>
          <div className="iconScroll" style={{ opacity: isScrollVisible ? 1 : 0, transition: 'opacity 2s' }}>
            <span className="icon"></span>
            <span className="txt">SCROLL</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
