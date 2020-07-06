import {h} from 'preact' /** @jsx h */
import EmailIcon from '@material-ui/icons/Email'
import {Typography, Link, IconButton} from '@material-ui/core'

const styles = {
  footerContainer: {
    marginTop: '16px',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    display: 'flex',
    flexDirection: 'row'
  }
}

export default function Footer() {
  return (
    <footer style={styles.footerContainer}>
      <Link
        color="inherit"
        href="/legal/privacypolicy"
        style={styles.link}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center">
          privacy policy
        </Typography>
      </Link>
      <Link
        color="inherit"
        href="mailto:serpentsmiles2@gmail.com"
        style={styles.link}>
        <span>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="email the owners">
            <EmailIcon aria-hidden="true" />
          </IconButton>
        </span>
        <span>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left">
            {`Copyright © Brian Fiala ${new Date().getFullYear()}.`}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left">
            Design and engineering by Brian
          </Typography>
        </span>
      </Link>
      <Link
        color="inherit"
        href="/legal/termsofservice"
        style={styles.link}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center">
          terms of service
        </Typography>
      </Link>
    </footer>
  )
}
