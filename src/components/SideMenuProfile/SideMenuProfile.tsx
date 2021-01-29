import React, { FC, ReactElement } from 'react'
import { Avatar, Box, MenuItem, Popover, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { popoverPaperProps, useHomeStyles } from '../../theme/theme'

type Props = {
    classes: ReturnType<typeof useHomeStyles>,
}

const SideMenuProfile: FC<Props> = ({ classes }): ReactElement => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleUserClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <>
            <Box className={classes.currentUser} onClick={handleUserClick}>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                <Box className={classes.currentUserContent}>
                    <Typography className={classes.fullTweetUser}>
                        <b style={{ marginRight: '5px' }}>Nick Yung</b>
                        <span style={{ color: 'rgb(91, 112, 131)' }}>@emoface7</span>
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
                <MenuItem key={2} onClick={handleUserClose}>
                    Выйти из учетной записи
                </MenuItem>
            </Popover>
        </>
    )
}

export default SideMenuProfile