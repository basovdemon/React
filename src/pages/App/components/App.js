import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";

import { useStyles } from "./styles";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { AlertCustom } from "./AlertCustom";

import Routes from "../../../routes/Routes";

function App(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.pageContainer}>
                <Container className={classes.contentWrap}>
                    <BrowserRouter>
                        <NavBar />
                        <Routes />
                        {props.alert && <AlertCustom text={props.alert} />}
                    </BrowserRouter>
                </Container>
                <Footer className={classes.footer} />
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    alert: state.app.alert,
});

export default connect(mapStateToProps, null)(App);
