import React, { FC, ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, IconButton, SvgIconTypeMap } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { useHomeStyles } from '../../theme/theme'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import AddTweetDialog from '../AddTweetDialog/AddTweetDialog'
import AddTweetForm from '../AddTweetForm/AddTweetForm'
import SideMenuProfile from '../SideMenuProfile/SideMenuProfile'
import { AuthUserType } from '../../api/authApi'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
    currentUser: AuthUserType
}

const MenuIcon = (Component: OverridableComponent<SvgIconTypeMap>) => {
    return <Component style={{ fontSize: '35px' }}/>
}

const menuItems = [
    // { title: 'Главная', icon: MenuIcon(HomeOutlinedIcon) },
    { title: 'Поиск', icon: MenuIcon(SearchOutlinedIcon) },
    { title: 'Уведомления', icon: MenuIcon(NotificationsOutlinedIcon) },
    { title: 'Сообщения', icon: MenuIcon(MailOutlineOutlinedIcon) },
    { title: 'Закладки', icon: MenuIcon(BookmarkBorderOutlinedIcon) },
    { title: 'Списки', icon: MenuIcon(ListAltOutlinedIcon) },
    { title: 'Профиль', icon: MenuIcon(PersonOutlineOutlinedIcon) },
    { title: 'Ещё', icon: MenuIcon(MoreHorizOutlinedIcon) }
]

const SideMenu: FC<Props> = ({ classes, currentUser }): ReactElement => {

    const [visibleModal, setVisibleModal] = useState(false)

    const handleClose = (): void => {
        setVisibleModal(false)
    }

    const handleClickOpenAddTweetDialog = (): void => {
        setVisibleModal(true)
    }

    return (
        <Box className={classes.sideMenu}>
            <Box>
                <Link to="/home" style={{ display: 'inline-block' }}>
                    <IconButton>
                        <Twitter color="primary" style={{ fontSize: '33px' }}/>
                    </IconButton>
                </Link>
                <nav className={classes.nav}>
                    {
                        menuItems.map(item => (
                            <div key={item.title} style={{ padding: '5px 0' }}>
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
                <Button color="primary" variant="contained" fullWidth className={classes.tweetButton}
                        onClick={handleClickOpenAddTweetDialog}>
                    Твитнуть
                </Button>
                <AddTweetDialog onClose={handleClose} visible={visibleModal}>
                    <AddTweetForm currentUser={currentUser}/>
                </AddTweetDialog>
            </Box>
            <SideMenuProfile classes={classes} currentUser={currentUser}/>
        </Box>
    )
}

export default SideMenu