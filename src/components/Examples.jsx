import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from '../data.js';
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
        <Section id="examples" title="Examples">
            <Tabs buttonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic==='jsx'}  onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic==='props'}onSelect={()=>handleSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect("state")} children="State"></TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    )
}