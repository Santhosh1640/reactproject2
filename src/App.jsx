import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import Header from './components/Header'
import CoreConcept from './components/COreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import {EXAMPLES} from './data.js'
 function App() {


  const[selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please eselect a topic.</p>
  if(selectedTopic !==undefined) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <main>
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}  onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'}onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect("state")} children="State"></TabButton>
          </menu>
          {/* {selectedTopic === undefined ? <p>Please select a topic.</p> : null} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
