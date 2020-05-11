import {h} from 'preact' /** @jsx h */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '100%'
  },
  contents: {
    minHeight: 'calc(100% - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    }
  },
  appBarSpacer: theme.mixins.toolbar
}))

export default function Layout({toggleTheme}) {
  const classes = useStyles(useTheme())

  return (
    <div className={classes.root}>
      <Header toggleTheme={toggleTheme} />
      <Container disableGutters>
        <div className={classes.appBarSpacer} />
        <Container
          disableGutters
          className={classes.contents}>
          <Container disableGutters>
            <Main />
          </Container>
          <Footer />
        </Container>
      </Container>
    </div>
  )
}