import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Container,
    Toolbar,
    Box,
    Button,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    Dialog,
    DialogActions,
} from "@material-ui/core";

import { useStyles } from "./styles";

import { ROUTES } from "../../../routes/routesNames";

function NavBar() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar>
            <Container className={classes.toolbar}>
                <Toolbar>
                    <Box mr={3}>
                        <Button
                            component={Link}
                            to={ROUTES.HOME}
                            className={classes.navigation}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to={ROUTES.PHONEBOOK}
                            className={classes.navigation}
                        >
                            PhoneBook
                        </Button>
                        <Button
                            component={Link}
                            to={ROUTES.COVIDSTATE}
                            className={classes.navigation}
                        >
                            CovidState
                        </Button>
                    </Box>

                    <Box mr={3}>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Log In
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialof-title"
                        >
                            <DialogTitle id="form-dialof-title">
                                Log In
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Log In to get extra admission
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="pass"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Log In</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>

                    <Button variant="contained" onClick={handleClickOpen}>
                        Sign Up
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
