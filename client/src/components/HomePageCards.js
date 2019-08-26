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

export default function HomePageCards ({image}){
  return(
    <Card
      header="Mount Timpanogas"
      image={image}
      description="stuff and things"
    />
  )
}