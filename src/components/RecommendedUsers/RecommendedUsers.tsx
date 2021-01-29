import React, { FC } from 'react'
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@material-ui/core'
import { useHomeStyles } from '../../theme/theme'
import { makeStyles } from '@material-ui/core/styles'

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
        '& div:last-child': {
            '& > div:first-child': {
                borderBottom: 'none',
                borderRadius: '0 0 16px 16px'
            }
        }
    },
    listItem: {
        padding: '10px 15px',
        borderBottom: '1px solid rgb(235, 238, 240)',
        '&:hover':{
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.03)'
        }
    },
    listItemText: {
        paddingRight: '97px'
    }
}))

const RecommendedUsers: FC<Props> = ({ classes }) => {

    const recommendedUsersClasses = useStyles()

    return (
        <Paper className={classes.rightSideBlocksWrapper}>
            <Box className={classes.rightSideBlocksHeader}>
                <Typography variant="h6">Кого читать</Typography>
            </Box>
            <List className={recommendedUsersClasses.list} component="div">
                {
                    Array(3).fill(0).map(() =>
                        <ListItem className={recommendedUsersClasses.listItem} ContainerComponent="div" key={Math.random()}>
                            <ListItemAvatar>
                                <Avatar style={{ width: '49px', height: '49px' }}>
                                    <img
                                        src="https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2020/03/19084551/Max-Verstappen.jpg"
                                        alt="Max"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Smoky Moddddd ddddddddddddddddd" secondary="@SmokyMo46"
                                          classes={{
                                              primary: recommendedUsersClasses.primary,
                                              secondary: recommendedUsersClasses.secondary
                                          }}
                                          className={recommendedUsersClasses.listItemText}
                            />
                            <ListItemSecondaryAction style={{ right: '15px' }}>
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