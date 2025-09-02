import React from "react";

function Contact() {
  return (
    <div className="contact-container" style={{ padding: "2rem" }}>
      <h2 className="contact-title">연락처</h2>
      <div className="contact-cards">
        {/* 이메일 */}
        <div className="contact-card">
          <h3>Email</h3>
          <p><a href="mailto:hmj4196@naver.com">hmj4196@naver.com</a></p>
        </div>

        {/* 전화번호 */}
        <div className="contact-card">
            <h3>Phone</h3>
            <p><a href="tel:01026884196">010-2688-4196</a></p>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <h3>GitHub</h3>
          <p>
            <a 
              href="https://github.com/MinJiH01"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/MinJiH01
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;