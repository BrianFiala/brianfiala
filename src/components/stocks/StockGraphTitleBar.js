import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {useStore} from '../../api/StoreProvider'
import Title from '../Title'
import SettingsIcon from '@material-ui/icons/Settings'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container, Divider, FormControl, FormControlLabel, FormLabel, IconButton, Menu, MenuItem, Radio, RadioGroup } from '@material-ui/core'

const useStyles = makeStyles(theme => {
  return {
    titleBar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    iconButton: {
      margin: `${-theme.spacing(1)}px ${-theme.spacing(2) + 4}px ${-theme.spacing(1)}px ${-theme.spacing(1)}px`
    },
    menu: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    legend: {
      marginBottom: theme.spacing(1)
    },
    field: {
      marginRight: 0
    }
  }
})

export default function StockGraphTitleBar() {
  const classes = useStyles(useTheme())
  const [anchorEl, setAnchorEl] = useState(null)
  const {timeframe, setTimeframe, type, setType} = useStore()

  function handleClose() {
    setAnchorEl(null)
  }

  function handleTimeframeChange() {
    setTimeframe(event.target.value)
    handleClose()
  }

  function handleTypeChange() {
    setType(event.target.value)
    handleClose()
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Container
      disableGutters
      className={classes.titleBar}>
      <Title>Timeseries</Title>
      <IconButton
        aria-label="settings"
        aria-controls="settings"
        aria-haspopup="true"
        color="primary"
        className={classes.iconButton}
        onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Menu
        id="graph-settings"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <Container disableGutters className={classes.menu}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.legend}>Timeframe</FormLabel>
            <RadioGroup aria-label="timeframe" name="timeframe" value={timeframe} onChange={handleTimeframeChange}>
              <FormControlLabel className={classes.field} value="week" control={<Radio color="primary" />} label="Week" />
              <FormControlLabel className={classes.field} value="month" control={<Radio color="primary" />} label="Month" />
              <FormControlLabel className={classes.field} value="year" control={<Radio color="primary" />} label="Year" />
              <FormControlLabel className={classes.field} value="threeYears" control={<Radio color="primary" />} label="Three Years" />
            </RadioGroup>
          </FormControl>
          <Divider className={classes.divider} />
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.legend}>Graph Type</FormLabel>
            <RadioGroup aria-label="graph type" name="type" value={type} onChange={handleTypeChange}>
              <FormControlLabel className={classes.field} value="actual" control={<Radio color="primary" />} label="Actual" />
              <FormControlLabel className={classes.field} value="relative" control={<Radio color="primary" />} label="Relative" />
            </RadioGroup>
          </FormControl>
        </Container>
      </Menu>
    </Container>
  )
}