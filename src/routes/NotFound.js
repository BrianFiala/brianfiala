import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'

export default function NotFound() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="404"
          title="Page Not Found"
          message={message} />
      </Grid>
    </Grid>
  )
}
