import React from "react";
import { Container, CircularProgress } from "@material-ui/core";

export const Loader = () => (
    <Container
        style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "90px",
        }}
    >
        <CircularProgress />
    </Container>
);
