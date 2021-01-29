import React from "react";
import PropTypes from "prop-types";

import ContactItem from "./ContactItem";

function ContactList(props) {
    return (
        <ul>
            {props.contacts.map((contact, index) => {
                return (
                    <ContactItem
                        contact={contact}
                        key={contact.id}
                        index={index}
                        onChange={props.onEdit}
                    />
                );
            })}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ContactList;
