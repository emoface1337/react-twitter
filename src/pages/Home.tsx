import React, { FC, ReactElement } from 'react'
import { useHomeStyles } from '../theme/theme'

import { Box, Container, Typography, Grid, Paper } from '@material-ui/core'

import Tweet from '../components/Tweet/Tweet'
import AddTweetForm from '../components/AddTweetForm/AddTweetForm'
import SearchForm from '../components/SearchForm/SearchForm'
import SideMenu from '../components/SideMenu/SideMenu'

const Home: FC = (): ReactElement => {

    const classes = useHomeStyles()

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
                            Array(15).fill(1).map(() =>
                                <Tweet classes={classes}/>
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