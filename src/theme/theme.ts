import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    typography: {
        body1: {
            fontSize: 15
        },
        body2: {
            fontSize: 13,
            color: 'rgb(91, 112, 131)'
        }
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(26, 145, 218)',
            contrastText: '#fff'
        },
        secondary: {
            main: 'rgb(26, 145, 218)'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        },
        action: {
            disabledBackground: '#8ed0f8',
            disabled: '#fff'
        }
    },
    shadows: [] as unknown as Theme['shadows'],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 15,
                height: 40,
                fontWeight: 700
            },
            textPrimary: {
                paddingLeft: 50,
                paddingRight: 20
            },
            outlinedPrimary: {
                borderColor: 'rgb(29, 161, 243)'
            }
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px'
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px'
                }
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)'
            }
        },
        MuiDialog: {
            paper: {
                borderRadius: 15
            }
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8
            }
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800
                },
                '& button': {
                    padding: 8,
                    marginRight: 20
                }
            }
        }
    }
})

export const useHomeStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    menuWrapper: {
        position: 'sticky',
        top: 0
    },
    nav: {
        display: 'inline-flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 10
    },
    navLinkButton: {
        justifyContent: 'flex-start',
        fontSize: 19,
        height: 46,
        color: '#000',
        paddingLeft: '14px',
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'rgba(29,161,241,0.1)'
        }
    },
    tweetButton: {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 28px',
        height: '47px',
        width: '80%'
    },
    rightSideWrapper: {
        position: 'sticky',
        top: 0,
        paddingTop: '10px'
    },
    inputWrapper: {
        // padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '9999px',
        backgroundColor: '#ebeef0',
        height: 40
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        marginRight: '20px',
        fontSize: '15px'
    },
    inputIcon: {
        marginLeft: 15,
        fontSize: 25,
        color: '#5b7083'
    },
    tweetsWrapper: {
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweet: {
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.03)',
            cursor: 'pointer'
        }
    },
    tweetWrapper: {
        display: 'flex'
    },
    tweetAvatar: {
        flexBasis: '49px',
        marginRight: '10px',
        '& :first-child': {
            width: '49px',
            height: '49px'
        }
    },
    tweetContent: {
        flexGrow: 1
    },
    tweetActions: {
        marginTop: '10px',
        marginLeft: '-10px',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '425px',
        '& span': {
            fontSize: '13px',
            padding: '0 8px'
        }
    },
    tweetAction: {
        display: 'flex',
        alignItems: 'center',
        '& > button': {
            width: '35px',
            height: '35px'
        }
    },
    tweetActionsComment: {
        '&:hover': {
            color: theme.palette.primary.main,
            '& > button': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    tweetActionsRetweet: {
        '&:hover': {
            color: 'rgb(23,191,99)',
            '& > button': {
                color: 'rgb(23,191,99)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    tweetActionsLike: {
        '&:hover': {
            color: 'rgb(224,36,94)',
            '& > button': {
                color: 'rgb(224,36,94)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    tweetActionsResend: {
        '&:hover': {
            color: theme.palette.primary.main,
            '& > button': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
        }
    },
    addTweetWrapper: {
        display: 'flex'
    },
    addTweetAvatarBlock: {
        flexBasis: '49px',
        marginRight: '10px',
        '& :first-child': {
            width: '49px',
            height: '49px'
        }
    },
    addTweetTextarea: {
        border: 'none',
        fontSize: '19px',
        width: '100%',
        padding: '10px 0',
        fontFamily: 'sans-serif',
        resize: 'none',
        marginBottom: '10px'
    },
    addTweetContent: {
        flexGrow: 1
    },
    addTweetActions: {
        marginLeft: '-10px',
        display: 'flex'
    },
    addTweetActionsWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    addTweetAction: {
        display: 'flex',
        alignItems: 'center',
        width: '39px',
        height: '39px',
        '& > button': {
            width: '100%',
            height: '100%'
        }
    },
    addTweetButton: {
        fontSize: '15px'
    },
    tweetsDivider: {
        backgroundColor: 'rgb(247, 249, 250)',
        height: '10px',
        borderBottom: '1px solid rgba(0,0,0,0.12)'
    },
    circularProgressBlock: {
        position: 'relative',
        '& :last-child': {
            position: 'absolute',
            top: 0,
            right: 0
        }
    },
    rightSideBlocksHeader: {
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgb(235, 238, 240)',
        '& h6': {
            fontSize: '19px',
            fontWeight: 'bold',
        }
    },
    rightSideBlocksWrapper: {
        margin: '10px 0',
        borderRadius: '16px',
        backgroundColor: '#f7f9fa',
        '& div:last-child': {
            borderBottom: 'none'
        }
    },
    actualItem: {
        padding: '10px 15px',
        borderBottom: '1px solid rgb(235, 238, 240)',
        '&:hover':{
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.03)'
        }
    },
    actualItemTitle: {
        fontWeight: 700,
        margin: '5px 0'
    },
    recommendedUser: {

    }
}))

export default theme