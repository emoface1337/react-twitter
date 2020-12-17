import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Button,
    Container,
    IconButton,
    InputBase,
    SvgIconTypeMap,
    Typography,
    Grid,
    Paper
} from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

import Tweet from '../components/Tweet/Tweet'
import AddTweetForm from '../components/AddTweetForm/AddTweetForm'

export const useHomeStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    menuWrapper: {
        position: 'sticky',
        top: 0
    },
    nav: {
        display: 'inline-flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 10
    },
    navLinkButton: {
        justifyContent: 'flex-start',
        fontSize: 19,
        height: 46,
        color: '#000',
        paddingLeft: '14px',
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'rgba(29,161,241,0.1)'
        }
    },
    tweetButton: {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 28px',
        height: '47px',
        width: '80%'
    },
    rightSideWrapper: {
        position: 'sticky',
        top: 0,
        paddingTop: '10px'
    },
    inputWrapper: {
        // padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '9999px',
        backgroundColor: '#ebeef0',
        height: 40
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        marginRight: '20px',
        fontSize: '15px'
    },
    inputIcon: {
        marginLeft: 15,
        fontSize: 25,
        color: '#5b7083'
    },
    tweetsWrapper: {
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweet: {
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.03)',
            cursor: 'pointer'
        }
    },
    tweetWrapper: {
        display: 'flex'
    },
    tweetAvatar: {
        flexBasis: '49px',
        marginRight: '10px',
        '& :first-child': {
            width: '49px',
            height: '49px'
        }
    },
    tweetContent: {
        flexGrow: 1
    },
    tweetActions: {
        marginTop: '10px',
        marginLeft: '-10px',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '425px',
        '& span': {
            fontSize: '13px',
            padding: '0 8px'
        }
    },
    tweetAction: {
        display: 'flex',
        alignItems: 'center',
        '& > button': {
            width: '35px',
            height: '35px'
        }
    },
    tweetActionsComment: {
        '&:hover': {
            color: theme.palette.primary.main,
            '& > button': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    tweetActionsRetweet: {
        '&:hover': {
            color: 'rgb(23,191,99)',
            '& > button': {
                color: 'rgb(23,191,99)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    tweetActionsLike: {
        '&:hover': {
            color: 'rgb(224,36,94)',
            '& > button': {
                color: 'rgb(224,36,94)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    tweetActionsResend: {
        '&:hover': {
            color: theme.palette.primary.main,
            '& > button': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    addTweetWrapper: {
        display: 'flex'
    },
    addTweetAvatar: {
        flexBasis: '49px',
        marginRight: '10px',
        '& :first-child': {
            width: '49px',
            height: '49px'
        }
    },
    addTweetTextarea: {
        border: 'none',
        fontSize: '19px',
        width: '100%',
        padding: '10px 0',
        fontFamily: 'sans-serif',
        resize: 'none',
        marginBottom: '10px'
    },
    addTweetContent: {
        flexGrow: 1
    },
    addTweetActions: {
        marginLeft: '-10px',
        display: 'flex'
    },
    addTweetActionsWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    addTweetAction: {
        display: 'flex',
        alignItems: 'center',
        width: '39px',
        height: '39px',
        '& > button': {
            width: '100%',
            height: '100%'
        }
    },
    addTweetButton: {
        fontSize: '15px'
    },
    tweetsDivider: {
        backgroundColor: 'rgb(247, 249, 250)',
        height: '10px',
        borderBottom: '1px solid rgba(0,0,0,0.12)'
    }
}))

const MenuIcon = (Component: OverridableComponent<SvgIconTypeMap>) => {
    return <Component style={{ fontSize: '35px' }}/>
}

const menuItems = [
    { title: 'Главная', icon: MenuIcon(HomeOutlinedIcon) },
    { title: 'Поиск', icon: MenuIcon(SearchOutlinedIcon) },
    { title: 'Уведомления', icon: MenuIcon(NotificationsOutlinedIcon) },
    { title: 'Сообщения', icon: MenuIcon(MailOutlineOutlinedIcon) },
    { title: 'Закладки', icon: MenuIcon(BookmarkBorderOutlinedIcon) },
    { title: 'Списки', icon: MenuIcon(ListAltOutlinedIcon) },
    { title: 'Профиль', icon: MenuIcon(PersonOutlineOutlinedIcon) },
    { title: 'Ещё', icon: MenuIcon(MoreHorizOutlinedIcon) }
]

const Home: FC = (): ReactElement => {

    const classes = useHomeStyles()

    return (
        <Container maxWidth="lg" component="main">
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={3}>
                    <Box className={classes.menuWrapper}>
                        <Link to="/home" style={{ display: 'inline-block' }}>
                            <IconButton>
                                <Twitter color="primary" style={{ fontSize: '33px' }}/>
                            </IconButton>
                        </Link>
                        <nav className={classes.nav}>
                            {
                                menuItems.map(item => (
                                    <div key={item.title}>
                                        <Button
                                            variant="text"
                                            color="primary"
                                            startIcon={item.icon}
                                            className={classes.navLinkButton}
                                        >
                                            {item.title}
                                        </Button>
                                    </div>
                                ))
                            }
                        </nav>
                        <Button color="primary" variant="contained" fullWidth className={classes.tweetButton}>
                            Твитнуть
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} square variant="outlined">
                        <Paper className={classes.tweetsHeader} square variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        <AddTweetForm classes={classes}/>
                        <Box className={classes.tweetsDivider}/>
                        {
                            Array(15).fill(1).map(() =>
                                <Tweet classes={classes}/>
                            )
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.rightSideWrapper}>
                        <Paper component="form" className={classes.inputWrapper}>
                            <SearchOutlinedIcon className={classes.inputIcon}/>
                            <InputBase
                                className={classes.input}
                                placeholder="Поиск в Твиттере"
                            />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home