import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/styles';
import CircleChart from  './Components/CircleChart'
import Sidebar from './Components/Shared/Sidebar'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const styles = theme => ({
  root: {
    display: 'flex',
  },

  content: {
    flexGrow: 1,
    padding: 20,
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isShow: false,
      selectedMetric: null
    }
  }

  componentDidMount() {
    this.getUser('1ce438ab-c6c2-4f98-abb6-b318bd83240c')
      .then(res => {
        this.setState({ data: res});
        this.selectedMetric();
      })
      .catch(err => console.log(err));
  }


  selectedMetric = (data, index = 0) => {
    const metric = this.state.data.metrics[index];
    this.setState(state => ({ isShow: true, selectedMetric: metric }));
  }

  getUser = async (id) => {
    const response = await fetch(`/user/${id}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        {this.state.isShow ? <Sidebar userData={this.state.data} /> : null}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.isShow ? <CircleChart data={this.state.selectedMetric} /> : null}
          <BarChart  width={700} height={500} data={this.state.data.metrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" cursor="pointer" onClick={this.selectedMetric}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="units" cursor="pointer" stackId="a" fill="#8884d8" onClick={this.selectedMetric}/>
          </BarChart>
          </main>
        </div>
    );
  }
}


 export default withStyles(styles)(App);