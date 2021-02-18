import React, { FC, ReactElement, useEffect } from 'react'
import { Box, Button, CircularProgress, Fade, FormControl, TextField } from '@material-ui/core'
import Modal from '../../components/Dialog/Dialog'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserActions } from '../../store/ducks/user/user'
import { useDispatch, useSelector } from 'react-redux'

import CheckIcon from '@material-ui/icons/Check'
import { makeStyles } from '@material-ui/core/styles'
import { selectErrorMessage, selectSignUpError, selectSignUpIsLoading, selectSignUpIsSuccess } from '../../store/ducks/user/selectors'

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

export type SignUpFormData = {
    email: string
    username: string
    fullname: string
    password: string
    password2: string
}

const validationSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите имя пользователя'),
    fullname: yup.string().required('Введите ваше имя'),
    password: yup.string().required('Введите пароль').min(6, 'Длина пароля меньше 6 символов'),
    password2: yup.string().oneOf([yup.ref('password'), undefined], 'Пароли должны совпадать')

})

type Props = {
    open: boolean
    onClose: () => void
}

const SignUpModal: FC<Props> = ({ open, onClose }): ReactElement => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const signUpErrorMessage = useSelector(selectErrorMessage)

    const signUpError = useSelector(selectSignUpError)
    const signUpSuccess = useSelector(selectSignUpIsSuccess)
    const signUpLoading = useSelector(selectSignUpIsLoading)

    const { handleSubmit, errors, control } = useForm<SignUpFormData>(
        {
            resolver: yupResolver(validationSchema)
        })

    const onSubmit = handleSubmit(async (formData: SignUpFormData) => {
        dispatch(UserActions.fetchSignUp(formData))
    })

    useEffect(() => {
        if (signUpSuccess) {
            setTimeout(() => {
                onClose()
            }, 3000)
        }
    }, [onClose, signUpSuccess])

    return (
        <Modal title="Создайте учётную запись" visible={open} onClose={onClose}>
            <form onSubmit={onSubmit}>
                <FormControl fullWidth>
                    <Controller name={'username'} control={control} defaultValue="" as={
                        <TextField
                            autoFocus
                            style={{ marginBottom: 20 }}
                            id="username"
                            label="Никнейм"
                            type="text"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="filled"
                            error={Boolean(errors?.username)}
                            helperText={errors.username?.message}
                        />}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <Controller name={'password'} control={control} defaultValue="" as={
                        <TextField
                            style={{ marginBottom: 20 }}
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
                <FormControl fullWidth>
                    <Controller name={'password2'} control={control} defaultValue="" as={
                        <TextField
                            style={{ marginBottom: 20 }}
                            id="password2"
                            label="Повторите пароль"
                            type="password"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="filled"
                            error={Boolean(errors?.password2)}
                            helperText={errors.password2?.message}
                        />}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <Controller name={'fullname'} control={control} defaultValue="" as={
                        <TextField
                            autoFocus
                            style={{ marginBottom: 20 }}
                            id="fullname"
                            label="Ваше имя"
                            type="text"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="filled"
                            error={Boolean(errors?.fullname)}
                            helperText={errors.fullname?.message}
                        />}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <Controller name={'email'} control={control} defaultValue="" as={
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
                            error={Boolean(errors?.email)}
                            helperText={errors.email?.message}
                        />}
                    />
                </FormControl>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Зарегистрироваться
                </Button>
            </form>
            {
                signUpLoading && <Box className={classes.progressWrapper}><CircularProgress/></Box>
            }
            {
                signUpError && signUpErrorMessage &&
                <Fade in={signUpError} timeout={500}>
                    <Box className={classes.progressWrapper}>
                        {signUpErrorMessage}
                    </Box>
                </Fade>
            }
            {
                signUpSuccess &&
                <Fade in={signUpSuccess} timeout={2000}>
                    <Box className={classes.progressWrapper}>
                        <Box className={classes.success}>
                            <CheckIcon style={{ color: '#fff' }}/>
                        </Box>
                        <Box>
                            Регистрация завершена, проверьте почту
                        </Box>
                    </Box>
                </Fade>
            }
        </Modal>
    )
}

export default SignUpModal