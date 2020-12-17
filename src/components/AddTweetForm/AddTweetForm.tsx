import React, { FC, ReactElement } from 'react'
import { Avatar, Box, Button, CircularProgress, Divider, IconButton, Paper, TextareaAutosize } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined'
import { useHomeStyles } from '../../pages/Home'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const AddTweetForm: FC<Props> = ({ classes }): ReactElement => {
    return (
        <Paper className={classes.tweetsHeader} square variant="outlined">
            <Box className={classes.addTweetWrapper}>
                <Box className={classes.addTweetAvatar}>
                    <Avatar alt="Max Verstappen"
                            src="https://i.guim.co.uk/img/media/f466735dabf1b18ac31e0f0ad751c9b3e4ba7be6/0_0_5472_3283/master/5472.jpg?width=1020&quality=85&auto=format&fit=max&s=1752e02897f98c1c6a32d6ba2131716c"/>
                </Box>
                <Box className={classes.addTweetContent}>
                    <TextareaAutosize placeholder="Что происходит?"
                                      className={classes.addTweetTextarea}/>
                    <Box className={classes.addTweetActionsWrapper}>
                        <Box className={classes.addTweetActions}>
                            <Box className={classes.addTweetAction}>
                                <IconButton>
                                    <ImageOutlinedIcon style={{ fontSize: '1.5rem' }} color="primary"/>
                                </IconButton>
                            </Box>
                            <Box className={classes.addTweetAction}>
                                <IconButton>
                                    <SentimentVerySatisfiedOutlinedIcon style={{ fontSize: '1.5rem' }} color="primary"/>
                                </IconButton>
                            </Box>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center'}}>
                            <CircularProgress variant="determinate" value={25} color="primary" size="20px"/>
                            <Divider orientation="vertical" flexItem color="primary" style={{margin: '0 15px'}}/>
                            <Button color="primary" variant="contained" className={classes.addTweetButton}>
                                Твитнуть
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default AddTweetForm