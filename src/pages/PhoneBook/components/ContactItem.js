import React from "react";
import PropTypes from "prop-types";
import { ListItem, Button, Typography, Checkbox, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";
import AddContact from "./AddContact";

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

    function deleteContactHandler(id) {
        return () => dispatch(deleteContact(id));
    }

    function editContactHandler(newContact) {
        dispatch(
            editContact({
                id: contact.id,
                selected: contact.selected,
                name: newContact.name,
                phone: newContact.phone,
            })
        );
    }

    return (
        <ListItem className={classes.li}>
            <Box className={classes.contactBox}>
                <Checkbox
                    type="checkbox"
                    checked={contact.selected}
                    onChange={selectContactHandler(contact.id)}
                />

                <Typography>{index + 1}</Typography>
            </Box>
            <Typography variant="h6">{contact.name}</Typography>
            <Typography variant="h6">{contact.phone}</Typography>
            <Box className={classes.contactBox}>
                <AddContact
                    onCreate={editContactHandler}
                    isEdit={true}
                    currentContact={contact}
                />
                <Button
                    className={classes.rm}
                    onClick={deleteContactHandler(contact.id)}
                >
                    Delete
                </Button>
            </Box>
        </ListItem>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default ContactItem;
