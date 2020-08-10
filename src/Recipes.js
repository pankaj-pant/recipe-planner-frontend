import React, {useState} from 'react';
import Recipe from './Recipe'
import {connect} from 'react-redux'
import './Recipes.css'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Recipes = ({recipes}) => {
    const [items, setItems] = useState([])
    const [open, setOpen] = useState(false);
    const [extraIngredients, setExtraIngredients] = useState(['input-0', 'input-1'])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const addMoreIngredients = () => {
        let newIngredient = `input-${extraIngredients.length}`
        setExtraIngredients([...extraIngredients, newIngredient])
    }


    const addToList = (ingredients) => {
        console.log("Add Ingredients to Shopping List button clicked")
        console.log(ingredients)
        const updatedItems = items.concat(ingredients)
        setItems(updatedItems)
        
    }

    console.log("Recipes State", recipes)
    return(
        <div>
            <h2>List of all Recipes</h2>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Add New Recipe</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="dish"
                    label="Dish name"
                    type="string"
                    fullWidth
                />
                {extraIngredients.map(ingredient => 
                    <TextField
                    margin="dense"
                    key={ingredient}
                    id={ingredient}
                    label="Ingredients"
                    type="string"
                    fullWidth
                />)}
                </DialogContent>
                <DialogActions>
                <Button onClick={addMoreIngredients} color="primary">
                    Add more ingredients
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Save
                </Button>
                </DialogActions>
            </Dialog>
            <div className="recipes">
                {recipes.map(recipe => <Recipe key={recipe.id} name={recipe.dish} id={recipe.id} recipe={recipe}/>)}
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {recipes: state.Recipes}
}

export default connect(mapStateToProps)(Recipes)