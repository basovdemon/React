import { takeEvery, put, call } from "redux-saga/effects";
import api from "../api/api";

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
        debugger;
        console.log(e);
        yield put(showAlert("Smth goes wrong..."));
        yield put(hideAlert());
    }
}

async function fetchCovid() {
    return await (await api.get()).data;
}
