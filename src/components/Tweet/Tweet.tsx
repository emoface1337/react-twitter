import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'
import { useHistory, useLocation } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@material-ui/core'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { useHomeStyles } from '../../theme/theme'
import { TweetType } from '../../api/tweetsApi'
import { dateFormatter } from '../../utils/dateFormatter'

type Props = {
    classes: ReturnType<typeof useHomeStyles>,
    tweet: TweetType
}

const Tweet: FC<Props> = ({ classes, tweet }): ReactElement => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const history = useHistory()
    const currentPath = useLocation()

    const handleTweetClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        history.push(currentPath.pathname + `/tweet/${tweet._id}`)
    }

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setAnchorEl(null)
    }

    return (
        <Box onClick={handleTweetClick}>
            <Paper className={classNames(classes.tweet, classes.tweetMainWrapper)} square variant="outlined"
                   component="article">
                <Box className={classes.tweetWrapper}>
                    <Box className={classes.tweetAvatar}>
                        <Avatar alt={tweet.user.fullname}
                                src={tweet.user.avatarUrl}/>
                    </Box>
                    <Box className={classes.tweetContent}>
                        <Box className={classes.tweetHeader}>
                            <Typography>
                                <b style={{ marginRight: '5px' }}>{tweet.user.fullname}</b>
                                <span
                                    style={{ color: 'rgb(91, 112, 131)' }}>@{tweet.user.username} · {dateFormatter(new Date(tweet.createdAt))}</span>
                            </Typography>
                            <div>
                                <IconButton style={{ transform: 'rotate(90deg)' }}
                                            onClick={handleMenuClick}
                                            size={'small'}
                                            disableRipple={true}
                                >
                                    <MoreVertIcon/>
                                </IconButton>
                                <Menu
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    disableScrollLock={true}
                                    onClose={handleMenuClose}
                                    PaperProps={{
                                        style: {
                                            width: '150px',
                                            boxShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px'
                                        }
                                    }}
                                >
                                    <MenuItem key={1} onClick={handleMenuClose}>
                                        Редактировать
                                    </MenuItem>
                                    <MenuItem key={2} onClick={handleMenuClose}>
                                        Удалить
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Typography variant="body1" className={classes.tweetText}>
                            {tweet.text}
                        </Typography>
                        <Box className={classes.tweetActions}>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsComment)}>
                                <IconButton>
                                    <ModeCommentOutlinedIcon style={{ fontSize: '1.25rem' }}/>
                                </IconButton>
                                <span>12</span>
                            </Box>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsRetweet)}>
                                <IconButton>
                                    <RepeatOutlinedIcon style={{ fontSize: '1.25rem' }}/>
                                </IconButton>
                                <span>25</span>
                            </Box>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsLike)}>
                                <IconButton>
                                    <FavoriteBorderOutlinedIcon style={{ fontSize: '1.25rem' }}/>
                                </IconButton>
                                <span>5</span>
                            </Box>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsResend)}>
                                <IconButton>
                                    <PublishOutlinedIcon style={{ fontSize: '1.25rem' }}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Tweet