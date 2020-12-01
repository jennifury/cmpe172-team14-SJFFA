import React, { Component } from "react";
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


class Fossils extends Component{
render(){
  return (
    <div className="fossilgal">
      
      <h1>
        Fossil Gallery
      </h1>
      <h2>
      Yes, you can click on them!
      </h2>
      
      <body>
      
        <a href= "https://www.adventureexperience.co.uk/blog/dinosaur-fossils/">
            <img src="/dinos/1.jpg" alt = ""/>
            <p> $60 </p>
        </a>

      <a href= "https://www.wyomingpublicmedia.org/post/are-dinosaur-fossils-minerals-any-other-federal-court-says-yes">
            <img src="/dinos/2.jpg" alt = ""/>
            <p> $50 </p>
      </a>
      
      <a href= "https://www.britannica.com/animal/dinosaur">
      <     img src="/dinos/3.jpg" alt = ""/>
            <p> $100 </p>
      </a>
      
      <a href = "https://www.tripadvisor.com/LocationPhotoDirectLink-g191249-d585694-i349441717-Dinosaur_Isle-Sandown_Isle_of_Wight_England.html">
            <img src="/dinos/4.jpg" alt = ""/>
            <p> $50 </p>
      </a>
      
      <a href = "https://zeenews.india.com/news/science/dinosaur-fossil-with-preserved-feathers-skin-found_1817372.html">
            <img src="/dinos/5.jpg" alt = ""/>
            <p> $80 </p>
      </a>
      
      <a href = "https://www.nytimes.com/2012/03/06/science/archaeopteryx-fossils-appear-twisted-but-not-because-of-agony.html">
            <img src="/dinos/6.jpg" alt = ""/>
            <p> $90 </p>
      </a>
      
      </body>

    </div>
  );
 }
}

export default Fossils;
