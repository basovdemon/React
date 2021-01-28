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
    navigation: {
        color: theme.palette.common.white,
        fontSize: "24px",
    },
    title: {
        flexGrow: 1,
    },
    homePost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(255,255,255,.531)",
    },
    homePostContent: {
        position: "relative",
        padding: theme.spacing(7),
        marginTop: theme.spacing(7),
    },
    cardMedia: {
        paddingTop: "54%",
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
    footer: {
        marginTop: theme.spacing(4),
    },

    phonebook: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(4),
    },
    contacts: {
        marginBottom: theme.spacing(4),
    },
    contact: {
        marginTop: theme.spacing(2),
    },

    covid: {
        marginTop: theme.spacing(12),
    },
    covidGrid: {
        position: "relative",
        minHeight: "400px",
    },
}));

export { useStyles };
