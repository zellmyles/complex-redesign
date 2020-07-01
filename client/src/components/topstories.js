import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/card.css';
import { Grid, Image, Label, Segment } from 'semantic-ui-react'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  selector: { 
  "&:hover": {
    color: '#34c9eb',

    
  
  }
  
},

});

export default function MediaCard() {
  const classes = useStyles();

  return (
  
    
      <div className ='card-container'>
       
       
    <Card className={classes.root} style={{ backgroundColor: "#a1edcb" }}>
      
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/imgs/nba.jpeg'}
          title="Contemplative Reptile"
        />
        <CardContent>
            
          <Typography style={{fontWeight: 'bolder' }} gutterBottom variant="h5" component="h2">
            Sports
          </Typography>
          <Typography style={{ fontWeight: 'bolder' }} variant="body2" color="textPrimary" component="h1">
          Here's the 'Smart Ring' NBA Players Will Wear to Monitor COVID-19 Symptoms While in Orlando
          </Typography>

          <Typography style={{ color: 'white', fontWeight: 'bold', textShadow: '2px 1px darkgrey' }}variant="body2" color="textSecondary" component="p2">
            BY JORDAN ROSE
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.selector}  style={{ border: '2px solid white', backgroundColor: 'white' }} size="small" color="primary">
          Share
        </Button>
        <Button className={classes.selector}   style={{ border: '2px solid white', backgroundColor: 'white' }}size="small" color="primary" > 
          Learn More
        </Button>
      </CardActions>
    </Card>
{/*  */}
<Card className={classes.root} style={{ backgroundColor: "#a1d2ed" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/imgs/chance.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={{fontWeight: 'bolder' }} gutterBottom variant="h5" component="h2">
            Music
          </Typography>
          <Typography style={{ fontWeight: 'bolder' }} variant="body2" color="textPrimary" component="h1">
          J. Cole's "Snow on tha Bluff" Critiqued by Chance the Rapper, Earl Sweatshirt, and More
          </Typography>
          <Typography style={{ color: 'white', fontWeight: 'bold', textShadow: '2px 1px darkgrey' }} variant="body2" color="textSecondary" component="p2">
            BY JOE PRICE
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.selector}  style={{ border: '2px solid white', backgroundColor: 'white' }} size="small" color="primary">
          Share
        </Button>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }}size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
{/*  */}

<Card className={classes.root} style={{ backgroundColor: '#caa1ed' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/imgs/jason.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={{fontWeight: 'bolder' }} gutterBottom variant="h5" component="h2">
            Pop Culture
          </Typography>
          <Typography style={{ fontWeight: 'bolder' }} variant="body2" color="textPrimary" component="h1">
          Jason Momoa Shares First Look at 'Justice League' Snyder Cut
          </Typography>
          <Typography style={{ color: 'white', fontWeight: 'bold', textShadow: '2px 1px darkgrey' }} variant="body2" color="textSecondary" component="p2">
            BY JOE PRICE
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.selector}  style={{ border: '2px solid white', backgroundColor: 'white' }} size="small" color="primary">
          Share
        </Button>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }}size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/*  */}

    <Card className={classes.root} style={{ backgroundColor: '#eda1a1' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/imgs/bee.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={{fontWeight: 'bolder' }} gutterBottom variant="h5" component="h2">
            Music
          </Typography>
          <Typography style={{ fontWeight: 'bolder' }} variant="body2" color="textPrimary" component="h1">
          Theory That Beethoven Was Black Leads to Glorious Memes on Twitter
          </Typography>
          <Typography style={{ color: 'white', fontWeight: 'bold', textShadow: '2px 1px darkgrey' }} variant="body2" color="textSecondary" component="p2">
            BY JOE PRICE
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }} size="small" color="primary">
          Share
        </Button>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }}size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/*  */}

    <Card className={classes.root} style={{ backgroundColor: '#e9eda1' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/imgs/matthew.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={{fontWeight: 'bolder' }} gutterBottom variant="h5" component="h2">
            Style
          </Typography>
          <Typography style={{ fontWeight: 'bolder' }} variant="body2" color="textPrimary" component="h1">
          How Matthew M. Williams Became Givenchy's Creative Director
          </Typography>
          <Typography style={{ color: 'white', fontWeight: 'bold', textShadow: '2px 1px darkgrey' }} variant="body2" color="textSecondary" component="p2">
          BY MIKE DESTEFANO
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }} size="small" color="primary">
          Share
        </Button>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }}size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    {/*  */}

    <Card className={classes.root} style={{ backgroundColor: '#f5c338' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/imgs/june.jpeg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={{fontWeight: 'bolder' }} gutterBottom variant="h5" component="h2">
            Life
          </Typography>
          <Typography style={{ fontWeight: 'bolder' }} variant="body2" color="textPrimary" component="h1">
          Juneteenth: The 155-Year History of America's Other Holiday
          </Typography>
          <Typography style={{ color: 'white', fontWeight: 'bold', textShadow: '2px 1px darkgrey' }} variant="body2" color="textSecondary" component="p2">
          BY KEVIN L. CLARK
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }} size="small" color="primary">
          Share
        </Button>
        <Button className={classes.selector} style={{ border: '2px solid white', backgroundColor: 'white' }}size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      
    </Card>



    {/*  */}

    

    </div>
  );
}