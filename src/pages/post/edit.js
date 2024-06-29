import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { TextField, Box } from '@mui/material';
// importCloseom '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs(props) {
    const [open, setOpen] = useState(props.edit);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');


    const handleClose = () => {
        props.setEdit(false);
        props.update_post(props.data.id)
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">

            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                Close
            </IconButton>
            <DialogContent dividers>
                {/* <Input>{props.data.attributes.title}</Input> */}
                <Box>
                    <TextField
                        fullWidth
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue={props.data.attributes.title}
                        variant="filled"
                        size="small"
                        onChange={(e) => props.setTitle(e.target.value)}
                    />
                </Box>
                <Box>
                    <TextField
                        fullWidth
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue={props.data.attributes.content}
                        variant="filled"
                        size="small"
                        onChange={(e) => props.setDescription(e.target.value)}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Update
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}