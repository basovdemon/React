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
} from "@material-ui/core";

function useInputValue(defaultValues = { name: "", phone: "" }) {
    const [values, setValue] = useState(defaultValues);
    return {
        bind: {
            values,
            onChange: (event) =>
                setValue({
                    ...values,
                    [event.target.name]: event.target.value,
                }),
        },
        clear: () => setValue({ name: "", phone: "" }),
        value: () => values,
    };
}

function EditContact({ onEdit, contact }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const input = useInputValue(contact); //

    const saveHandler = (event) => {
        event.preventDefault();

        if (input.value()) {
            onEdit(input.value());
            input.clear();
            handleClose();
        }
    };

    return (
        <Box>
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
                        name="name"
                        fullWidth
                        {...input.bind}
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="tel"
                        name="phone"
                        fullWidth
                        {...input.bind}
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

EditContact.propTypes = {
    onEdit: PropTypes.func.isRequired,
    contact: PropTypes.object,
};

export default EditContact;
