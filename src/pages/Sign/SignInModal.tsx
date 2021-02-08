import React, { FC, ReactElement, useEffect } from 'react'
import Modal from '../../components/Dialog/Dialog'
import { Box, Button, CircularProgress, Fade, FormControl, TextField } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions } from '../../store/ducks/user/user'
import { RootState } from '../../store'
import { LoadingStatusEnum } from '../../store/types'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check'

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

// TODO:
// 1. fix error status after modal close

const SignInModal: FC<Props> = ({ open, onClose }): ReactElement => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const loadingStatus = useSelector((state: RootState) => state.user.loadingStatus)

    const { handleSubmit, errors, control } = useForm<SignInFormData>(
        {
            resolver: yupResolver(validationSchema)
        })

    const onSubmit = handleSubmit(async (formData: SignInFormData) => {
        dispatch(UserActions.fetchSignIn(formData))
    })

    useEffect(() => {
        if (loadingStatus === LoadingStatusEnum.LOADED) {
            setTimeout(() => {
                history.push('/home')
            }, 2000)
        }
    }, [history, loadingStatus, onClose])

    return (
        <Modal title="Войти в аккаунт" visible={open} onClose={onClose}>
            <form onSubmit={onSubmit}>
                <FormControl fullWidth>
                    <Controller name={'email'} control={control} defaultValue="" as={
                        <TextField
                            style={{ marginBottom: 20 }}
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
                <Button type="submit" color="primary" variant="contained" fullWidth>
                    Войти
                </Button>
            </form>
            {
                loadingStatus === LoadingStatusEnum.LOADING &&
                <Box className={classes.progressWrapper}><CircularProgress/></Box>
            }
            {
                loadingStatus === LoadingStatusEnum.ERROR &&
                <Fade in={loadingStatus === LoadingStatusEnum.ERROR} timeout={500}>
                    <Box className={classes.progressWrapper}>
                        Неверный логин или пароль
                    </Box>
                </Fade>
            }
            {
                loadingStatus === LoadingStatusEnum.LOADED &&
                <Fade in={loadingStatus === LoadingStatusEnum.LOADED} timeout={2000}>
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