import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
                    />
                );
            })}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
    return { contacts: state.contacts.contacts };
};

export default connect(mapStateToProps, null)(ContactList);
