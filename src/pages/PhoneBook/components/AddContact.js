import React, { useState } from "react";
import PropTypes from "prop-types";
import {
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
        clear: () => setValue(defaultValues),
        value: () => values,
    };
}

function AddContact({ onCreate, isEdit = false, currentContact = null }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const defaultValues = isEdit
        ? { name: currentContact.name, phone: currentContact.phone }
        : { name: "", phone: "" };

    const input = useInputValue(defaultValues); //

    const saveHandler = (event) => {
        event.preventDefault();

        if (input.value()) {
            onCreate(input.value());
            input.clear();
            handleClose();
        }
    };

    return (
        <Box>
            <Button variant="outlined" onClick={handleClickOpen}>
                {isEdit ? "Edit" : "Add Contact"}
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
                        name="name"
                        defaultValue={defaultValues.name}
                        fullWidth
                        {...input.bind}
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="tel"
                        name="phone"
                        defaultValue={defaultValues.phone}
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

AddContact.propTypes = {
    onCreate: PropTypes.func.isRequired,
    isEdit: PropTypes.bool,
    currentContact: PropTypes.object,
};

export default AddContact;
