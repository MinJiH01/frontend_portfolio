import React from "react";
import { useParams, Link } from "react-router-dom";

const projectDetails = {
    "movie-search": {
        title: "Movie Search App",
        description: "React + TMDB API를 활용한 영화 검색 사이트입니다.",
        techStack: ["React", "HTML", "CSS", "JS" ],
        features: [
            "영화 제목 검색",
            "영화 상세 페이지",
            "반응형 UI",
            "로딩 및 에러 처리",
        ],
        demoUrl: "#",
    },
    "todo-app": {
        title: "To-Do App",
        description: "간단한 CURD 투두 리스트 앱입니다.",
        techStack: ["React", "LocalStorage"],
        features: ["할 일 추가/삭제", "완료 체크", "데이터 로컬 저장"],
        demoUrl: "#"
    },
    "mini-shop": {
        title: "Mini Shopping Mall",
        description: "상품 리스트와 장바구니 기능을 구현한 쇼핑몰 UI입니다.",
        techStack: ["React", "Zustand", "React Router"],
        features: ["상품 목록", "장바구니", "상품 필터링"],
        demoUrl: "#",
    },
};

function projectDetail () {
    const { id } = useParams();
    const project = projectDetails[id];

    if (!project) {
        return <div style={{ padding: "2rem"}}>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ padding: "2rem" }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <h3>기술 스택</h3>
            <ul>
                {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            <h3>주요 기능</h3>
            <ul>
                {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>

            <a href={project.demoUrl} target="_blank" rel="noreferrer" style={{ color: "blue" }}>
                데모 사이트 보기
            </a>
            <br />
            <Link to="/" style={{ marginTop: 20, display: "inline-block" }}> ← 홈으로 돌아가기 </Link>
        </div>
    );
}

export default projectDetail;