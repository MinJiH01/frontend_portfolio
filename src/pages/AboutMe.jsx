import React, { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

function AboutMe() {
  const [animated, setAnimated] = useState(false);
  const skillRef = useRef(null);

  const education = [
    {
      year: "2023–2025",
      title: "경남정보대학교 컴퓨터학과",
      details: [
        "학점 [4.2 / 4.5]",
        "전공 관련 프로젝트 수행",
        "2학년 학과 학생회 총대",
        "최종 학력",
      ],
      icon: <FaGraduationCap color="#4CAF50" />,
    },
    {
      year: "2017–2020",
      title: "성지여자고등학교",
      details: ["졸업"],
      icon: <FaGraduationCap color="#4CAF50" />,
    },
  ];

  const experience = [
    {
      year: "2021–04 ~ 2023-02",
      title: "디에이디오",
      details: ["AUTOMOTIVE PCB 전자회로 및 기능검사"],
      icon: <FaBriefcase color="#FF9800" />,
    },
    {
      year: "2024–11 ~ 2025–08",
      title: "앰코테크놀로지코리아 K5",
      details: ["반도체 패키징 완제품 최종검사"],
      icon: <FaBriefcase color="#FF9800" />,
    },
  ];

  const certifications = [
    {title: "정보처리기능사",
      year: "2019",
      
      details: ["한국산업인력공단"],
      icon: <FaCertificate color="#646cff" />,
    },
    {
      year: "2019",
      title: "컴퓨터 활용능력 2급",
      details: ["대한상공회의소 자격평가사업단"],
      icon: <FaCertificate color="#646cff" />,
    },
  ];

  const skills = [
    { name: "HTML", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "CSS", level: 80 },
    { name: "React", level: 70 },
    { name: "Node.Js", level: 65 },
  ];

  // Intersection Observer 적용해서 스킬바가 보일 때 애니메이션 시작
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  const renderSection = (title, items) => (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <ul className="section-list">
        {items.map((item, index) => (
          <li key={index} className="section-item">
            <span className="section-icon">{item.icon}</span>
            <div className="section-content">
              <p className="section-header">
                {item.year} | <strong>{item.title}</strong>
              </p>
              {item.details.map((line, i) => (
                <p key={i} className="section-detail">
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="about-container">
        {/* Hero */}
        <div className="hero">
          <img src="/profile.jpg" alt="Profile" className="profile-img" />
          <div className="hero-text">
            <h1>한민지</h1>
            <p className="role">Frontend Developer</p>
            <p className="intro">
              사용자 친화적인 UI와 직관적인 웹 서비스를 만드는 것이 목표입니다.
              꾸준한 학습과 성장으로 더 나은 개발자가 되고자 합니다.
            </p>
          </div>
        </div>

        {/* 학력, 경력, 자격증 */}
        {renderSection("🎓 학력", education)}
        {renderSection("💼 경력", experience)}
        {renderSection("📜 자격증", certifications)}

        {/* Skills */}
        <div className="skills" ref={skillRef}>
          <h2>My Skills</h2>
          {skills.map((skill) => (
            <div key={skill.name} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar">
                <div
                  className="progress"
                  style={{ width: animated ? `${skill.level}%` : "0%" }}
                >
                  <span className="percent">{animated ? skill.level : 0}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 다운로드 */}
        <div className="download-links">
          <a href="/resume.pdf" download>
            <button>이력서 다운로드</button>
          </a>
          <a href="/CoverLetter.pdf" download>
            <button>자소서 다운로드</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;