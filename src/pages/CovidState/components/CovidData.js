import { Typography, Container } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

import { useStyles } from "./styles";

export function CovidData(props) {
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

    if (!covidData) return <Typography> Has no any data</Typography>;

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
            <MUIDataTable
                title={"Covid State table"}
                data={dataGridData}
                columns={columns}
            />
        </Container>
    );
}
