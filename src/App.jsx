import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// This function is used to get a random integer between 0 and max (inclusive)
// It is used to select a random description from the reactDescriptions array
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
