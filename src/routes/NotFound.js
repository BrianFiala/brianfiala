import { Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'

export default function NotFound() {  
  return (
    <Grid container spacing={3}>
      {/* Info Card */}
      <Grid item>
        <Card raised>
          <CardContent>
            <Typography variant="h6">
            404!
            </Typography><br />
            <Typography variant="h3">
            Page Not Found
            </Typography><br />
            <Typography variant="body2">
            Fruitcake brownie donut dessert. Macaroon cotton candy dessert cookie jelly-o chocolate wafer sesame snaps. Icing sugar plum jelly jelly beans jujubes halvah jelly caramels jujubes. Carrot cake fruitcake sweet roll cookie. Jelly beans chocolate bar pie ice cream candy canes jelly-o sugar plum. Pastry gingerbread sweet roll chupa chups. Toffee lemon drops candy canes. Donut ice cream sweet roll pastry liquorice topping jelly-o. Pastry sugar plum dragée. Lemon drops chupa chups cheesecake sweet pastry fruitcake cookie cookie.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">OKAY</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
