import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";


export default function HomePageCards ({name,image,species}){
  return(
    <Card
      style={{width: "60%", backgroundColor: "#f7f7f7", opacity: ".7", margin: "5%", borderRadius: "10px", boxShadow: "0px 5px 5px", }}
      image={image}
      header={`this will be the trip name ${name}`}
      description={`Muskellunge trout combtail gourami sea raven sole porbeagle shark freshwater hatchetfish spinefoot limia ghoul. Barbeled dragonfish sturgeon beardfish, mud catfish rockfish blue danio. Dogfish sabertooth; merluccid${species}`}
    />
  )
}