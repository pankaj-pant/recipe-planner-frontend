import React, {useState} from 'react';
import {connect} from 'react-redux'
import {selectDish, addIngredient} from './redux/actionCreators'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Recipe = ({name, ingredients, selectDish, addIngredient}) => {
    const classes = useStyles();
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

<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image="/static/images/cards/contemplative-reptile.jpg"
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
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>
    )
}

const mapDispatchToProps = {selectDish, addIngredient}

export default connect(null, mapDispatchToProps)(Recipe)