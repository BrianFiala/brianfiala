import { makeStyles, useTheme } from '@material-ui/styles'
import { Container } from '@material-ui/core/'
import Header from './Header'
import RouteProvider from '../routes/RouteProvider'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}))

export default function Layout() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <RouteProvider />
          <Footer />
        </Container>
      </main>
    </div>
  )
}