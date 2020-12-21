import React, { FC } from 'react'
import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import { useHomeStyles } from '../../theme/theme'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const ActualThemes: FC<Props> = ({ classes }) => {
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
                    Array(5).fill(0).map(() =>
                        <Box className={classes.actualItem}>
                            <Typography variant="body2">Актуальные темы: Россия</Typography>
                            <Typography variant="body1" className={classes.actualItemTitle}>
                                Навального
                            </Typography>
                            <Typography variant="body2">Твитов: 29,7 тыс.</Typography>
                        </Box>
                    )
                }
            </Paper>
        </>
    )
}

export default ActualThemes