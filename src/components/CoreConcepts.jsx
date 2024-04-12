import CoreConcept from "./COreConcept"
import componentsImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
          title="Components"
          description="The core UI building block"
          img={componentsImg} />
          <CoreConcept
          title="Data"
          description="Using, Sharing and Outputting data"
          img={propsImg} />
          <CoreConcept 
          title="Events"
          description="Handling user events"
          img={jsxImg}/>
          <CoreConcept 
          title="State"
          description="Building interactive UIs with State"
          img={stateImg}/>
        </ul>
        </section>
    )
}