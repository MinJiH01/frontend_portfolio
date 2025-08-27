import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        id: "movie-search",
        title: "Movie Search App",
        description: "React + TMDB API를 활용한 영화 검색 사이트",
        thumbnail: "",
    },
    {
        id: "todo-app",
        title: "To-do App",
        description: "CURD 가능한 심플 투두 리스트 앱",
        thumbnail: "",
    },
    {
        id: "mini-shop",
        title: "Mini Shopping Mall",
        description: "작은 규모의 쇼핑몰 프론트엔드",
        thumbnail: "",
    },
];

function Projects() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1 className="projects-title">프론트엔드 프로젝트</h1>
            <div className="project-row">
                {projects.map(proj => (
                    <Link key={proj.id} to={`/projects/${proj.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <ProjectCard project={proj} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;