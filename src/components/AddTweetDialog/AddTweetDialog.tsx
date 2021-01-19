import React, { FC, ReactElement, ReactNode } from 'react'

import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/CloseOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    dialogTitleRoot: {
        padding: '6px 15px',
        margin: 0
    },
    dialogContentRoot: {
        padding: 0
    }
}))

type ModalProps = {
    children: ReactNode
    visible: boolean
    onClose: () => void
}

export const AddTweetDialog: FC<ModalProps> = ({ children, visible, onClose }): ReactElement => {

    const classes = useStyles()

    return (
        <Dialog open={visible} onClose={onClose} maxWidth="sm"
                fullWidth={true}>
            <DialogTitle id="form-dialog-title" classes={{ root: classes.dialogTitleRoot }}>
                <IconButton aria-label="close" onClick={onClose} color="primary">
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent classes={{ root: classes.dialogContentRoot }}>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default AddTweetDialog