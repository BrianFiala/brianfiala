import { Typography, Button } from '@material-ui/core'
import Title from './Title'

export default function InfoItem({ identifier, title, message }) {
  return (
    <>
      <Title>{identifier}</Title><br />
      <Typography variant="h3">{title}</Typography><br />
      <Typography variant="body2">{message}</Typography>
      <Button color="primary" size="large">OKAY</Button>
    </>
  )
}
