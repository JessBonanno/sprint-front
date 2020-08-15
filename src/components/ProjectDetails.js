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
                setProject(res.data.name)
            }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Grid container direction={"row"} className={classes.projectDetailsContainer}>
            <Grid item className={classes.heading}> <Typography variant={"h4"}>{project} Project Details</Typography>
            </Grid>
            <Grid item className={classes.projectDetailsItem}>
                {actions && actions.map(a => {
                    return (<>
                        <Grid container direction={'column'} className={classes.actionsContainer}>
                            <Grid item className={classes.actionsTitle}><Typography
                                variant={'h5'}>{a.description}</Typography></Grid>
                            <Grid item><Typography variant={'h6'}> * {a.notes}</Typography></Grid>
                            <Grid item><Typography
                                variant={'p'}> * {a.completed ? "Completed" : "Incomplete"}</Typography></Grid>
                        </Grid> </>)
                })}
            </Grid>
        </Grid>
    );
}

export default ProjectDetails;
