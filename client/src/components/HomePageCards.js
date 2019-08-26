import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";


export default function HomePageCards ({name,image,species}){
  return(
    <Card
      style={{width: "60%", backgroundColor: "#f7f7f7", opacity: ".7", margin: "5%", borderRadius: "10px", boxShadow: "0px 5px 5px"}}
      image={image}
      header={`this will be the trip name ${name}`}
      description={`Muskellunge trout combtail gourami sea raven sole porbeagle shark freshwater hatchetfish spinefoot limia ghoul. Barbeled dragonfish sturgeon beardfish, mud catfish rockfish blue danio. Dogfish sabertooth; merluccid hake Mexican golden trout driftwood catfish dhufish murray cod amur pike noodlefish? Tripletail dwarf loach butterfly ray fierasfer dusky grouper. Cow shark spearfish chub herring; Oriental loach; yellowfin tuna anglerfish, thorny catfish snakehead longnose dace.${species}`}
    />
  )
}