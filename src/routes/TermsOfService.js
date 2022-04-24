import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import termsOfService from '../assets/legal/terms-of-service.html'
import InfoItem from '../components/InfoItem'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'

const backToHome = () => {
  window.location.pathname = ''
}

export default function TermsOfService() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          title="We will never share your information with anyone without your explicit consent. Ever."
          onClick={backToHome} />
      </Grid>
      <Grid item xs={12}>
        <MyPaper elevation={10}>
          <Title color="secondary">Terms of Service</Title><br />
          <div dangerouslySetInnerHTML={{ __html: termsOfService }} />
        </MyPaper>
      </Grid>
    </Grid>
  )
}
