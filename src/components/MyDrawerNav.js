import { List, Link, ListItem, ListItemText } from '@material-ui/core'

/**
 * 
 * @param {function} callback 
 */
export default function MyDrawerNav({callBack}) {
  return (
    <div>
      <List>
        <Link href="/">
          <ListItem button key="Home" onClick={callBack}>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/weather">
          <ListItem button key="Weather" onClick={callBack}>
            <ListItemText primary="Weather" />
          </ListItem>
        </Link>
        <Link href="/stocks">
          <ListItem button key="Stocks" onClick={callBack}>
            <ListItemText primary="Stocks" />
          </ListItem>
        </Link>
      </List>
    </div>
  )
}