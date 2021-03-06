import { showAlert } from "./actions";
import { ADD_CONTACT, EDIT_CONTACT } from "./types";

const forbiddenNames = ["Luka", "Ermoshina", "Balaba", "Karaev", "Sheiman"];

export function forbiddenNameMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_CONTACT || action.type === EDIT_CONTACT) {
                const found = forbiddenNames.filter((w) =>
                    action.payload.name.includes(w)
                );
                debugger;
                if (found.length) {
                    return dispatch(
                        showAlert("Bastards can't be added to the phonebook!")
                    );
                }
            }
            return next(action);
        };
    };
}
