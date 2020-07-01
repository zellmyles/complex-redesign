import React from 'react';
import '../css/home.css'
import Nav from './nav.js';
import Footer from './footer.js';
import Top from './topstories.js';
import { createMuiTheme } from '@material-ui/core/styles';
import Stats from './stats.js';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Music from './musicmodal.js';
import Sports from './discover.js';
import { useState } from 'react';
const end = {
    border: '3px solid black',
  }
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#f   ff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


export default class Home extends React.Component{
    render(){
    return(
        <div>
        <div className='container'>
            <Nav />

            <div className='article-container'>

        <h1 id='main-header'> The Enduring Joy of Run the Jewels</h1>
        <p1 id='sub-header'> MUSIC |    BY JESSICA MCKINNEY</p1>
        <br />
            <div className='img-container'>
            <img id='main-img' src='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/z0x23tnnhtpr6owbib0e/rtj-by-tim-saccenti-2 ' />
            </div>
            <Stats />
            
            </div>
            <hr style={end}/>
           
        <div className='top-container2'>
            <div className='top-header'>

            <h1 id='top'>Top Stories</h1>

            </div>
      


        </div>
        
        <div className='top-container'>

        <Top />
        </div>
        </div>

            <div className='outer-continaer'>

            <div className='inner-container__box'>
                <div id='lineup-logo'>
                    <div id='green-border__container'>
            <img className="navLogo2" src='./imgs/complex_nbiphu.jpg'></img><h1 className='title'> Discover</h1>
            </div>
                </div>

                <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <Sports />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Music />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
            </div>


            </div>


            <Footer />
        </div>
    )
}
}