import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import Mountain from "../imgs/Mountain.jpg";


export default function HomePageCards ({name,species}){
  return(
    <Card style={{width: "100%", backgroundColor: "#f7f7f7", margin: "5%", borderRadius: "10px", boxShadow: "0px 5px 5px", opacity: ".9"}}>
      <Image src={Mountain} fluid style={{width: "100%", height: "200px", borderRadius: "10px 10px 0px 0px"}} />
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