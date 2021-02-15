import { combineReducers } from "redux";

import { phoneBookReducer } from "./phoneBookReducer";
import { covidReduser } from "./covidReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    contacts: phoneBookReducer,
    fetchedCovidData: covidReduser,
    app: appReducer,
});
