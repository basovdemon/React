import {
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    SELECT_CONTACT,
    DELETE_SELECTED_CONTACTS,
} from "../types";

const initialState = {
    contacts: [
        { id: 0, selected: false, name: "Redux", phone: "13698642" },
        { id: 1, selected: false, name: "React", phone: "24689753" },
        { id: 2, selected: false, name: "Saga ", phone: "65498731" },
    ],
};

export const phoneBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: state.contacts.concat([action.payload]),
            };

        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((o) => {
                    if (o.id === action.payload.id) {
                        return action.payload;
                    }
                    return o;
                }),
            };

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case SELECT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if (contact.id === action.payload) {
                        contact.selected = !contact.selected;
                    }
                    return contact;
                }),
            };

        case DELETE_SELECTED_CONTACTS:
            return {
                ...state,
                contacts: state.contacts.filter((cont) => !cont.selected),
            };

        default:
            return state;
    }
};
