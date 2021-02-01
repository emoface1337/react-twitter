import React, { FC, ReactElement } from 'react'
import { Button, FormGroup, TextField } from '@material-ui/core'
import Modal from '../../components/Dialog/Dialog'

type Props = {
    open: boolean
    onClose: () => void
}

const SignUpModal: FC<Props> = ({ open, onClose }): ReactElement => {
    return (
        <Modal title="Создайте учётную запись" visible={open} onClose={onClose}>
            <FormGroup>
                <TextField
                    autoFocus
                    style={{ marginBottom: 20 }}
                    id="email"
                    label="Почта"
                    type="email"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="filled"
                />
                <TextField
                    style={{ marginBottom: 20 }}
                    id="password"
                    label="Пароль"
                    type="password"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="filled"
                />
            </FormGroup>
            <Button onClick={onClose} color="primary" variant="contained" fullWidth>
                Зарегистрироваться
            </Button>
        </Modal>
    )
}

export default SignUpModal