import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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

    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        marginBottom: ".5rem",
    },

    rm: {
        background: "red",
    },

    orange: {
        backgroundColor: "orange",
    },

    selected: {
        backgroundColor: "blue",
    },
}));

export { useStyles };
