import React, { FC, ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, CircularProgress, Fade, FormControl, TextField } from '@material-ui/core'

import { UserActions } from '../../store/ducks/user/user'

import { makeStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check'

import Modal from '../../components/Dialog/Dialog'
import { selectErrorMessage, selectSignInError, selectSignInIsLoading, selectSignInIsSuccess } from '../../store/ducks/user/selectors'

const useStyles = makeStyles((theme) => ({
    progressWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0 12px 0',
        height: '75px'
    },
    success: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '43px',
        width: '43px',
        backgroundColor: theme.palette.success.main,
        borderRadius: 9999
    }
}))

type Props = {
    open: boolean
    onClose: () => void
}

export type SignInFormData = {
    email: string
    password: string
}

const validationSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, 'Длина пароля меньше 6 символов').required('Введите пароль')
})

const SignInModal: FC<Props> = ({ open, onClose }): ReactElement => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const signInErrorMessage = useSelector(selectErrorMessage)

    const signInError = useSelector(selectSignInError)
    const signInSuccess = useSelector(selectSignInIsSuccess)
    const signInLoading = useSelector(selectSignInIsLoading)

    const { handleSubmit, errors, control } = useForm<SignInFormData>(
        {
            resolver: yupResolver(validationSchema)
        })

    const onSubmit = handleSubmit(async (formData: SignInFormData) => {
        dispatch(UserActions.fetchSignIn(formData))
    })

    useEffect(() => {
        if (signInSuccess) {
            setTimeout(() => {
                onClose()
                // history.push('/home')
            }, 2000)
        }
    }, [history, onClose, signInSuccess])

    return (
        <Modal title="Войти в аккаунт" visible={open} onClose={onClose}>
            <form onSubmit={onSubmit}>
                <FormControl fullWidth>
                    <Controller name={'email'} control={control} defaultValue="" as={
                        <TextField
                            style={{ marginBottom: 10 }}
                            id="email"
                            label="Почта"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="filled"
                            error={Boolean(errors?.email)}
                            helperText={errors.email?.message}
                        />}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <Controller name={'password'} control={control} defaultValue="" as={
                        <TextField
                            style={{ marginBottom: 10 }}
                            id="password"
                            label="Пароль"
                            type="password"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="filled"
                            error={Boolean(errors?.password)}
                            helperText={errors.password?.message}
                        />}
                    />
                </FormControl>
                <Button type="submit" color="primary" variant="contained" fullWidth
                        disabled={signInLoading || signInSuccess}>
                    Войти
                </Button>
            </form>
            {
                signInLoading && <Box className={classes.progressWrapper}><CircularProgress/></Box>
            }
            {
                signInError && signInErrorMessage &&
                <Fade in={signInError} timeout={500}>
                    <Box className={classes.progressWrapper}>
                        {signInErrorMessage}
                    </Box>
                </Fade>
            }
            {
                signInSuccess &&
                <Fade in={signInSuccess} timeout={2000}>
                    <Box className={classes.progressWrapper}>
                        <Box className={classes.success}>
                            <CheckIcon style={{ color: '#fff' }}/>
                        </Box>
                    </Box>
                </Fade>
            }
        </Modal>
    )
}

export default SignInModal