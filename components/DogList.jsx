import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider} from "@mui/material"

const DogList = ({dogAvatar}) => {
  return (
    <List
    sx={{
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    }}
  >
    <ListItem>
      <ListItemAvatar>
        <Avatar
          data-testid="avatar"
          alt="Remy Sharp"
          src={dogAvatar[0]}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
      </ListItemAvatar>
      <ListItemText data-testid="name" primary="Monoso" secondary="Mathematics is the music of reason" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={dogAvatar[1]}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
      </ListItemAvatar>
      <ListItemText primary="Bosque" secondary="Numbers are fun" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={dogAvatar[2]}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary="Tipy"
        secondary="eww! numbers?"
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={dogAvatar[3]}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
      </ListItemAvatar>
      <ListItemText primary="Max" secondary="I like pizza" />
    </ListItem>
  </List>
  )
}

export default DogList
