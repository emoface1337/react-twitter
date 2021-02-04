import React, { FC, ReactElement } from 'react'
import { Popover } from '@material-ui/core'
import 'emoji-mart/css/emoji-mart.css'
import { EmojiData, Picker } from 'emoji-mart'
import { popoverPaperProps } from '../../theme/theme'

type Props = {
    open: boolean
    handlePopoverClose: (event: React.MouseEvent<HTMLButtonElement>) => void
    anchorEl: any
    addEmojiToTextArea: (emoji: EmojiData) => void
}

const EmojiPicker: FC<Props> = ({ open, handlePopoverClose, anchorEl, addEmojiToTextArea }): ReactElement => {

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            disableScrollLock={true}
            onClose={handlePopoverClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            PaperProps={{ ...popoverPaperProps }}
        >
            <Picker set='twitter' onSelect={emoji => addEmojiToTextArea(emoji)}/>
        </Popover>
    )
}

export default EmojiPicker