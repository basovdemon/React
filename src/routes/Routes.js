import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "./routesNames";

import { Loader } from "../pages/App/components/Loader";

const Home = lazy(() => import("../pages/Home/components/Home"));
const PhoneBook = lazy(() => import("../pages/PhoneBook/components/PhoneBook"));
const CovidState = lazy(() =>
    import("../pages/CovidState/components/CovidState")
);

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.PHONEBOOK} component={PhoneBook} />
                <Route exact path={ROUTES.COVIDSTATE} component={CovidState} />
                <Redirect from="*" to="/" />
            </Switch>
        </Suspense>
    );
};

export default React.memo(Routes);
