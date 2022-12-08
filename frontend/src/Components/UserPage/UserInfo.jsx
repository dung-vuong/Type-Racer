import React from 'react'
import { Button, Dialog, DialogTitle, List, ListItem } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

const UserInfo = ({user}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" variant="outlined" onClick={handleClickOpen}>
                Your Information
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle sx={{ p: "2em 3em 1em 3em" }}><InfoIcon/>&nbsp;&nbsp; Information &nbsp;&nbsp;<InfoIcon/></DialogTitle>
                <List sx={{pb: "1em"}}>
                    <ListItem button sx={{ p: "1em 5em" }}>
                        First Name: {user.data.firstName}
                    </ListItem>
                    <ListItem button sx={{ p: "1em 5em" }}>
                        Last Name: {user.data.lastName}
                    </ListItem>
                    <ListItem button sx={{ p: "1em 5em" }}>
                        Email: {user.data.email}
                    </ListItem>
                    <ListItem button sx={{ p: "1em 5em" }}>
                        Start Date: {user.data.createdAt.substring(0, 10)}
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
}

export default UserInfo