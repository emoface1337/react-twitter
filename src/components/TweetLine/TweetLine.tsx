import React, { FC, ReactElement, useEffect } from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import Tweet from '../Tweet/Tweet'
import { useHomeStyles } from '../../theme/theme'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { tweetsSelectors } from '../../store/ducks/tweets/selectors'
import { TweetsActions } from '../../store/ducks/tweets/tweets'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const TweetLine: FC<Props> = ({ classes }): ReactElement | null => {

    const dispatch = useDispatch()

    const tweets = useSelector((state: RootState) => tweetsSelectors.tweetsSelector(state))
    const isLoading = useSelector((state: RootState) => tweetsSelectors.isTweetsLoadingSelector(state))

    useEffect(() => {
        dispatch(TweetsActions.fetchTweets())
        return () => {
            dispatch(TweetsActions.setTweets([]))
        }
    }, [dispatch])

    if (isLoading) {
        return (
            <Box className={classes.loadingWrapper}>
                <CircularProgress variant="indeterminate" size="3rem"/>
            </Box>
        )
    }
    if (tweets)
        return (
            <>
                <Box className={classes.tweetsDivider}/>
                {
                    tweets.map(tweet =>
                        <Tweet key={tweet._id} classes={classes} tweet={tweet}/>
                    )
                }
            </>
        )

    return null
}

export default TweetLine