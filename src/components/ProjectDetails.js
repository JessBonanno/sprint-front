import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    projectDetailsContainer: {
        margin: theme.spacing(3),
    }
}))


const ProjectDetails = ({projectId}) => {
    const param = useParams();
    const classes = useStyles();
    const [actions, setActions] = useState([]);

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
    }, [])

    return (
        <Grid container direction={"row"} className={classes.projectDetailsContainer}>
            <Grid item></Grid>
            <Typography variant={"h3"}>Project Details</Typography>
            <Grid item className={classes.projectDetailsItem}>
                {actions && actions.map(a => {
                    return (<>
                        <Grid container direction={'column'} className={classes.actionsContainer}>
                            <Grid item className={classes.actionsItem}><Typography variant={'h4'}>{a.description}</Typography></Grid>
                            <Grid item><Typography variant={'h5'}>{a.notes}</Typography></Grid>
                            <Grid item><Typography variant={'h5'}>{a.completed ? "Completed" : "incomplete"}</Typography></Grid>
                        </Grid> </>)
                })}
            </Grid>
        </Grid>
    );
}

export default ProjectDetails;
