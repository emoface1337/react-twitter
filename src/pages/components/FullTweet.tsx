import React, { FC, ReactElement, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHomeStyles } from '../../theme/theme'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { tweetActions } from '../../store/ducks/tweet/tweet'

import Tweet from '../../components/Tweet/Tweet'
import { tweetIsLoadingSelector, tweetSelector } from '../../store/ducks/tweet/selectors'
import { Box, CircularProgress } from '@material-ui/core'

const FullTweet: FC = (): ReactElement | null => {

    const classes = useHomeStyles()
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
        return <Tweet classes={classes} tweet={tweet}/>

    return null
}

export default FullTweet