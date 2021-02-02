import { makeStyles } from "@material-ui/core/styles";
import {
    CenterFocusWeakRounded,
    FormatAlignCenter,
    LabelImportantRounded,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    covid: {
        marginTop: theme.spacing(12),
        minHeight: "400px",
    },
    covidGrid: {
        display: "flex",
        height: "100%",
        flexGrow: 1,
    },
    loading: {
        display: "flex",
        justifyContent: "center",
    },
}));

export { useStyles };
