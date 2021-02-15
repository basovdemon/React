import { FETCH_COVID } from "../types";

const initialState = {
    covidData: [],
};

export const covidReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COVID:
            return { ...state, covidData: action.payload };

        default:
            return state;
    }
};
