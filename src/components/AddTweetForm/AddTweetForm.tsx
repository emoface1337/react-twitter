import React, { FC, FormEvent, ReactElement, useState } from 'react'

import { Avatar, Box, Button, CircularProgress, Divider, IconButton, Paper, TextareaAutosize } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined'
import { useHomeStyles } from '../../theme/theme'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const AddTweetForm: FC<Props> = ({ classes }): ReactElement => {

    const maxLength: number = 280

    const [textareaValue, setTextareaValue] = useState('')
    const [isTextareaMaxLength, setIsTextareaMaxLength] = useState(false)

    const circularProgressValue: number = Math.ceil((textareaValue.length / maxLength) * 100)

    const handleChangeTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
        if (event.currentTarget) {
            setTextareaValue(event.currentTarget.value)
        }

        event.currentTarget.value.length === maxLength ? setIsTextareaMaxLength(true) : setIsTextareaMaxLength(false)
    }

    return (
        <Paper className={classes.tweetsHeader} square variant="outlined">
            <Box className={classes.addTweetWrapper}>
                <Box className={classes.addTweetAvatarBlock}>
                    <Avatar alt="Max Verstappen"
                            src="https://i.guim.co.uk/img/media/f466735dabf1b18ac31e0f0ad751c9b3e4ba7be6/0_0_5472_3283/master/5472.jpg?width=1020&quality=85&auto=format&fit=max&s=1752e02897f98c1c6a32d6ba2131716c"/>
                </Box>
                <Box className={classes.addTweetContent}>
                    <TextareaAutosize
                        onChange={handleChangeTextarea}
                        value={textareaValue}
                        placeholder="Что происходит?"
                        className={classes.addTweetTextarea}
                        maxLength={maxLength}
                    />
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
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            {
                                textareaValue &&
                                (
                                    <Box className={classes.circularProgressBlock}>
                                        <CircularProgress variant="determinate" value={circularProgressValue}
                                                          thickness={5} size="20px" style={{ color: `${isTextareaMaxLength ? 'red' : ''}`}}/>
                                        <CircularProgress variant="determinate" value={100} thickness={5} size="20px"
                                                          style={{ color: 'rgba(0,0,0,0.1)' }}/>
                                    </Box>
                                )
                            }
                            <Divider orientation="vertical" flexItem color="primary" style={{ margin: '0 15px' }}/>
                            <Button disabled={circularProgressValue === 0} color="primary" variant="contained"
                                    className={classes.addTweetButton}>
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