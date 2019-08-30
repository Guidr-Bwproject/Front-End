import React, {useContext} from "react";
import {Card, Image, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg';
import { UserContext } from "../contexts/UserContext"


export default function TripDetailCard ({details}){
  const {loggedUser} = useContext(UserContext)
  return(
    <StyledTripCards>
      <div className="tripCard">
        <Card className="CardContainer">
          <Image src={details.image} alt="a beautiful landscape" fluid className="cardImage"/>
          <Card.Content className="cardContent">
            <Card.Header className="cardHeader">{details.title}</Card.Header>
            <div className="cardMiddle">       
              <div className="middleTop">
                <Image src={`https://randomuser.me/api/portraits/women/${details.user_id}.jpg`} alt="the guide's face" fluid className="guideImage"/>
                <div className="topContent">
                  <Card.Meta className="guideName">Guided Trip </Card.Meta>             
                  <Card.Meta className="duration">Start Date: {details.date} | Duration: {details.duration}</Card.Meta>
                  <Card.Description className="location">Join us in {details.location}</Card.Description>
                </div>
              </div>
              <Card.Description className="description">{details.description}</Card.Description>
            </div>
            <Card.Description className="cardBottom">
              <h4 className="buttonTitle">Want to join us? <img alt="" className='arrowIMG' src={arrowIMG} /></h4>
              <Link to="/profile" className="userLink"><Button className="guideContactButton">Contact Guide!</Button></Link>  
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </StyledTripCards>
  )
}

const StyledTripCards = styled.div `
.CardContainer{
  width: 75%;
  background-color: #f7f7f7;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 5px;
  box-sizing: border-box;
}

.cardImage{
width: 100%;
border-radius: 10px 10px 0px 0px;
}

.cardMiddle{
  width: 90%;
  margin: auto;
  padding: 3% 0;
  line-height: 35px;

  .guideImage{
    border-radius: 100px;
    height: 150px;
    width:150px;
  }
}

.middleTop{
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  .topContent{
    padding-left: 3%;
  }
}

.description{
  padding-top: 2%;
}

.cardHeader{
text-align: center;
font-size: 3rem;
font-weight: bold;
color: white;
font-family: "Roboto";
background-color: #314b11;
padding: 1.5% 0;
}

.guideName{
  text-align: center;
  font-size: 2rem;
  color: #314b11;
  font-weight: bold;
}

.cardBottom{
  background-color: #314b11;
  width: 100%;
  margin: auto;
  padding: 2% 0;
  border-radius: 0px 0px 10px 10px;


  h4{
    color: white;
    font-size: 1.5rem;
  }

  .arrowIMG{
    width: 25px;
    height: 25px;
    color: white;
  }

  .guideContactButton{
    background-color: white;
    padding: 1.5%;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    font-family: "Roboto";
    color: #314b11;
  }

  .guideContactButton:hover{
    background-color: #496e1b;
    color: white;
  }
}


`;