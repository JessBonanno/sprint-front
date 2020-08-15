import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
//local imports
import Projects from "./components/Projects"
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";

const useStyles = makeStyles(theme => ({
    appContainer: {
        margin: theme.spacing(3),
    }
}))

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
                <Route exact path={'/project-details/:id'}>
                    <ProjectDetails/>
                </Route>

            </Switch>

        </div>
    );
}

export default App;
