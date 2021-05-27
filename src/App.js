import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Header from 'components/Header'

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: '#09384a',
    width: '100vw',
    height: '100vh'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header/>
      <Grid container>
        <Grid item md={2}>
          <div style={{boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)', height: '100vh'}}>

          </div>
        </Grid>
        <Grid item md={10}>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
