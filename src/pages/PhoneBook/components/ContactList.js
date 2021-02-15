import React from "react";
import { connect } from "react-redux";
import { List } from "@material-ui/core";

import ContactItem from "./ContactItem";

function ContactList(props) {
    return (
        <List>
            {props.contacts.map((contact, index) => {
                return (
                    <ContactItem
                        contact={contact}
                        key={contact.id}
                        index={index}
                    />
                );
            })}
        </List>
    );
}

const mapStateToProps = (state) => {
    return { contacts: state.contacts.contacts };
};

export default connect(mapStateToProps, null)(ContactList);
