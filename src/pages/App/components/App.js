import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useStyles } from "./styles";
import NavBar from "./NavBar";
import Footer from "./Footer";

import Routes from "../../../routes/Routes";
import { Container } from "@material-ui/core";

function App() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.pageContainer}>
                <Container className={classes.contentWrap}>
                    <BrowserRouter>
                        <NavBar />
                        <Routes />
                    </BrowserRouter>
                </Container>
                <Footer className={classes.footer} />
            </div>
        </>
    );
}

export default App;
