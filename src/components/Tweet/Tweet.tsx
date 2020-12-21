import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import Paper from '@material-ui/core/Paper'
import { Avatar, Box, IconButton, Typography } from '@material-ui/core'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'
import { useHomeStyles } from '../../theme/theme'
import { TweetType } from '../../api/tweetApi'

type Props = {
    classes: ReturnType<typeof useHomeStyles>,
    tweet: TweetType
}

const Tweet: FC<Props> = ({ classes, tweet }): ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} square variant="outlined"
               component="article">
            <Box className={classes.tweetWrapper}>
                <Box className={classes.tweetAvatar}>
                    <Avatar alt={tweet.user.fullname}
                            src={tweet.user.avatarUrl}/>
                </Box>
                <Box className={classes.tweetContent}>
                    <Typography>
                        <b style={{ marginRight: '5px' }}>{tweet.user.fullname}</b>
                        <span style={{ color: 'rgb(91, 112, 131)' }}>@{tweet.user.username} · 1 ч</span>
                    </Typography>
                    <Typography variant="body1">
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
    )
}

export default Tweet