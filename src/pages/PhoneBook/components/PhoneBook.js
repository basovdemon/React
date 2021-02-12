import React from "react";
import { Button, Container } from "@material-ui/core";
import { connect } from "react-redux";

import { useStyles } from "./styles";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

import {
    addContact,
    deleteSelectedContacts,
    showAlert,
} from "../../../redux/actions";
import { AlertCustom } from "../../App/components/AlertCustom";

function PhoneBook(props) {
    const classes = useStyles();

    function deleteSelectedContactsHandler() {
        return props.deleteSelectedContacts();
    }

    function addContactHandler(contact) {
        if (!contact.name.trim()) {
            return props.showAlert("Name can't be empty");
        }

        props.addContact({
            id: Math.random(),
            selected: false,
            name: contact.name,
            phone: contact.phone,
        });
    }

    return (
        <>
            <Container className={classes.phonebook} maxWidth="md">
                <AddContact onCreate={addContactHandler} />
                <br />
                <Button
                    variant="outlined"
                    style={{ backgroundColor: "red" }}
                    onClick={deleteSelectedContactsHandler}
                >
                    Delete Selected
                </Button>

                <ContactList />
            </Container>
            {props.alert && <AlertCustom text={props.alert} />}
        </>
    );
}

const mapDispatchToProps = {
    addContact,
    deleteSelectedContacts,
    showAlert,
};

export default connect(null, mapDispatchToProps)(PhoneBook);
