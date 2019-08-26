import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";


export default function HomePageCards ({name,image,species}){
  return(
    <Card style={{width: "60%", backgroundColor: "#f7f7f7", opacity: ".7", margin: "5%", borderRadius: "10px", boxShadow: "0px 5px 5px"}}>
      <Image src={image} fluid />
      <Card.Content style={{padding: "1% 5%"}}>
        <Card.Header style={{textAlign: "left", fontSize: "2rem", fontWeight: "bold", color: "#314b11", fontFamily: "Roboto"}}>trip name {name}</Card.Header>
        <Card.Meta style={{textAlign: "left", color: "#314b11"}}>guide name | date</Card.Meta>
        <Card.Description style={{textAlign: "left", width: "80%", margin: "auto"}}>
        Muskellunge trout combtail gourami sea raven sole porbeagle shark freshwater hatchetfish spinefoot limia ghoul. Barbeled dragonfish sturgeon beardfish, mud catfish rockfish blue danio. Dogfish sabertooth {species}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}