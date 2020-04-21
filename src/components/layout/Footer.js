import {h} from 'preact' /** @jsx h */
import {makeStyles, useTheme} from '@material-ui/styles'
import {Typography, Link} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    margin: `${theme.spacing(2)}px auto 0`
  }
}))

export default function Footer() {
  const classes = useStyles(useTheme())

  return (
    <footer className={classes.footerContainer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://brianfiala.club/">
            Brian Fiala
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}
