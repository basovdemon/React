import React, { useEffect, useState } from "react";
import { Typography, Container, CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from "axios";

import { useStyles } from "./styles";
import { OnLoadingCovidData } from "./OnLoadingCovidData";
import { CovidData } from "./CovidData";

function CovidState() {
    const classes = useStyles();
    const DataLoading = OnLoadingCovidData(CovidData);
    const [covidState, setCovidState] = useState({
        loading: true,
        covidData: null,
    });

    useEffect(() => {
        const apiUrl = "https://api.covid19api.com/summary";
        axios.get(apiUrl).then((resp) => {
            const allCovidData = resp.data;
            setCovidState({ loading: false, covidData: allCovidData });
        });
    }, [setCovidState]);

    return (
        <Container className={classes.covid}>
            <DataLoading
                isLoading={covidState.loading}
                covidData={covidState.covidData}
            />
        </Container>
    );
}

export default CovidState;
