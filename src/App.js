import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Recipes from './Recipes'
import ShoppingList from './ShoppingList'
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              Meal Planner
            </Typography>
            <Button color="inherit" href="/">Recipes</Button>
            <Button color="inherit" href="/shoppingList">Shopping List</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/">
            <Recipes />
          </Route>
          <Route path="/shoppingList">
            <ShoppingList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;