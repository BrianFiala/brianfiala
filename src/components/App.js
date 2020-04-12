import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from '../themes/theme.js'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core/'
import Header from './Header'
import RouteProvider from '../routes/RouteProvider'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh'
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
    paddingTop: theme.spacing(2),
    height: 'calc(100vh - 56px)'
  },
  copyRight: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  }
}))

export default function App() {
  const classes = useStyles(theme)

  return (
    <div id="app">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <RouteProvider />
              <Container className={classes.copyRight}>
                <Footer />
              </Container>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </div>
    
  )
}