import React, { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TweetsActions } from '../store/ducks/tweets/tweets'
import { useHomeStyles } from '../theme/theme'
// import { themesActions } from '../store/ducks/themes/themes'
import { Route } from 'react-router-dom'

import { Box, Container, Typography, Grid, Paper } from '@material-ui/core'

import AddTweetForm from '../components/AddTweetForm/AddTweetForm'
import SearchForm from '../components/SearchForm/SearchForm'
import SideMenu from '../components/SideMenu/SideMenu'
// import ActualThemes from '../components/ActualThemes/ActualThemes'
import RecommendedUsers from '../components/RecommendedUsers/RecommendedUsers'
import BackButton from '../components/BackButton/BackButton'
import FullTweet from './FullTweet/FullTweet'
import TweetLine from '../components/TweetLine/TweetLine'

import { RootState } from '../store'
import { selectUser } from '../store/ducks/user/selectors'

const Home: FC = (): ReactElement => {

    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const currentUser = useSelector((state: RootState) => selectUser(state))

    useEffect(() => {
        dispatch(TweetsActions.fetchTweets())
        return () => {
            dispatch(TweetsActions.setTweets([]))
        }
    }, [dispatch])

    return (
        <Container maxWidth="lg" component="main">
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} currentUser={currentUser}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.pageStickyHeader} square variant="outlined">
                        <Route path={['/home/tweet', '/home/search']}>
                            <Paper className={classes.tweetMainWrapper} square
                                   variant="outlined">
                                <BackButton/>
                                <Typography variant="h6">Твитнуть</Typography>
                            </Paper>
                        </Route>
                        <Route path={'/home'} exact>
                            <Paper className={classes.tweetMainWrapper} square variant="outlined">
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                        </Route>
                    </Paper>
                    <Route path="/home" exact>
                        <AddTweetForm currentUser={currentUser}/>
                        <TweetLine classes={classes} divider={true}/>
                    </Route>
                    <Route path="/home/tweet/:id" component={FullTweet}/>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.rightSideWrapper}>
                        <SearchForm classes={classes}/>
                        {/*<ActualThemes classes={classes}/>*/}
                        <RecommendedUsers classes={classes}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home