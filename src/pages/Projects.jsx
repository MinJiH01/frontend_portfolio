import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        id: "Shopping Mall",
        title: "Shopping Mall",
        description: "HTML을 활용한 쇼핑몰 사이트",
        thumbnail: "./Ms_Farm.png",
    },
    {
        id: "Blog",
        title: "Blog",
        description: "React + Markdown을 사용한 블로그 사이트",
        thumbnail: "./My_Blog.png",
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