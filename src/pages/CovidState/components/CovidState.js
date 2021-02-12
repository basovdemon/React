import React, { useEffect, useState } from "react";
import { Typography, Container, CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import { CovidData } from "./CovidData";

import { Loader } from "../../App/components/Loader";

function CovidState() {
    const classes = useStyles();
    const loading = useSelector((state) => state.app.loading);
    if (loading) return Loader;

    debugger;
    const DataLoading = loading ? Loader : CovidData;

    return (
        <Container className={classes.covid}>
            <DataLoading />
        </Container>
    );
}

export default CovidState;
