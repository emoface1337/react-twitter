import React, { FC, useEffect } from 'react'
import { Avatar, Box, Button, CircularProgress, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@material-ui/core'
import { useHomeStyles } from '../../theme/theme'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { usersIsLoadedSelector, usersSelector } from '../../store/ducks/recommendedUsers/selectors'
import { RecommendedUsersActions } from '../../store/ducks/recommendedUsers/recommendedUsers'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const useStyles = makeStyles((theme) => ({
    primary: {
        fontWeight: 700,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    secondary: {
        color: 'rgb(91, 112, 131)'
    },
    list: {
        padding: '0',
        '& > div:last-child': {
            borderBottom: 'none',
            borderRadius: '0 0 16px 16px'
        }
    },
    listItem: {
        overflow: 'hidden',
        padding: '10px 15px !important',
        borderBottom: '1px solid rgb(235, 238, 240)',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.03)'
        }
    },
    listItemRoot: {
        padding: 0
    },
    listItemText: {
        paddingRight: '97px'
    },
    listItemAction: {
        right: '15px',
        '&:hover ! div': {
            backgroundColor: 'pink !important'
        }
    }
}))

const RecommendedUsers: FC<Props> = ({ classes }) => {

    const recommendedUsersClasses = useStyles()
    const dispatch = useDispatch()

    const users = useSelector((state: RootState) => usersSelector(state))
    const isLoaded = useSelector((state: RootState) => usersIsLoadedSelector(state))

    useEffect(() => {
        dispatch(RecommendedUsersActions.fetchUsers())
    }, [dispatch])

    if (!isLoaded) {
        return <Box className={classes.loadingWrapper}>
            <CircularProgress variant="indeterminate" size="2rem"/>
        </Box>
    }

    return (
        <Paper className={classes.rightSideBlocksWrapper}>
            <Box className={classes.rightSideBlocksHeader}>
                <Typography variant="h6">Кого читать</Typography>
            </Box>
            <List className={recommendedUsersClasses.list} component="div">
                {
                    users.map(user =>
                        <ListItem ContainerComponent="div" key={user._id}
                                  classes={{
                                      container: recommendedUsersClasses.listItem,
                                      root: recommendedUsersClasses.listItemRoot
                                  }} disableGutters={true}>
                            <ListItemAvatar>
                                <Avatar style={{ width: '49px', height: '49px' }}
                                        alt={user.fullname}
                                        src={user.avatarUrl}
                                >
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user.fullname} secondary={`@${user.username}`}
                                          classes={{
                                              primary: recommendedUsersClasses.primary,
                                              secondary: recommendedUsersClasses.secondary
                                          }}
                                          className={recommendedUsersClasses.listItemText}
                            />
                            <ListItemSecondaryAction className={recommendedUsersClasses.listItemAction}>
                                <Button color="primary" variant="outlined" style={{ width: '82px', height: '39px' }}>
                                    Читать
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }
            </List>
        </Paper>
    )
}

export default RecommendedUsers