import React from "react";
import PropTypes from "prop-types";
import { ListItem, Button, Typography, Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";

import {
    deleteContact,
    editContact,
    selectContact,
} from "../../../redux/actions";

function ContactItem({ contact, index }) {
    const classes = useStyles();

    const dispatch = useDispatch();

    function selectContactHandler(id) {
        return () => dispatch(selectContact(id));
    }

    return (
        <div>
            <ListItem className={classes.li}>
                <Checkbox
                    type="checkbox"
                    checked={contact.selected}
                    onChange={selectContactHandler(contact.id)}
                />

                <Typography variant="h5">{index + 1}</Typography>
                <Typography variant="h6">{contact.name}</Typography>
                <Typography variant="h6">{contact.phone}</Typography>

                <Button
                    className={classes.orange}
                    onClick={() => dispatch(editContact(contact))}
                >
                    Edit
                </Button>
                <Button
                    className={classes.rm}
                    onClick={() => dispatch(deleteContact(contact.id))}
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
};

export default ContactItem;
