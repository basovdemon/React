import ReactDOM from "react-dom";
import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import App from "./pages/App/components/App";
import { rootReducer } from "./redux/reducers/rootReducer";
import { forbiddenNameMiddleware } from "./redux/middleware";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, forbiddenNameMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(sagaWatcher);

const app = (
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
