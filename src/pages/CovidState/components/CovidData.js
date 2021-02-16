import { Container, Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./styles";

import { fetchCovid } from "../../../redux/actions";

export function CovidData() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const covidData = useSelector((state) => state.fetchedCovidData.covidData);

    if (!covidData || covidData.length === 0)
        return (
            <Button variant="outlined" onClick={() => dispatch(fetchCovid())}>
                Get Covid Data
            </Button>
        );

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

    return (
        <Container className={classes.covid}>
            <MUIDataTable
                title={"Covid State table"}
                data={dataGridData}
                columns={columns}
            />
        </Container>
    );
}
