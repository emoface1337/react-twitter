import React, { FC, ReactElement, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Linkify from 'react-linkify'

import { useHomeStyles } from '../../theme/theme'
import { RootState } from '../../store'

import { tweetActions } from '../../store/ducks/tweet/tweet'
import { tweetIsLoadingSelector, tweetSelector } from '../../store/ducks/tweet/selectors'

import { Avatar, Box, CircularProgress, IconButton, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'
import classNames from 'classnames'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'
import TweetLine from '../../components/TweetLine/TweetLine'

const useFullTweetClasses = makeStyles(() => ({
    tweetWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px'
    },
    tweetText: {
        fontSize: '23px',
        lineHeight: '30.1833px',
        wordBreak: 'break-all'
    },
    tweetInfo: {
        margin: '15px 0',
        display: 'flex',
        fontSize: 15
    },
    tweetInfoSeparator: {
        padding: '0 5px'
    },
    fullTweet: {
        border: '1px solid #ebeef0',
        borderTop: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px 5px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweetCounters: {
        padding: '15px 5px',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgb(235, 238, 240)',
        borderBottom: '1px solid rgb(235, 238, 240)',
        '& div:not(:last-child)': {
            marginRight: '20px'
        }
    },
    tweetCounter: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            '& > p': {
                textDecoration: 'underline'
            }
        }
    },
    tweetCounterNumber: {
        fontWeight: 'bold',
        marginRight: '4px'
    },
    tweetActions: {
        padding: '5px 0 0 0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& > div': {
            width: '38.5px',
            height: '38.5px',
            '& > button': {
                width: '100%',
                height: '100%'
            }
        }
    }

}))

const FullTweet: FC = (): ReactElement | null => {

    const classes = useHomeStyles()
    const fullTweetClasses = useFullTweetClasses()

    const params: { id: string } = useParams()
    const dispatch = useDispatch()

    const tweet = useSelector((state: RootState) => tweetSelector(state))
    const isLoading = useSelector((state: RootState) => tweetIsLoadingSelector(state))

    const { id } = params

    useEffect(() => {
        if (id) {
            dispatch(tweetActions.fetchTweet(id))
        }
        return () => {
            dispatch(tweetActions.setTweet(undefined))
        }
    }, [dispatch, id])

    if (isLoading)
        return (
            <Box className={classes.loadingWrapper}>
                <CircularProgress variant="indeterminate" size="3rem"/>
            </Box>
        )

    if (tweet)
        return (
            <>
                <Paper className={fullTweetClasses.fullTweet} square variant="outlined"
                       component="article">
                    <Box className={fullTweetClasses.tweetWrapper}>
                        <Box className={fullTweetClasses.header}>
                            <Box className={classes.tweetAvatar}>
                                <Avatar alt={tweet.user.fullname}
                                        src={tweet.user.avatarUrl}/>
                            </Box>
                            <Typography className={classes.fullTweetUser}>
                                <b style={{ marginRight: '5px' }}>{tweet.user.fullname}</b>
                                <span style={{ color: 'rgb(91, 112, 131)' }}>@{tweet.user.username}</span>
                            </Typography>
                        </Box>
                        <Box className={classes.tweetContent}>
                            <Box className={fullTweetClasses.tweetText}>
                                <Linkify>{tweet.text}</Linkify>
                            </Box>
                            <Box className={fullTweetClasses.tweetInfo}>
                                <Typography variant={'body2'}>
                                    {format(new Date(tweet.createdAt), 'H:mm', { locale: ru })} · {format(new Date(tweet.createdAt), 'dd MMM, yyyy г.', { locale: ru })}
                                </Typography>
                                <span className={fullTweetClasses.tweetInfoSeparator}>·</span>
                                <Typography variant={'body2'}>
                                    Twitter for iPhone
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={fullTweetClasses.tweetCounters}>
                            <Box className={fullTweetClasses.tweetCounter}>
                                <span className={fullTweetClasses.tweetCounterNumber}>274</span>
                                <Typography variant={'body2'}>
                                    Retweets
                                </Typography>
                            </Box>
                            <Box className={fullTweetClasses.tweetCounter}>
                                <span className={fullTweetClasses.tweetCounterNumber}>274</span>
                                <Typography variant={'body2'}>
                                    Quote Tweets
                                </Typography>
                            </Box>
                            <Box className={fullTweetClasses.tweetCounter}>
                                <span className={fullTweetClasses.tweetCounterNumber}>274</span>
                                <Typography variant={'body2'}>
                                    Likes
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={fullTweetClasses.tweetActions}>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsComment)}>
                                <IconButton>
                                    <ModeCommentOutlinedIcon style={{ fontSize: '22.5px' }}/>
                                </IconButton>
                            </Box>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsRetweet)}>
                                <IconButton>
                                    <RepeatOutlinedIcon style={{ fontSize: '22.5px' }}/>
                                </IconButton>
                            </Box>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsLike)}>
                                <IconButton>
                                    <FavoriteBorderOutlinedIcon style={{ fontSize: '22.5px' }}/>
                                </IconButton>
                            </Box>
                            <Box className={classNames(classes.tweetAction, classes.tweetActionsResend)}>
                                <IconButton>
                                    <PublishOutlinedIcon style={{ fontSize: '22.5px' }}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                <TweetLine classes={classes} divider={false}/>
            </>
        )

    return null
}

export default FullTweet