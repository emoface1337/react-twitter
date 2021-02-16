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
    divider: boolean
}

const TweetLine: FC<Props> = ({ classes, divider }): ReactElement => {

    const dispatch = useDispatch()

    const tweets = useSelector((state: RootState) => tweetsSelectors.tweetsSelector(state))
    const isLoaded = useSelector((state: RootState) => tweetsSelectors.isTweetsLoadedSelector(state))

    useEffect(() => {
        dispatch(TweetsActions.fetchTweets())
        return () => {
            dispatch(TweetsActions.setTweets([]))
        }
    }, [dispatch])

    if (!isLoaded) {
        return (
            <Box className={classes.loadingWrapper}>
                <CircularProgress variant="indeterminate" size="3rem"/>
            </Box>
        )
    }
    return (
        <>
            {
                divider ? <Box className={classes.tweetsDivider}/> : null
            }
            {
                tweets.map(tweet => <Tweet key={tweet._id} classes={classes} tweet={tweet}/>)
            }
        </>
    )
}

export default TweetLine