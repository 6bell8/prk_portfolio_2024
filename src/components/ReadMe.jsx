import React, { useState, useEffect } from 'react';

const ReadMe = () => {
  const grassColors = [
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04', 'grassColor05'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03', 'grassColor04'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02', 'grassColor03'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor02'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
    ['grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01', 'grassColor01'],
  ];

  return (
    <>
      <div className="inner">
        <div className="contents">
          <div className="flowBox">
            <div className="colGrassBox">
              {grassColors.map((col, colIndex) => (
                <ul className="grassRow" key={`row${colIndex + 1}`}>
                  {col.map((color, liIndex) => (
                    <li className="grass02" id={color} key={`row${colIndex + 1}-col${liIndex + 1}`}></li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="profile">
            <div className="name">
              박진성
              <span>Park Jin Sung </span>
            </div>
            <div className="readMeList">
              <div className="nameTitleBox">
                <h3 className="title">ReadMe</h3>
                <h3 className="title02">박진성</h3>
              </div>
              <ul className="desc">
                <li>반갑습니다. 주니어 프론트 개발자 박진성입니다.</li>
                <li>경험을 소중하게 여기는 개발자가 되려고 노력합니다.</li>
                <li>문제에 대해 간단하면서도 합리적인 해결책을 찾기 위해 항상 생각합니다.</li>
                <li>UI/UX 인터랙션 구현에 관심이 많습니다.</li>
                <li>가독성이 좋은코드가 좋은코드라는 생각을 일념하고 있습니다.</li>
              </ul>
              <div className="exp">
                <h3 className="subtitle01">Experience</h3>
                <li>더블유로또 코리아</li>
                <p>Frontend Engineer</p>
                <p className="date">2023.07 ~ </p>
                <a href="https://www.notion.so/WLOTTO-84a52d287d5542f891f561fb51b7df55" className="detail" target="blank">
                  자세히 보기
                </a>
              </div>
              <div className="edu">
                <h3 className="subtitle02">Education</h3>
                <p className="desc">
                  방송통신대학교 컴퓨터과학과
                  <br />
                  <span>3학년, &nbsp;&nbsp; 2023년 9월 편입, 재학 중</span>
                </p>
                <p className="desc">
                  TIS 정보기술 교육원
                  <br /> <span> (2022.04 ~ 2022.09) 프론트엔드 & 웹퍼블리싱 과정 수료 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMe;
