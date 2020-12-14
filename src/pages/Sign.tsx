import React, {useState} from 'react'

import {
    Button, FormGroup,
    makeStyles,
    TextField,
    Typography
} from '@material-ui/core'
import {Twitter} from '@material-ui/icons'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import Modal from '../components/Dialog'

const useStyles = makeStyles(() => ({
        wrapper: {
            display: 'flex',
            height: '100vh'

        },
        leftSide: {
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'rgb(116, 202, 254)',
            flex: '0 0 50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        leftSideList: {
            position: 'relative',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            '& h6': {
                color: 'white',
                fontWeight: 700,
                fontSize: 20,
                display: 'flex',
                alignItems: 'center'
            },
            '& li:not(:last-child)': {
                marginBottom: 40
            }
        },
        leftSideListIcon: {
            fontSize: 28,
            marginRight: 15
        },
        leftSideBigIcon: {
            position: 'absolute',
            left: '70%',
            top: '45%',
            transform: 'translate(-50%,-50%)',
            width: '180%',
            height: '230%'
        },
        rightSide: {
            flex: '0 0 50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        rightSideWrapper: {
            maxWidth: 380
        },
        rightSideIcon: {
            fontSize: '2.75rem'
        },
        rightSideTitle: {
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 45,
            marginTop: 20
        }
    }
))

const Sign = () => {

    const classes = useStyles()

    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleClose = (): void => {
        setVisibleModal(undefined)
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.leftSide}>
                <Twitter color="primary" className={classes.leftSideBigIcon}/>
                <ul className={classes.leftSideList}>
                    <li>
                        <Typography variant="h6"><SearchOutlinedIcon className={classes.leftSideListIcon}/>Читайте о
                            том, что вам интересно</Typography>
                    </li>
                    <li>
                        <Typography variant="h6"><PeopleOutlineIcon className={classes.leftSideListIcon}/>Узнайте, о чем
                            говорят в мире.</Typography>
                    </li>
                    <li>
                        <Typography variant="h6"><ChatBubbleOutlineIcon className={classes.leftSideListIcon}/>Присоединяйтесь
                            к общению.</Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.rightSideWrapper}>
                    <Twitter color="primary" className={classes.rightSideIcon}/>
                    <Typography variant="h4" className={classes.rightSideTitle}>Узнайте, что происходит в мире прямо
                        сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} variant="contained" color="primary" fullWidth
                            style={{marginBottom: 20}}>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>
                    <Modal title="Войти в аккаунт" visible={visibleModal === 'signIn'} onClose={handleClose}>
                        <FormGroup>
                            <TextField
                                autoFocus
                                style={{marginBottom: 20}}
                                id="email"
                                label="Почта"
                                type="email"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                style={{marginBottom: 20}}
                                id="password"
                                label="Пароль"
                                type="password"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                variant="filled"
                            />
                        </FormGroup>
                        <Button onClick={handleClose} color="primary" variant="contained" fullWidth>
                            Войти
                        </Button>
                    </Modal>
                    <Modal title="Создайте учётную запись" visible={visibleModal === 'signUp'} onClose={handleClose}>
                        <FormGroup>
                            <TextField
                                autoFocus
                                style={{marginBottom: 20}}
                                id="email"
                                label="Почта"
                                type="email"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                style={{marginBottom: 20}}
                                id="password"
                                label="Пароль"
                                type="password"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                variant="filled"
                            />
                        </FormGroup>
                        <Button onClick={handleClose} color="primary" variant="contained" fullWidth>
                            Зарегистрироваться
                        </Button>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Sign