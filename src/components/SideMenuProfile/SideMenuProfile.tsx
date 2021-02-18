import React, { FC, ReactElement } from 'react'
import { Avatar, Box, MenuItem, Popover, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { popoverPaperProps, useHomeStyles } from '../../theme/theme'
import { AuthUserType } from '../../api/authApi'
import { UserActions } from '../../store/ducks/user/user'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
    currentUser: AuthUserType
}

const SideMenuProfile: FC<Props> = ({ classes, currentUser }): ReactElement | null => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleUserClose = () => {
        setAnchorEl(null)
    }

    const onLogOut = () => {
        dispatch(UserActions.logOut())
        history.push('/login')
    }

    const open = Boolean(anchorEl)

    return (
        <>
            <Box className={classes.currentUser} onClick={handleUserClick}>
                <Avatar alt={currentUser.username} src={currentUser.avatarUrl}/>
                <Box className={classes.currentUserContent}>
                    <Typography className={classes.fullTweetUser}>
                        <b style={{ marginRight: '5px' }}>{currentUser.fullname}</b>
                        <span style={{ color: 'rgb(91, 112, 131)' }}>@{currentUser.username}</span>
                    </Typography>
                </Box>
                <MoreVertIcon/>
            </Box>
            <Popover
                open={open}
                anchorEl={anchorEl}
                disableScrollLock={true}
                onClose={handleUserClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                PaperProps={{ ...popoverPaperProps }}
            >
                <MenuItem key={1} onClick={handleUserClose}>
                    Добавить другой аккаунт
                </MenuItem>
                <MenuItem key={2} onClick={onLogOut}>
                    Выйти из учетной записи
                </MenuItem>
            </Popover>
        </>
    )
}

export default SideMenuProfile