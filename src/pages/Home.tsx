import React, { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TweetsActions } from '../store/ducks/tweets/tweets'
import { RootState } from '../store'
import { useHomeStyles } from '../theme/theme'
import { themesActions } from '../store/ducks/themes/themes'
import { Route } from 'react-router-dom'
import { tweetsSelectors } from '../store/ducks/tweets/selectors'

import { Box, Container, Typography, Grid, Paper, CircularProgress } from '@material-ui/core'

import Tweet from '../components/Tweet/Tweet'
import AddTweetForm from '../components/AddTweetForm/AddTweetForm'
import SearchForm from '../components/SearchForm/SearchForm'
import SideMenu from '../components/SideMenu/SideMenu'
import ActualThemes from '../components/ActualThemes/ActualThemes'
import RecommendedUsers from '../components/RecommendedUsers/RecommendedUsers'
import BackButton from '../components/BackButton/BackButton'
import FullTweet from './components/FullTweet'


const Home: FC = (): ReactElement => {

    const dispatch = useDispatch()
    const classes = useHomeStyles()

    const tweets = useSelector((state: RootState) => tweetsSelectors.tweetsSelector(state))
    const isLoading = useSelector((state: RootState) => tweetsSelectors.isTweetsLoadingSelector(state))

    useEffect(() => {
        dispatch(TweetsActions.fetchTweets())
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
                        <Route path={['/home/tweet', '/home/search']}>
                            <Paper className={classes.tweetsHeader} square variant="outlined">
                                <BackButton/>
                                <Typography variant="h6">Твитнуть</Typography>
                            </Paper>
                        </Route>
                        <Route path={'/home'} exact>
                            <Paper className={classes.tweetsHeader} square variant="outlined">
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                            <AddTweetForm/>
                            <Box className={classes.tweetsDivider}/>
                        </Route>
                    </Paper>
                    <Route path="/home" exact>
                        {
                            isLoading
                                ?
                                <Box className={classes.loadingWrapper}>
                                    <CircularProgress variant="indeterminate" size="3rem"/>
                                </Box>
                                : tweets.map(tweet =>
                                    <Tweet key={tweet._id} classes={classes} tweet={tweet}/>
                                )
                        }
                    </Route>
                    <Route path="/home/tweet/:id" component={FullTweet}/>
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