import {h} from 'preact' /** @jsx h */
import {Typography} from '@material-ui/core'

export default function Title({children}) {
  return (
    <Typography
      component="h2"
      variant="h6"
      color="primary">
      {children}
    </Typography>
  )
}