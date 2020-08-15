import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    projectsContainer: {
        margin: theme.spacing(3),
    }
}))


const projectList = ['project 1', 'project 2', 'project 3', 'project 4',]

const Projects = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState();

    useEffect(() => {
        console.log('test')
    axios.get("http://localhost:4000/api/projects")
    .then(res => {
        console.log(res)
        setProjects(res.data)
    })
}, [])

    return (
        <Grid container direction={"column"} className={classes.projectsContainer}>
            {projects && projects.map(p => <Grid item component={Link} to={`/project-details/${p.id}`}><p>{p.name}</p></Grid>)}
        </Grid>
    );
}

export default Projects;
