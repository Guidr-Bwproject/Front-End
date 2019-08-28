import React from "react";
import {Card, Image} from "semantic-ui-react";
import JennProfile from "../imgs/JennProfile.jpg";
import BryanProfile from "../imgs/BryanProfile.jpg"
import MichaelProfile from "../imgs/MichaelProfile.jpg";
import MarquesProfile from "../imgs/MarquesProfile.jpg";
import NicholasProfile from "../imgs/NicholasProfile.jpg";
import MarkProfile from "../imgs/MarkProfile.png";
import WaisProfile from "../imgs/WaisProfile.jpg";
import HysenProfile from "../imgs/HysenProfile.JPG";
import PandaMailbox from "../imgs/PandaMailbox.JPG";
import styled from "styled-components";

export default function AboutCreatorCard (){
  return(
    <StyledCreatorCard>
    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={PandaMailbox} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Yusuf Nafey
        </Card.Header>
        <Card.Meta className="cardMeta">Back End Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={BryanProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Bryan Szendel
        </Card.Header>
        <Card.Meta className="cardMeta">Front End Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={MichaelProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Michael Baynon
        </Card.Header>
        <Card.Meta className="cardMeta">Front End Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={MarquesProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Marques Johnson
        </Card.Header>
        <Card.Meta className="cardMeta">Front End Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={NicholasProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Nicholas Truson
        </Card.Header>
        <Card.Meta className="cardMeta">Front End Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={JennProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Jenn Soderborg
        </Card.Header>
        <Card.Meta className="cardMeta">Front End Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={MarkProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Mark Gowen
        </Card.Header>
        <Card.Meta className="cardMeta">Web UI Developer/UX Designer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={HysenProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Hysen Sisco
        </Card.Header>
        <Card.Meta className="cardMeta">Web UI Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>

    <div className="creatorCard">
    <Card className="creatorCardContainer">
      <Image src={WaisProfile} fluid className="creatorPic"/>
      <Card.Content>
        <Card.Header className="cardHeader">
          Wais Almakaleh
        </Card.Header>
        <Card.Meta className="cardMeta">Web UI Developer</Card.Meta>
      </Card.Content>
    </Card>
    </div>
    </StyledCreatorCard>
    
  )
}

const StyledCreatorCard = styled.div `
.creatorCardContainer{
width: 80%;
margin: auto;
margin-bottom: 5%;
border-radius: 10px;
background-color: #f7f7f7;
box-shadow: 0px 5px 5px;
opacity: .8;

@media screen and (max-width:1000px){
  width: 70%;
}
}

.creatorPic{
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.cardHeader{
  color: #314b11;
  font-weight: bold;
}

.cardMeta{
  padding: 5%;
}

`;