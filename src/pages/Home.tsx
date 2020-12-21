import React, { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tweetsActions } from '../store/ducks/tweets/tweets'
import { tweetsIsLoadingSelector, tweetsSelector } from '../store/ducks/tweets/selectors'
import { useHomeStyles } from '../theme/theme'

import { Box, Container, Typography, Grid, Paper, CircularProgress } from '@material-ui/core'

import Tweet from '../components/Tweet/Tweet'
import AddTweetForm from '../components/AddTweetForm/AddTweetForm'
import SearchForm from '../components/SearchForm/SearchForm'
import SideMenu from '../components/SideMenu/SideMenu'
import { RootState } from '../store/ducks'

const Home: FC = (): ReactElement => {

    const dispatch = useDispatch()
    const classes = useHomeStyles()

    const tweets = useSelector((state: RootState) => tweetsSelector(state))
    const isLoading = useSelector((state: RootState) => tweetsIsLoadingSelector(state))

    useEffect(() => {
        dispatch(tweetsActions.fetchTweets())
    }, [dispatch])

    return (
        <Container maxWidth="lg" component="main">
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} square variant="outlined">
                        <Paper className={classes.tweetsHeader} square variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        <AddTweetForm classes={classes}/>
                        <Box className={classes.tweetsDivider}/>
                        {
                            isLoading
                                ? <CircularProgress variant="indeterminate" size="3rem"/>
                                : tweets.map(tweet =>
                                    <Tweet key={tweet._id} classes={classes} tweet={tweet}/>
                                )
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.rightSideWrapper}>
                        <SearchForm classes={classes}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home