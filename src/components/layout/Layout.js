import { h } from 'preact' /** @jsx h */
import { Container } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/styles'
import RouteProvider from '../../routes/RouteProvider'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
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