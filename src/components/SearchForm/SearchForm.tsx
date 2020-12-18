import React, { FC, ReactElement } from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { InputBase, Paper } from '@material-ui/core'
import { useHomeStyles } from '../../theme/theme'

type Props = {
    classes: ReturnType<typeof useHomeStyles>
}

const SearchForm: FC<Props> = ({ classes }): ReactElement => {
    return (
        <Paper component="form" className={classes.inputWrapper}>
            <SearchOutlinedIcon className={classes.inputIcon}/>
            <InputBase
                className={classes.input}
                placeholder="Поиск в Твиттере"
            />
        </Paper>
    )
}

export default SearchForm