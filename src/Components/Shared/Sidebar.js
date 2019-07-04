import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';


const styles = theme => ({
  
  appBar: {
    width: 'calc(100% - 240px)',
    marginLeft: 240,
  },

  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'purple',
    width: 100,
    height: 100,
  },
});


class Sidebar extends React.Component {


 getInitials = (name) => {
    return  name.split(" ").map((n)=>n[0]).join("");
 }
 
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} >
            <Grid container justify="center" alignItems="center">
              <Avatar className={classes.purpleAvatar}>{this.getInitials(this.props.userData.name)}</Avatar>
            </Grid>
            <Typography paragraph={true} align="center">
              {this.props.userData.name}
            </Typography>
          </div>
          <Divider />
          <List>
              <ListItem button>
                <ListItemText primary={`Saldo: ${this.props.userData.saldo}`} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={`Sent: ${this.props.userData.sent}`} /> 
              </ListItem>
              <ListItem button>
                <ListItemText primary={`Due: ${this.props.userData.overdue}`} />
              </ListItem>
            
          </List>
        </Drawer>
        
        </div>
    );
  }
}


 export default withStyles(styles)(Sidebar);