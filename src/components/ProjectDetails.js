import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    projectDetailsContainer: {
        margin: theme.spacing(3),
    },
    heading: {
        margin: theme.spacing(3),
    },
    actionsHeader: {
        margin: theme.spacing(6, 2, 2)
    },

    actionsTitle: {
        margin: theme.spacing(1),
    }
}))


const ProjectDetails = () => {
    const param = useParams();
    const classes = useStyles();
    const [actions, setActions] = useState([]);
    const [project, setProject] = useState('')

    useEffect(() => {
        if (param) {
            axios.get(`http://localhost:4000/api/projects/${param.id}/actions`)
                .then(res => {
                    console.log(res)
                    setActions(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }

        axios.get(`http://localhost:4000/api/projects/${param.id}`)
            .then(res => {
                console.log(res.data)
                setProject(res.data)
            }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Grid container direction={"column"} className={classes.projectDetailsContainer}>
            <Grid item className={classes.heading}> <Typography variant={"h4"}>{project.name} Project
                Details</Typography>
            </Grid>
            <Grid item><Typography variant={"h6"}>{project.description}</Typography><Typography
                variant={'p'}> * {project.completed ? "Completed" : "Incomplete"}</Typography></Grid>
            <Grid item className={classes.projectDetailsItem}>
                <Typography variant={'h5'} className={classes.actionsHeader}>Actions for project</Typography>
                {actions && actions.map(a => {
                    return (<>
                        <Grid container direction={'column'} className={classes.actionsContainer}>
                            <Grid item className={classes.actionsTitle}><Typography
                                variant={'h6'}>{a.description}</Typography></Grid>
                            <Grid item><Typography variant={'p'}> * {a.notes}</Typography></Grid>
                            <Grid item><Typography
                                variant={'p'}> * {a.completed ? "Completed" : "Incomplete"}</Typography></Grid>
                        </Grid> </>)
                })}
            </Grid>
        </Grid>
    );
}

export default ProjectDetails;
