import React, { useEffect, useState } from "react";
import { Typography, Container } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from "axios";

import { useStyles } from "./Styles";

function CovidState() {
    const classes = useStyles();
    const DataLoading = OnLoadingCovidData(CovidData);
    const [covidState, setCovidState] = useState({
        loading: false,
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

function CovidData(props) {
    const classes = useStyles();
    const { covidData } = props;
    const columns = [
        "Country",
        "CountryCode",
        "Slug",
        "NewConfirmed",
        "TotalConfirmed",
        "NewDeaths",
        "TotalDeaths",
        "NewRecovered",
        "TotalRecovered",
    ];

    if (!covidData) return <Typography>Has no any data</Typography>;

    const dataGridData = covidData.Countries.map((obj) => ({
        id: obj.ID,
        Country: obj.Country,
        CountryCode: obj.CountryCode,
        Slug: obj.Slug,
        NewConfirmed: obj.NewConfirmed,
        TotalConfirmed: obj.TotalConfirmed,
        NewDeaths: obj.NewDeaths,
        TotalDeaths: obj.TotalDeaths,
        NewRecovered: obj.NewRecovered,
        TotalRecovered: obj.TotalRecovered,
    }));

    console.log(dataGridData);

    return (
        <Container className={classes.covid}>
            <div>
                <MUIDataTable
                    title={"Covid State table"}
                    data={dataGridData}
                    columns={columns}
                />
            </div>
        </Container>
    );
}

function OnLoadingCovidData(Component) {
    return function LoadingCovidData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        else
            return (
                <Container>
                    <Typography>Wait plz...</Typography>
                </Container>
            );
    };
}

export default CovidState;
