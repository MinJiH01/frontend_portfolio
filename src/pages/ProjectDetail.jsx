import React from "react";
import { useParams, Link } from "react-router-dom";

const projectDetails = {
    "Shopping Mall": {
        title: "Shopping Mall",
        description: "React + TMDB API를 활용한 영화 검색 사이트입니다.",
        techStack: ["React", "HTML", "CSS", "JS" ],
        features: [
            "반응형 UI",
            "",
            "",
            "",
        ],
        demoUrl: "Shopping Mall",
    },
    "Blog": {
        title: "Blog",
        description: "React + Markdown을 사용한 블로그 사이트입니다.",
        techStack: ["React", "Markdown", "Vite"],
        features: ["반응형 UI", "글쓰기/수정/삭제", "즐겨찾기", "라이트/다크 모드"],
        demoUrl: "Blog"
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