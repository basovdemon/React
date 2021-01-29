import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
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
        backgroundColor: "rgba(0,0,0,.4321)",
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
}));

export { useStyles };
