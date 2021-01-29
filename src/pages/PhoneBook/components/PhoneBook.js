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

import Context from "../context/context";

function PhoneBook() {
    const classes = useStyles();

    let [contacts, setContacts] = React.useState([
        { id: 0, selected: false, name: "Nick", phone: "321654" },
        { id: 1, selected: false, name: "Nick", phone: "321654" },
        { id: 2, selected: false, name: "Nick", phone: "321654" },
        { id: 3, selected: false, name: "Nick", phone: "321654" },
    ]);

    function editContact(id) {
        setContacts(
            (contacts = contacts.map((contact) => {
                if (contact.id === id) {
                    contact.selected = !contact.selected;
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
            <Context.Provider value={{ deleteContact }}>
                <Container className={classes.phonebook} maxWidth="md">
                    <AddContact onCreate={addContact} />
                    {contacts.length ? (
                        <ContactList contacts={contacts} onEdit={editContact} />
                    ) : (
                        <Typography>No any contacts yet =( </Typography>
                    )}
                </Container>
            </Context.Provider>
        </>
    );
}

export default PhoneBook;
