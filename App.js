import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useStyles } from "./Styles";
import Home from "./Home";
import PhoneBook from "./PhoneBook";
import CovidState from "./CovidState";

import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Button,
    BottomNavigation,
    BottomNavigationAction,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    Dialog,
    DialogActions,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import MenuIcon from "@material-ui/icons/Menu";

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const history = createBrowserHistory();

    return (
        <>
            <Router history={history}>
                <AppBar>
                    <Container className={classes.toolbar}>
                        <Toolbar>
                            {/* <IconButton edge="start" aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Box mr={3}>
                                <Button
                                    component={Link}
                                    to={"/"}
                                    className={classes.navigation}
                                >
                                    Home
                                </Button>
                                <Button
                                    component={Link}
                                    to={"/phonebook"}
                                    className={classes.navigation}
                                >
                                    PhoneBook
                                </Button>
                                <Button
                                    component={Link}
                                    to={"/covidstate"}
                                    className={classes.navigation}
                                >
                                    CovidState
                                </Button>
                            </Box>
                            {/* <Typography variant="h4" className={classes.title}>
                                B L N K
                            </Typography> */}
                            <Box mr={3}>
                                <Button
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                >
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
                                        <Button onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button onClick={handleClose}>
                                            Log In
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                            <Button
                                variant="contained"
                                onClick={handleClickOpen}
                            >
                                Sign Up
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>

                <Route exact path="/" component={Home} />
                <Route path="/phonebook" component={PhoneBook} />
                <Route path="/covidstate" component={CovidState} />
            </Router>

            <footer className={classes.footer}>
                {/* <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography> */}
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Resents"
                        value="resents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<FolderIcon />}
                    />
                </BottomNavigation>
                <Typography
                    align="center"
                    color="textSecondary"
                    component="p"
                    variant="subtitle1"
                >
                    Reprehenderit voluptate dolor incididunt Lorem elit eiusmod.
                </Typography>
            </footer>
        </>
    );
}

export default App;
