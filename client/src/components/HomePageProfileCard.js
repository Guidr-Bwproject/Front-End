import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import JennHiking from "../imgs/JennHiking2.jpg";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function HomePageProfileCard ({}){
  return(
    <StyledProfileCard>
    <div className="profileCard">
    <Card className="profileCardContainer">
      <Image src={JennHiking} fluid style={{width: "100%", borderRadius: "10px 10px 0px 0px"}}/>
      <Card.Content style={{padding: "2%"}}>
        <Card.Header style={{fontSize: "1.5rem", color: "#314b11", fontWeight: "bold"}}>
          <Link to="/profile" className="userLink">User Name</Link>
        </Card.Header>
        <Card.Meta style={{fontWeight: "bold"}}>Guidr Pro</Card.Meta>
      </Card.Content>
    </Card>
    </div>
    </StyledProfileCard>
  )
}

const StyledProfileCard = styled.div `
.profileCardContainer{
width: 60%;
margin: auto;
border-radius: 10px;
background-color: #f7f7f7;
box-shadow: 0px 5px 5px;
opacity: .8;

@media screen and (max-width:1000px){
  width: 70%;
}
}

.userLink {
  color: #314b11;
  font-weight: bold;
}

.userLink:hover{
  cursor: pointer;
  color: #496e1b;
}

`;