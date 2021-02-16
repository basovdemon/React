import React from "react";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import { useStyles } from "./change_styles";
import { CovidData } from "./CovidData";

import { Loader } from "../../App/components/Loader";

function CovidState() {
    const classes = useStyles();
    const loading = useSelector((state) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    return (
        <Container className={classes.covid}>
            <CovidData />
        </Container>
    );
}

export default CovidState;
