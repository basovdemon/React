import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
    Typography,
    BottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core";

import { useStyles } from "./styles";

function Footer() {
    const classes = useStyles();

    const [value, setValue] = React.useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.footer}>
            <BottomNavigation value={value} onChange={handleChange}>
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
        </div>
    );
}

export default Footer;
