import React from 'react';
import '../css/shoes.css';
import Nav from '../components/nav';
import Carousel from './slider';
import Footer from '../components/footer';

class Shoes extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                
​
                <h1 id='main-header'> LATEST IN MUSIC</h1>
               
                 <div className="headArticle">
                    <div className="topArticles">
                        <div className="left">
                           <img className="kithSneaker" src="../imgs/rappers.jpg" alt="album collection"></img> 
                             <p><span class="articleBy"> </span> </p>
                             <a href="https://www.wallpaperup.com/894517/rap_rapper_hip_hop_urban_gangsta.html"><p>Album Collage</p></a>
                         </div> 
                         </div>
                         </div>
                        {/* <div className="right">
                            <img className="georgiaTech" src="../imgs/georgiaTech.jpeg" alt="Georgia Tech"></img>
                            <p><span className="adChoiceSpan"><img className="adChoice" src="../imgs/adChoicespng.png" alt="Ad Choices" />AdChoices </span>Apply online now and earn a spot in our Sneaker Scholarship Program for an opportunity to recieve a full paid scholarship to Georga Institute of Technology</p>
                        </div> */}
                    {/* // </div> */} 
                {/* // </div> */}
               
                <div className="box">
                    <div className="blueBox">
                        <img className="blueShoe" src="../imgs/chance.jpg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy"> Chance The Rapper |</span>BY Aleia Woods</p>
                        <a href="https://www.xxlmag.com/chance-the-rapper-j-cole-snow-on-tha-bluff-responds/"><p className="descriptionP"> Chance The Rapper Appears to respond to J Cole New Song</p></a>
                    </div>
                    <div className="multiBox">
                        <img className="multiShoe" src="../imgs/roddyrich.jpg" alt="Multi Colored Shoe"/>
                        <p><span className="articleBy"> Roddy Rich |</span>BY Chris Parsons</p>
                        <a href="https://www.billboard.com/articles/columns/hip-hop/8545512/roddy-ricch-please-excuse-me-for-being-antisocial-interview"><p className="descriptionP"> How Roddy Rich went from Compton War Baby to Grammy Nominated Star</p></a>
                    </div>
                    <div className="redBox">
                        <img className="redShoe" src="../imgs/nipsey.jpg" alt="Red Nike Running Shoe"/>
                        <p><span className="articleBy"> Nipsey Hussle |</span>BY Allegra Frank</p>
                        <a href="https://www.vox.com/culture/2019/4/2/18290487/nipsey-hussle-death-rapper"><p className="descriptionP"> Rapper Nipsey Hussle's Death put an inspiring life in the spotlight </p></a>
                    </div>
                    <div className="blackBox">
                        <img className="blackShoe" src="../imgs/lilbaby1.jpg" alt="Black Nike Force Shoe"/>
                        <p><span className="articleBy"> Lil Baby |</span> BY Charles Holmes</p>
                        <a href="https://www.rollingstone.com/music/music-news/lil-baby-the-bigger-picture-1014126/"><p className="descriptionP"> Lil Baby Always Had A Lot To Say- You Just Werent Paying Attention</p></a>
                    </div>
                    <div className="greenBox">
                        <img className="greenShoe" src="../imgs/youngboy.jpg" alt="Green Nike Shoe"/>
                        <p><span className="articleBy"> NBA Youngboy |</span>BY Heran Mamo</p>
                        <a href="https://www.billboard.com/articles/columns/hip-hop/9406960/youngboy-never-broke-again-death-enclaimed-fathers-day-music-video"><p className="descriptionP"> Watch Youngboy Never Broke Again Spend Time with his kids in Death Enclaimed Fathers Day Music Video</p></a>
                    </div>
                    <div className="whiteBlackRedBox">
                        <img className="whiteBlackRedShoe" src="../imgs/42dugg.jpg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy"> 42 Dugg |</span>BY DJ First Class</p>
                        <a href="https://www.revolt.tv/new-music/2020/6/19/21296534/42-dugg-young-and-turnt-2-deluxe"><p className="descriptionP"> 42 Dugg Deleivers New Album "Young and Turnt 2 Deluxe"</p></a>
                    </div>
                    <div className="whiteRedBox">
                        <img className="whiteRedShoe" src="../imgs/dolph.jpg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy"> Young Dolph |</span> BY Patrick Lyons</p>
                        <a href="https://www.gq.com/story/young-dolph-interview-2020"><p className="descriptionP">Young Dolph Is Leading the Rap During the Pandemic</p></a>
                    </div>
                    <div className="orangeBrownBox">
                        <img className="orangeBrownShoe" src="../imgs/drake.jpg" alt="Nike Gravity Shoe"/>
                        <p><span className="articleBy"> Drake|</span>BY Racheal E. Greenspan</p>
                        <a href="https://www.insider.com/drake-house-toronto-mansion-tour-architectural-digest-2020-4"><p className="descriptionP"> Drake gave a tour of his Toronto Mansion and reactions have ranged from ... </p></a>
                    </div>
                    <div className="brownBox">
                        <img className="brownShoe" src="../imgs/jayz.jpg" alt="Brown Nike Shoe"/>
                        <p><span className="articleBy"> JAY Z |</span> BY A&E Televisions</p>
                        <a href="https://www.biography.com/musician/jay-z/"><p className="descriptionP"> Who is Jay Z - Biography</p></a>
                    </div>
                    <div className="gravityBox">
                        <img className="gravityShoe" src="../imgs/ad.jpg" alt="Nike Gravity Shoe"/>
                        <p><span className="adChoiceSpan"><img className="adChoice" src="../imgs/adChoicespng.png" alt="Ad Choices" />AdChoices </span>Enroll into to Spotify Enjoy Premium for free for 30 days.</p>
                    </div>
                </div>
                <h1 id="main-header">Shows</h1>
                <div className="videoComplex">
                    <div className="canelloBox">
                    <iframe className="canelloAlvarez" width="560" height="315" src="https://www.youtube.com/embed/_EyZUTDAH0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2> Travis Scott - Butterfly Effect</h2>
                </div>
                <div className="jadaKissBox">
                    <iframe className="jadaKiss" width="560" height="315" src="https://www.youtube.com/embed/jCHRCTHUb9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2>Gunna - Skybox</h2>
                </div>
                </div>
                <div className="drakeBox">
                    <iframe className="dravIframe" width="560" height="315" src="https://www.youtube.com/embed/0jz0GAFNNIo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2> Drake - When to Say When & Chicago Freestyle</h2>
                </div>
                    {/* <Carousel /> */}
                    {/* <p className="sliderWriter"><span className="articleBy">SNEAKERS |</span>BY MATT WELTY, BEN FELDERSTEIN, RILEY JONES, ZAC DUBASIK, MIKE DESTEFANO</p>
                    <a href="https://www.complex.com/sneakers/2019/12/best-sneaker-collaborations-of-2019/"><p className="sliderArticle">The Best Sneaker Collaborations of 2019</p></a>
                 */}
                <Footer />
​
            </div>
        )
    }
}

export default Shoes;
