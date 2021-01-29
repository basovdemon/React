import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
    Container,
    Button,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    Dialog,
    DialogActions,
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";

import { useStyles } from "./Styles";

import Context from "../context/context";

function ContactItem({ contact, index, onChange }) {
    const { deleteContact } = useContext(Context);
    const classes = useStyles();
    let selectedClass;

    if (contact.selected) {
        selectedClass = classes.selected;
    }
    console.log("contact", contact);
    return (
        <div>
            <li className={classes.li}>
                <span className={selectedClass}>
                    <input
                        type="checkbox"
                        checked={contact.selected}
                        onChange={() => onChange(contact.id)}
                    />

                    <strong>{index++}</strong>
                    <h6>{contact.name}</h6>
                    <h6>{contact.phone}</h6>
                </span>

                <button
                    className={classes.rm}
                    onClick={deleteContact.bind(null, contact.id)}
                >
                    &types;
                </button>
            </li>
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default ContactItem;

{
    /* <Typography>Your Contacts:</Typography>
                <Container className={classes.contacts} maxWidth="md">
                    <Grid container spacing={2}>
                        {contacts.map((contact) => (
                            <Grid item key={contact.id}>
                                <Card className={classes.contact}>
                                    <CardMedia
                                        image="https://source.unsplash.com/random"
                                        title={contact}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Name: {contact.name}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom>
                                            Phone: {contact.phone}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container> */
}
