import React from "react";

function ProjectCard({ project }) {
    return (
        <div className="card">
            {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.title} />
            ) : (
                <div style={{
                    width: "100%",
                    height: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f0f0f0",
                    color: "#888"
                }}>이미지 없음</div>
            )}
            <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;