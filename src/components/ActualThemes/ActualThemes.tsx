import React, { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'
import { themesIsLoadedSelector, themesSelector } from '../../store/ducks/themes/selectors'

import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import { useHomeStyles } from '../../theme/theme'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const ActualThemes: FC<Props> = ({ classes }): ReactElement | null => {

    const themes = useSelector((state: RootState) => themesSelector(state))
    const isLoaded = useSelector((state: RootState) => themesIsLoadedSelector(state))

    if (!isLoaded) {
        return null
    }

    return (
        <>
            <Paper className={classes.rightSideBlocksWrapper}>
                <Box className={classes.rightSideBlocksHeader}>
                    <Typography variant="h6">Актуальные темы</Typography>
                    <Box className={classes.addTweetAction}>
                        <IconButton>
                            <SettingsOutlinedIcon style={{ fontSize: '1.5rem' }} color="primary"/>
                        </IconButton>
                    </Box>
                </Box>
                {
                    themes.map(theme => (

                        <Box className={classes.actualItem} key={theme._id}>
                            <Link to={`/home/search?q=${theme.name}`}>
                                <Typography variant="body2">Актуальные темы: Россия</Typography>
                                <Typography variant="body1" className={classes.actualItemTitle}>
                                    {theme.name}
                                </Typography>
                                <Typography variant="body2">Твитов: {theme.count}</Typography>
                            </Link>
                        </Box>

                    ))
                }
            </Paper>
        </>
    )
}

export default ActualThemes