import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'

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
