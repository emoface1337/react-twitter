import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import Paper from '@material-ui/core/Paper'
import { Avatar, Box, IconButton, Typography } from '@material-ui/core'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'
import { useHomeStyles } from '../../theme/theme'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const Tweet: FC<Props> = ({ classes }): ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} square variant="outlined"
               component="article">
            <Box className={classes.tweetWrapper}>
                <Box className={classes.tweetAvatar}>
                    <Avatar alt="Max Verstappen"
                            src="https://i.guim.co.uk/img/media/f466735dabf1b18ac31e0f0ad751c9b3e4ba7be6/0_0_5472_3283/master/5472.jpg?width=1020&quality=85&auto=format&fit=max&s=1752e02897f98c1c6a32d6ba2131716c"/>
                </Box>
                <Box className={classes.tweetContent}>
                    <Typography>
                        <b style={{ marginRight: '5px' }}>motúznaya</b>
                        <span style={{ color: 'rgb(91, 112, 131)' }}>@La72La · 1 ч</span>
                    </Typography>
                    <Typography variant="body1">
                        посоветуйте пожалуйста что посмотреть когда хочешь выйти в окно особенно сильно
                        то бишь либо что-то грустное чтобы добить себя либо что-то
                        жизнеутверждающее/веселое
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