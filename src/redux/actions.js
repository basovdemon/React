import {
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    DELETE_SELECTED_CONTACTS,
    FETCH_COVID,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT,
    REQUEST_COVID,
} from "./types";
import axios from "axios";

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}

export function showAlert(text) {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text,
        });

        setTimeout(() => {
            dispatch(hideAlert());
        }, 3000);
    };
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    };
}

export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
}

export function editContact(contact) {
    return {
        type: EDIT_CONTACT,
        payload: contact,
    };
}

export function deleteContact(id) {
    return {
        type: DELETE_CONTACT,
        payload: id,
    };
}

export function selectContact(contact) {
    return {
        type: SELECT_CONTACT,
        payload: contact,
    };
}

export function deleteSelectedContacts(contacts) {
    return {
        type: DELETE_SELECTED_CONTACTS,
        payload: contacts,
    };
}

export function fetchCovid() {
    return { type: REQUEST_COVID };
    //  ;
    // const apiUrl = "https://api.covid19api.com/summary";
    // return async (dispatch) => {
    //     try {
    //         dispatch(showLoader());
    //         const response = await axios.get(apiUrl, {
    //             headers: { "Access-Control-Allow-Origin": "*" },
    //         });
    //         const json = await response.json();
    //         dispatch({ type: FETCH_COVID, payload: json });
    //         dispatch(hideLoader());
    //     } catch (e) {
    //         dispatch(showAlert("Smth goes wrong..."));
    //     }
    // };
}
