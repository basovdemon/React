import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        position: "relative",
        minHeight: "100vh",
        height: "100vh",
        margin: 0,
    },
    navigation: {
        color: theme.palette.common.white,
        fontSize: "24px",
    },
    title: {
        flexGrow: 1,
    },

    pageContainer: {
        position: "relative",
        minHeight: "85vh",
    },
    contentWrap: {
        paddingBottom: "3.5rem",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "3rem" /* Footer height */,
    },
}));

export { useStyles };
