import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ListItem, Button, Typography, Checkbox } from "@material-ui/core";

import { useStyles } from "./styles";

import Context from "../context/context";

function ContactItem({ contact, index, onChange }) {
    const { deleteContact } = useContext(Context);
    const { editContact } = useContext(Context);

    const classes = useStyles();

    if (contact.selected) {
    }
    console.log("contact", contact);
    return (
        <div>
            <ListItem className={classes.li}>
                <Checkbox
                    type="checkbox"
                    checked={contact.selected}
                    onChange={() => onChange(contact.id)}
                />

                <Typography variant="h5">{++index}</Typography>
                <Typography variant="h6">{contact.name}</Typography>
                <Typography variant="h6">{contact.phone}</Typography>

                <Button
                    className={classes.orange}
                    onClick={editContact.bind(null, contact)}
                >
                    Edit
                </Button>
                <Button
                    className={classes.rm}
                    onClick={deleteContact.bind(null, contact.id)}
                >
                    Delete
                </Button>
            </ListItem>
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default ContactItem;
