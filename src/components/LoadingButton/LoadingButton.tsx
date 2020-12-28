import React, { FC, ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { useHomeStyles } from '../../theme/theme'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        wrapper: {
            position: 'relative'
        },
        buttonProgress: {
            color: theme.palette.primary.dark,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12
        }
    })
)

type Props = {
    handleButtonClick: () => void
    loading: boolean
    title: string
    disabled: boolean
    classesFromProps: ReturnType<typeof useHomeStyles>
}

const LoadingButton: FC<Props> = ({ handleButtonClick, loading, title, disabled, classesFromProps }): ReactElement => {

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <Button
                variant="contained"
                color="primary"
                disabled={loading || disabled}
                onClick={handleButtonClick}
                className={classesFromProps.addTweetButton}
            >
                {title}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
        </div>
    )
}

export default LoadingButton