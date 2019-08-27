import React from "react";
import {Card, Image} from "semantic-ui-react";
import JennHiking from "../imgs/JennHiking2.jpg";

export default function HomePageProfileCard ({}){
  return(
    <Card style={{width: "60%", borderRadius: "10px",backgroundColor: "#f7f7f7", boxShadow: "0px 5px 5px", opacity: ".8"}}>
      <Image src={JennHiking} fluid style={{width: "100%", borderRadius: "10px 10px 0px 0px"}}/>
      <Card.Content style={{padding: "2%"}}>
        <Card.Header style={{fontSize: "1.5rem", color: "#314b11", fontWeight: "bold"}}>
          Jenn Soderborg
        </Card.Header>
        <Card.Meta style={{fontWeight: "bold"}}>Guidr Pro</Card.Meta>
      </Card.Content>
    </Card>
  )
}