import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';

function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 120, flexShrink: 0 }}>
      <List>
        {['Home', 'Images', 'Docs'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;