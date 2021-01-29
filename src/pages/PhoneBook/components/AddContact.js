import React, { useState } from "react";
import PropTypes from "prop-types";
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

function useInputValue(defaultValue = { name: "", phone: "" }) {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: (event) => setValue(event.target.value),
        },
        clear: () => setValue({ name: "", phone: "" }),
        value: () => value,
    };
}

function AddContact({ onCreate }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const input = useInputValue({ name: "", phone: "" });

    const saveHandler = (event) => {
        event.preventDefault();

        debugger;
        if (input.value().name.trim()) {
            onCreate(input.value());
            input.clear();
        }
    };

    return (
        <Box>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Contact
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialof-contact"
            >
                <DialogTitle id="form-dialof-contact">Contact</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter contact</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        {...input.bind.value.name}
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="tel"
                        fullWidth
                        {...input.bind.value.phone}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveHandler}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

AddContact.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default AddContact;
