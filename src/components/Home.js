import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Projects from "./Projects";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    appContainer: {
        margin: theme.spacing(3),
    }
}))
const Home = props => {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems={'center'} className={classes.appContainer}>
            <Grid item>
                <Typography variant='h3'>View Projects</Typography>
            </Grid>
            <Grid item className={classes.projects}>
                <Projects/>
            </Grid>
        </Grid>

    );
};


export default Home;
