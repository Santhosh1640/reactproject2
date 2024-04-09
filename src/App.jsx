import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title}></img>
      <h3 >{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  return(
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
 }
 
 function App() {
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
        
      </main>
    </div>
  );
}

export default App;
