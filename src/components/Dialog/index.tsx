import React, {FC, ReactElement, ReactNode} from 'react'
import {Dialog, DialogContent, DialogTitle, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/CloseOutlined'

type ModalProps = {
    title?: string
    children: ReactNode
    visible?: boolean
    onClose: () => void
}

export const Modal: FC<ModalProps> = ({title, children, visible = false, onClose}): ReactElement => {

    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title" maxWidth="xs"
                fullWidth={true}>
            <DialogTitle id="form-dialog-title">
                <IconButton aria-label="close" onClick={onClose} color="primary">
                    <CloseIcon/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal