import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import MyVideo from '../components/MyVideo'

export default function Videos() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MyVideo />
      </Grid>
    </Grid>
  )
}
