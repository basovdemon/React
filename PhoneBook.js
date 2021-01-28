import React from "react";
import { useStyles } from "./Styles";
import {
    Container,
    Button,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    Dialog,
    DialogActions,
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";

function PhoneBook() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
    };

    let contact = {
        nick: "",
        phone: "",
    };
    let contacts = [
        { name: "Nick", phone: "321654" },
        { name: "Nick", phone: "321654" },
        { name: "Nick", phone: "321654" },
        { name: "Nick", phone: "321654" },
    ];

    return (
        <>
            <Container className={classes.phonebook} maxWidth="md">
                <Box>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add Contact
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialof-contact"
                    >
                        <DialogTitle id="form-dialof-contact">
                            Contact
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>Enter contact</DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="phone"
                                label="Phone"
                                type="tel"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSave}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                {/* <Typography>Your Contacts:</Typography> */}
                <Container className={classes.contacts} maxWidth="md">
                    <Grid container spacing={2}>
                        {contacts.map((contact) => (
                            <Grid item key={contact.id}>
                                <Card className={classes.contact}>
                                    <CardMedia
                                        image="https://source.unsplash.com/random"
                                        title={contact}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Name: {contact.name}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom>
                                            Phone: {contact.phone}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    );
}

function Contact() {
    // return (
    // );
}

export default PhoneBook;
