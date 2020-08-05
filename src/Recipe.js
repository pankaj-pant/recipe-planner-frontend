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


const Recipe = ({name, ingredients, selectDish, addIngredient}) => {
  
    return(
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
        </CardActions>
      </Card>
    )
}

const mapDispatchToProps = {selectDish, addIngredient}

export default connect(null, mapDispatchToProps)(Recipe)