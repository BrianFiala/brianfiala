import {h} from 'preact' /** @jsx h */
import TrashIcon from '@material-ui/icons/DeleteOutlined'
import RefreshIcon from '@material-ui/icons/RefreshOutlined'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container, IconButton} from '@material-ui/core'

const useStyles = makeStyles(theme => {
  return {
    actionIconContainer: {
      display: 'flex',
      marginLeft: -theme.spacing(2) + 2
    }
  }
})

export default function TableActions({identifier, removeCallback, refreshCallback}) {
  const classes = useStyles(useTheme())

  return (
    <Container
      disableGutters
      className={classes.actionIconContainer}>
      <IconButton
        edge="start"
        aria-label="remove"
        color="primary"
        onClick={event => removeCallback(event, identifier)}>
        <TrashIcon />
      </IconButton>
      <IconButton
        aria-label="refresh"
        color="primary"
        onClick={event => refreshCallback(event, identifier)}>
        <RefreshIcon />
      </IconButton>
    </Container>
  )
}