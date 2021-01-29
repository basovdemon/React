import { makeStyles } from "@material-ui/core/styles";

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
    footer: {
        marginTop: theme.spacing(4),
    },
}));

export { useStyles };
