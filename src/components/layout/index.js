import {h} from 'preact' /** @jsx h */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  viewportFrame: {
    height: '100vh',
    overflow: 'auto',
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8)
    }
  },
  contents: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    }
  }
}))

export default function Layout({toggleTheme}) {
  const classes = useStyles(useTheme())
  
  return (
    <div className={classes.root}>
      <Header toggleTheme={toggleTheme} />
      <Container
        disableGutters
        className={classes.viewportFrame}>
        <Container
          disableGutters
          className={classes.contents}>
          <Main />
          <Footer />
        </Container>
      </Container>
    </div>
  )
}