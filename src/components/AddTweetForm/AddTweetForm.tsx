import React, { FC, FormEvent, ReactElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

import { Avatar, Box, CircularProgress, Divider, IconButton, Paper, TextareaAutosize } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined'
import { useHomeStyles } from '../../theme/theme'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import Fade from '@material-ui/core/Fade'

import { TweetsActions } from '../../store/ducks/tweets/tweets'
import LoadingButton from '../LoadingButton/LoadingButton'

import { tweetsSelectors } from '../../store/ducks/tweets/selectors'

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={0} variant="filled" {...props} />
}


// TODO:
//  1. при ошибке сохранение текста твита

const AddTweetForm: FC = (): ReactElement => {

    const classes = useHomeStyles()

    const isTweetAdding = useSelector((state: RootState) => tweetsSelectors.isTweetLoadingStatusSelector(state))
    const isTweetAddingError = useSelector((state: RootState) => tweetsSelectors.isTweetErrorStatusSelector(state))

    const maxLength: number = 280

    const dispatch = useDispatch()

    const [textareaValue, setTextareaValue] = useState('')
    const [isTextareaMaxLength, setIsTextareaMaxLength] = useState(false)

    const circularProgressValue: number = Math.ceil((textareaValue.length / maxLength) * 100)

    const handleChangeTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
        if (event.currentTarget) {
            setTextareaValue(event.currentTarget.value)
        }

        event.currentTarget.value.length === maxLength ? setIsTextareaMaxLength(true) : setIsTextareaMaxLength(false)
    }

    const handleAddTweetClick = (): void => {
        dispatch(TweetsActions.addTweet(textareaValue))
        setTextareaValue('')
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
                                                          thickness={5} size="20px"
                                                          style={{ color: `${isTextareaMaxLength ? 'red' : ''}` }}/>
                                        <CircularProgress variant="determinate" value={100} thickness={5} size="20px"
                                                          style={{ color: 'rgba(0,0,0,0.1)' }}/>
                                    </Box>
                                )
                            }
                            <Divider orientation="vertical" flexItem color="primary" style={{ margin: '0 15px' }}/>
                            <LoadingButton
                                handleButtonClick={handleAddTweetClick}
                                loading={isTweetAdding}
                                title="Твитнуть"
                                disabled={circularProgressValue === 0}
                                classesFromProps={classes}
                            />
                        </Box>
                    </Box>
                    <Fade in={isTweetAddingError} timeout={500} unmountOnExit={true}>
                        <Alert severity="error" className={classes.addTweetFormAlert}>
                            Ошибка при добавлении твита :(
                        </Alert>
                    </Fade>
                </Box>
            </Box>
        </Paper>
    )
}

export default AddTweetForm