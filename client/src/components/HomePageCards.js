import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";

export default function HomePageCards ({tripName, image, info}) {
  return(
    <Card
      header={tripName}
      image={image}
      description={info}
    />
  )
}