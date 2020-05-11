import {h} from 'preact' /** @jsx h */
import message from '../assets/message.txt'
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

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
