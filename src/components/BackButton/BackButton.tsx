import React, { FC, ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '37px',
        height: '37px',
        fontSize: '22px',
        marginRight: '20px'
    }
}))

const BackButton: FC = (): ReactElement => {

    const classes = useStyles()
    let history = useHistory()

    const handleClick = () => {
        history.goBack()
    }

    return (
        <div>
            <IconButton className={classes.root} onClick={handleClick}>
                <ArrowBackIcon fontSize="inherit" color="primary"/>
            </IconButton>
        </div>
    )
}

export default BackButton