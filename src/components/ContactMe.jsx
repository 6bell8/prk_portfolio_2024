import React, { useRef } from 'react';
import pjs from '../assets/images/pjs02.svg';
import gitLogo from '../assets/images/gitLogo.svg';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const form = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const templateParams = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs.send('service_95z3nbb', 'template_emi30to', templateParams, 'SdR5qXey80PN1lUbS').then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('메일 전송에 성공하였습니다.');
      },
      error => {
        console.log('FAILED...', error);
        alert('메일 전송에 실패하였습니다.');
      },
    );
  };

  return (
    <div className="footer">
      <img src={pjs} alt="pjs" />
      <form className="email" ref={form} onSubmit={handleSubmit}>
        <input className="emailText" type="text" name="name" required placeholder="성함을 입력해주세요" />
        <input className="emailAddress" type="text" name="email" required placeholder="메일 주소를 입력해주세요" />
        <input className="emailPhone" type="text" name="phone" placeholder="연락처를 입력해주세요 (생략 가능)" />
        <textarea className="emailTextarea" name="message" rows="5" required placeholder="내용을 입력해주세요 "></textarea>
        <button className="emailSend" type="submit">
          Send
        </button>
      </form>
      <p className="phone">phone.&nbsp; 010 5198 6269</p>
      <span className="gitLogo">
        <a href="https://github.com/6bell8" target="_blank">
          <img src={gitLogo} alt="gitLogo" />
        </a>
      </span>
      <p className="copyright">Copyright © parkjinsung. All Rights Reserved.</p>
    </div>
  );
};

export default ContactMe;
