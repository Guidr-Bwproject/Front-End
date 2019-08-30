import React, { useContext } from "react";
import {Card, Image} from "semantic-ui-react";
import JennHiking from "../imgs/JennHiking2.jpg";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext"

export default function HomePageProfileCard (){
  const {loggedUser, setLoggedUser} = useContext(UserContext)

  return(
    <StyledProfileCard>
      <div className="profileCard">
        {loggedUser && <Card className="profileCardContainer">
        {loggedUser && <Image src={`https://randomuser.me/api/portraits/women/${loggedUser.id}.jpg`} fluid className="image"/>}
          <Card.Content className="cardContent">
          <div className="guideInfo">
            <Card.Header className="cardHeader">
              {loggedUser && <Link to="/profile" className="userLink">{loggedUser.username}</Link>}
              </Card.Header>
              {loggedUser && <Card.Meta className="cardMeta">{loggedUser.title}</Card.Meta>}
              {loggedUser && <Card.Meta className="cardMeta">I've been a guide for {loggedUser.time_as_guide} years.</Card.Meta>}
              <Card.Meta className="cardMeta">Guidr Pro</Card.Meta>
              {loggedUser && <Card.Meta className="cardMeta">{loggedUser.tagline}</Card.Meta>}
            </div>
          </Card.Content>
        </Card>}
      </div>
    </StyledProfileCard>
  )
}

const StyledProfileCard = styled.div `
.profileCardContainer{
width: 80%;
margin: auto;
border-radius: 10px;
background-color: #f7f7f7;
box-shadow: 0px 5px 5px;
opacity: .8;

  @media screen and (max-width:1000px){
    width: 70%;
  }
}

.image{
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.cardContent{
  padding: 2%;
}

.guideInfo{
  line-height: 35px;
}

.cardHeader{
  font-size: 2rem;
  color: #314b11;
  font-weight: bold;
  margin-bottom: 3%;
  border-bottom: 1px solid black;
  padding-bottom: 7%;
}

.userLink {
  color: #314b11;
  font-weight: bold;
}

.userLink:hover{
  cursor: pointer;
  color: #496e1b;
}

.cardMeta{
  font-weight: bold;
}

`;