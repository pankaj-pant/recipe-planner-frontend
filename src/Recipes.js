import React, {useState} from 'react';
import Recipe from './Recipe'
import {connect} from 'react-redux'
import './Recipes.css'
import {createRecipe} from './redux/actionCreators'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { v4 as uuidv4 } from 'uuid';

const Recipes = ({recipes, createRecipe}) => {
    const [open, setOpen] = useState(false);
    const [extraIngredients, setExtraIngredients] = useState(['input-0', 'input-1'])
    const [recipe, setRecipe] = useState({"id": uuidv4(), "dish": "", "ingredients": ["", ""]})

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setExtraIngredients(['input-0', 'input-1'])
      setRecipe({"dish": "", "ingredients": ["", ""]})
    };

    const handleSave = () => {
        console.log(recipe)
        createRecipe(recipe)
        handleClose()
    }

    const handleRecipeDish = (event) => {
        setRecipe({...recipe, "dish": event.target.value})
    }

    const handleRecipeIngredients = (index, event) => {
        let values = [...recipe.ingredients]
        values[index] = event.target.value
        setRecipe({...recipe, "ingredients": values})
    }

    const addMoreIngredients = () => {
        let newIngredient = `input-${extraIngredients.length}`
        setExtraIngredients([...extraIngredients, newIngredient])
    }



    //console.log("Recipes State", recipes)
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
                    value={recipe.dish}
                    onChange={handleRecipeDish}
                />
                 {extraIngredients.map((ingredient, index) => 
                    <TextField
                    margin="dense"
                    key={ingredient}
                    id={ingredient}
                    label="Ingredients"
                    type="string"
                    fullWidth
                    value={recipe.ingredients[index] || ''}
                    onChange={(event) => handleRecipeIngredients(index, event)}
                />)}
                </DialogContent>
                <DialogActions>
                <Button onClick={addMoreIngredients} color="primary">
                    Add more ingredients
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
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

const mapDispatchToProps = {createRecipe}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)