import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";

// export default function HomePageCards ({tripName, image, info}) {
//   return(
//     <Card
//       header={tripName}
//       image={image}
//       description={info}
    
//   )
// }

export default function HomePageCards ({name,image,species}){
  return(
    <Card
      header={`this will be the trip name ${name}`}
      image={image}
      description={`this will be the description for the trip...${species}`}
    />
  )
}