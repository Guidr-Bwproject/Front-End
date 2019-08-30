import React, {useContext} from "react";
import {Card, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { TripsContext } from "../contexts/TripsContext"
import { TripContext } from "../contexts/TripContext"

export default function HomePageCards ({ props, title, date, description, image, id}){
  
  const {trips, setTrips} = useContext(TripsContext)
  const {trip, setTrip} = useContext(TripContext)
  
  return(
    <StyledHomeCards>
      <div className="homeCard">
        <Card className="CardContainer">
          <Image src={image} fluid className="cardImage"/>
          <Card.Content className="cardContent">
            <Card.Header className="cardHeader">{title}</Card.Header>
            <Card.Meta className="cardMeta">
              <Link to="#" className="cardGuideLink">Guide Name | {date}</Link>
            </Card.Meta>
            <Card.Description className="description">{description}</Card.Description>
            <Card.Description className="cardLink">
              <Link to={`/trips/${id}`} className="homePageCardLink">Click here for trip details</Link>
            </Card.Description>
              <Link to="/edittrip" onClick={(event) => {
                setTrip(trips.find(i => i.id === id))
              }}>edit trip
            </Link>
          </Card.Content>
        </Card>
      </div>
    </StyledHomeCards>
  )
}

const StyledHomeCards = styled.div `
.CardContainer{
  width: 100%;
  background-color: #f7f7f7;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 5px;
  opacity: .9;
  margin-bottom: 5%;
}

.cardImage{
width: 100%;
height: 300px;
border-radius: 10px 10px 0px 0px;
}

.cardContent{
  padding: 1% 5%;
}

.cardHeader{
text-align: left;
font-size: 2rem;
font-weight: bold;
color: #314b11;
font-family: "Roboto";
}

.cardMeta{
  text-align: left;
  padding: 1.5%;}

.cardGuideLink{
  color: #314b11;
  font-weight: bold;
}

.cardGuideLink:hover{
  cursor: pointer;
  color: #496e1b;
}

.description{
  text-align: left;
  width: 80%;
  margin: auto;
}

.cardLink{
  padding: 2%;
}

.homePageCardLink {
  color: #314b11;
  font-weight: bold;
}

.homePageCardLink:hover{
  cursor: pointer;
  color: #496e1b;
}

`;