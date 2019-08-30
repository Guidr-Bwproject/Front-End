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
        <Card className="profileCardContainer">
          <Image src={`https://randomuser.me/api/portraits/women/${loggedUser.id}.jpg`} fluid className="image"/>
          <Card.Content className="cardContent">
            <Card.Header className="cardHeader">
              <Link to="/profile" className="userLink">{loggedUser.username}</Link>
            </Card.Header>
            <Card.Meta className="cardMeta">Guidr Pro</Card.Meta>
          </Card.Content>
        </Card>
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

.cardHeader{
  font-size: 1.5rem;
  color: #314b11;
  font-weight: bold;
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