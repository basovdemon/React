import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Container,
} from "@material-ui/core";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";
import axios from "axios";

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
        <Box className={classes.covid}>
            <DataLoading
                isLoading={covidState.loading}
                covidData={covidState.covidData}
            />
        </Box>
    );
}

function CovidData(props) {
    const classes = useStyles();
    const { covidData } = props;
    const columns = [
        "id",
        "Country",
        "CountryCode",
        "Slug",
        "NewConfirmed",
        "TotalConfirmed",
        "NewDeaths",
        "TotalDeaths",
        "NewRecovered",
        "TotalRecovered",
        "Date",
    ];

    if (!covidData) return <Typography>Has no any data</Typography>;

    let dataGridData = covidData.Countries.map((obj) => ({
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
        // <Container className={classes.covid}>
        //     <Table>
        //         <TableHead>
        //             <TableRow>
        //                 <TableHead>Country</TableHead>
        //                 <TableHead>NewConfirmed</TableHead>
        //                 <TableHead>TotalConfirmed</TableHead>
        //                 <TableHead>NewDeaths</TableHead>
        //                 <TableHead>TotalDeaths</TableHead>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {covidData.Countries.map((item) => (
        //                 <TableRow key={item.CountryCode}>
        //                     <TableCell>{item.Country}</TableCell>
        //                     <TableCell>{item.NewConfirmed}</TableCell>
        //                     <TableCell>{item.TotalConfirmed}</TableCell>
        //                     <TableCell>{item.NewDeaths}</TableCell>
        //                     <TableCell>{item.TotalDeaths}</TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </Container>
        <Container className={classes.covidGrid}>
            <DataGrid rows={dataGridData} columns={columns} />
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
