import React from "react";
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
import ContactItem from "./ContactItem";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

import Context from "../context/context";

function PhoneBook() {
    const classes = useStyles();

    let [contacts, setContacts] = React.useState([
        { id: 0, selected: false, name: "Nick", phone: "13698642" },
        { id: 1, selected: false, name: "Mike", phone: "24689753" },
    ]);

    function selectContact(id) {
        setContacts(
            (contacts = contacts.map((contact) => {
                if (contact.id === id) {
                    contact.selected = !contact.selected;
                }
                return contact;
            }))
        );
    }

    function editContact(editedContact) {
        debugger;
        setContacts(
            (contacts = contacts.map((contact) => {
                if (contact.id === editedContact.id) {
                    contact.name = editedContact.name;
                    contact.phone = editedContact.phone;
                }
                return contact;
            }))
        );
    }

    function deleteContact(id) {
        setContacts(contacts.filter((cont) => cont.id !== id));
    }

    function addContact(contact) {
        setContacts(
            contacts.concat([
                {
                    id: Math.random(),
                    selected: false,
                    name: contact.name,
                    phone: contact.phone,
                },
            ])
        );
    }

    return (
        <>
            <Context.Provider value={{ deleteContact, editContact }}>
                <Container className={classes.phonebook} maxWidth="md">
                    <AddContact onCreate={addContact} />
                    <EditContact onEdit={editContact} />
                    {contacts.length ? (
                        <ContactList
                            contacts={contacts}
                            onSelect={selectContact}
                        />
                    ) : (
                        <Typography> No any contacts yet =( </Typography>
                    )}
                </Container>
            </Context.Provider>
        </>
    );
}

export default PhoneBook;
