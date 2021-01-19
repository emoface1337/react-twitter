import React, { FC, ReactElement, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHomeStyles } from '../../theme/theme'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { tweetActions } from '../../store/ducks/tweet/tweet'

import { tweetIsLoadingSelector, tweetSelector } from '../../store/ducks/tweet/selectors'
import { Avatar, Box, CircularProgress, Typography } from '@material-ui/core'
import classNames from 'classnames'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useFullTweetClasses = makeStyles(() => ({
    tweetWrapper: {
        display: 'flex',
        flexDirection: 'column'
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
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} square variant="outlined"
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
                            {tweet.text}
                        </Box>
                        <Box className={fullTweetClasses.tweetInfo}>
                            <Typography variant={'body2'}>
                                12:51 AM · 8 янв. 2021 г.
                            </Typography>
                            <span className={fullTweetClasses.tweetInfoSeparator}>·</span>
                            <Typography variant={'body2'}>
                                Twitter for iPhone
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        )

    return null
}

export default FullTweet