import { h } from 'preact' /** @jsx h */
import { Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}))

export default function MyPaper(props) {  
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Paper elevation={props.elevation} className={classes.paper}>{props.children}</Paper>
  )
}
