import React, {useState} from 'react';
import {connect} from 'react-redux'
import {selectDish, addIngredient} from './redux/actionCreators'
import './Recipe.css'

import image from './images/burgers.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


const Recipe = ({name, ingredients, selectDish, addIngredient}) => {
    
    const [show, setShow] = useState(false)
    const showIngredients = () => {
        console.log(`Listing ingredients for ${name}`)
        setShow(!show)
    }


    return(
/*         <div style={{border: "1px solid red"}}>
            <p onClick={showIngredients}>{name}</p>
            {show ? (<div><p>Ingredients:</p>
                <button onClick={() => addIngredient(ingredients)}>Add Ingredients to Shopping List</button>
            {ingredients.map(ingredient => <p key={ingredient.id}>{ingredient.item}</p>)}</div>) : null}
        </div> */

<Card className='recipe'>
<CardActionArea>
  <CardMedia
    height="140"
    component="img"
    image={image}
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      {name}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      ...Some description about the dish
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions >
    <IconButton aria-label="add to favorites">
        <FavoriteIcon />
    </IconButton>

    <IconButton onClick={showIngredients} style={{transform: show ? "rotate(180deg)" : ""}}>
        <ExpandMoreIcon />
    </IconButton>
</CardActions>
<Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          {ingredients.map(ingredient => <Typography key={ingredient.id}>{ingredient.item}</Typography>)}
        </CardContent>
      </Collapse>
</Card>
    )
}

const mapDispatchToProps = {selectDish, addIngredient}

export default connect(null, mapDispatchToProps)(Recipe)