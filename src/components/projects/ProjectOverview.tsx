import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

import getScreenshot from "./screenshots/screenshotProvider";
import getLogo from "./logos/logoProvider";
import {Project} from "./projectTypes";


interface ProjectOverviewProps {
    currentProject: Project;
}

const ProjectOverview = React.forwardRef((props: ProjectOverviewProps, ref) => {
    const {currentProject} = props;
    const projectScreenshot = getScreenshot(currentProject.name);
    const screenshotPresent = projectScreenshot !== undefined;

    function showNameOrLogo(toolName: string) {
        const toolLogo = getLogo(toolName);
        const langaugeStyle = {width: 50, height: 50};
        if (toolLogo !== undefined) {
            return (
                <div style={langaugeStyle}>
                    <Tooltip title={toolName}>
                        <img style={langaugeStyle} src={toolLogo} alt={toolName}/>
                    </Tooltip>
                </div>);
        } else {
            return (
                <div style={langaugeStyle}>
                    <p>{toolName}</p>
                </div>
            )
        }
    }

    const languages = currentProject.languages.map(showNameOrLogo);

    return (
        <Paper ref={ref}>
            <Grid container>
                <Grid item xs={12}>
                    <h1>{currentProject.name}</h1>
                </Grid>
                <Grid item xs={screenshotPresent ? 6 : 12}>
                    <p><b>Role:</b> {currentProject.role}</p>
                    <p>{currentProject.description}</p>
                    <div style={{display: "inline-flex"}}>
                        <Typography style={{margin: "auto", fontWeight: "bold"}}>{currentProject.languages.length > 1 ? "Programming Languages:": "Programming Language:"}</Typography>
                        {languages}
                    </div>

                </Grid>
                {screenshotPresent && <Grid item xs={6}>
                    <img alt="Project Screenshot"
                         src={projectScreenshot}
                         style={{width: "80%", padding: 20, margin: 50}}
                    />
                </Grid>}
            </Grid>
        </Paper>
    );
});

export default ProjectOverview;