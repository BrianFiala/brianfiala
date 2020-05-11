import {h} from 'preact' /** @jsx h */
import message from '../assets/message.txt'
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="Home Card"
          title="Welcome to the home route"
          message={message} />
      </Grid>
    </Grid>
  )
}
