import React from "react";
import PropTypes from "prop-types";
import { ListItem, Button, Typography, Checkbox } from "@material-ui/core";
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

    function editContactHandler(newContact) {
        debugger;
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

                <AddContact
                    onCreate={editContactHandler}
                    isEdit={true}
                    currentContact={contact}
                />
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
