import { takeEvery, put, call } from "redux-saga/effects";
import api from "../api/api";
import axios from "axios";

import { hideAlert, hideLoader, showAlert, showLoader } from "./actions";
import { FETCH_COVID, REQUEST_COVID } from "./types";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_COVID, sagaWorker);
}

function* sagaWorker() {
    debugger;
    try {
        yield put(showLoader());
        const payload = yield call(fetchCovid);
        yield put({ type: FETCH_COVID, payload });
        yield put(hideLoader());
    } catch (e) {
        console.log(e);
        yield put(showAlert("Smth goes wrong..."));
        yield put(hideAlert());
    }
}

async function fetchCovid() {
    const response = await axios.get("https://api.covid19api.com/summary", {
        headers: { "Access-Control-Allow-Origin": "*" },
    });
    return await response.data;
    // return await (await api.get()).data;
}
