import {h} from 'preact' /** @jsx h */
import {Router} from 'preact-router'
import {StoreProvider} from '../../api/StoreProvider'
import NotFound from '../../routes/NotFound'
import Weather from '../../routes/Weather'
import Stocks from '../../routes/Stocks'
import Home from '../../routes/Home'
import Header from './Header'
import Footer from './Footer'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: `calc(100vh - ${theme.spacing(7)}px)`,
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: `calc(100vh - ${theme.spacing(8)}px)`,
      padding: theme.spacing(3)
    }
  },
  footerContainer: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}))

export default function Layout({toggleTheme}) {
  const classes = useStyles(useTheme())
  
  return (
    <div className={classes.root}>
      <StoreProvider>
        <Header toggleTheme={toggleTheme} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Router>
              <Home path="/" />
              <Weather path="/weather" />
              <Stocks path="/stocks" />
              <NotFound default />
            </Router>
            <Footer />
          </Container>
        </main>
      </StoreProvider>
    </div>
  )
}