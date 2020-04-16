import { h } from 'preact' /** @jsx h */
import { Typography, Button } from '@material-ui/core'
import Title from './Title'
import MyPaper from './MyPaper'

export default function InfoItem({ identifier, title, message }) {
  return (
    <MyPaper>
      <Title>{identifier}</Title><br />
      <Typography variant="h3">{title}</Typography><br />
      <Typography variant="body2">{message}</Typography>
      <Button color="primary" size="large">OKAY</Button>
    </MyPaper>
  )
}
