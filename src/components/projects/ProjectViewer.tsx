import React, {CSSProperties, useState} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

import {Project} from "./projectTypes";
import ProjectOverview from "./ProjectOverview";


const projectsJson: Project[] = require("./projects.json");

const projectViewerStyle: CSSProperties = {
    width: "80%",
    textAlign: "center",
    padding: 5,
    margin: "auto",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "dotted"
};

const ProjectViewer = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [nextProjectIndex, setNextProjectIndex] = useState(-1);
    const [showProject, setShowProject] = useState(true);
    const [slideDirection, setSlideDirection] = useState<"left" | "right" | "up" | "down">("right");

    const goBackOneProject = () => {
        if (currentProjectIndex === 0) {
            setNextProjectIndex(projectsJson.length - 1);
        } else {
            setNextProjectIndex(currentProjectIndex - 1);
        }
        setShowProject(false);
        setSlideDirection("left");
    };

    const goForwardOneProject = () => {
        if (currentProjectIndex === (projectsJson.length - 1)) {
            setNextProjectIndex((0));
        } else {
            setNextProjectIndex(currentProjectIndex + 1);
        }
        setShowProject(false);
        setSlideDirection("right");
    };

    return (
        <Card style={projectViewerStyle}>
            <Typography variant={"h3"} style={{margin: 20}}>Project Scroller</Typography>
            <Slide direction={slideDirection} in={showProject} mountOnEnter unmountOnExit onExited={() => {
                const highestProjectIndex = projectsJson.length - 1;
                if((currentProjectIndex > nextProjectIndex && (currentProjectIndex - nextProjectIndex) !== highestProjectIndex) ||
                    (nextProjectIndex === highestProjectIndex && currentProjectIndex === 0)){
                    setSlideDirection("right");
                }else{
                    setSlideDirection("left");
                }
                setCurrentProjectIndex(nextProjectIndex);
                setNextProjectIndex(-1);
                setShowProject(true);
            }}>
                <ProjectOverview currentProject={projectsJson[currentProjectIndex]}/>
            </Slide>
            <div>
                <IconButton aria-label="back" onClick={() => goBackOneProject()}><ArrowBackIcon/></IconButton>
                <IconButton aria-label="forward" onClick={() => goForwardOneProject()}><ArrowForwardIcon/></IconButton>
            </div>
        </Card>
    );
};

export default ProjectViewer;