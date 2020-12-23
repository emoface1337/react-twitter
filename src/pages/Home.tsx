import React, { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tweetsActions } from '../store/ducks/tweets/tweets'
import { tweetsIsLoadingSelector, tweetsSelector } from '../store/ducks/tweets/selectors'
import { RootState } from '../store'
import { useHomeStyles } from '../theme/theme'

import { Box, Container, Typography, Grid, Paper, CircularProgress } from '@material-ui/core'

import Tweet from '../components/Tweet/Tweet'
import AddTweetForm from '../components/AddTweetForm/AddTweetForm'
import SearchForm from '../components/SearchForm/SearchForm'
import SideMenu from '../components/SideMenu/SideMenu'
import ActualThemes from '../components/ActualThemes/ActualThemes'
import RecommendedUsers from '../components/RecommendedUsers/RecommendedUsers'
import { themesActions } from '../store/ducks/themes/themes'
import { Route } from 'react-router-dom'

const Home: FC = (): ReactElement => {

    const dispatch = useDispatch()
    const classes = useHomeStyles()

    const tweets = useSelector((state: RootState) => tweetsSelector(state))
    const isLoading = useSelector((state: RootState) => tweetsIsLoadingSelector(state))

    useEffect(() => {
        dispatch(tweetsActions.fetchTweets())
        dispatch(themesActions.fetchThemes())
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
                        <Route path="/home" exact>
                            {
                                isLoading
                                    ? <CircularProgress variant="indeterminate" size="3rem"/>
                                    : tweets.map(tweet =>
                                        <Tweet key={tweet._id} classes={classes} tweet={tweet}/>
                                    )
                            }
                        </Route>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.rightSideWrapper}>
                        <SearchForm classes={classes}/>
                        <ActualThemes classes={classes}/>
                        <RecommendedUsers classes={classes}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home