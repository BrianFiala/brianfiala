import {h} from 'preact' /** @jsx h */
import {Paper} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/styles'

const useStyles = makeStyles((theme, scrollable) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: scrollable ? 'auto' : 'visible',
    flexDirection: 'column',
    height: '100%'
  }
}))

export default function MyPaper({elevation, children, scrollable}) {  
  const classes = useStyles(useTheme(), scrollable)

  return (
    <Paper elevation={elevation} className={classes.paper}>{children}</Paper>
  )
}
