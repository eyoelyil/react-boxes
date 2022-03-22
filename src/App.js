import Header from "./Header";
import Footer from "./Footer";

const Box = (props) => {
  return (
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>Title : {props.title}</p>
        <p>Age : {props.age}</p>
        <ul>{props.lang}</ul>
      </div>
    </div>
  );
};

const persons = [
  {
    name: "John",
    title: "CEO",
    age: 39,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "russian", id: 3 },
      { name: "spanish", id: 4 },
    ],
  },
  {
    name: "Doe",
    title: "Developer",
    age: 33,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "russian", id: 3 },
      { name: "spanish", id: 4 },
    ],
  },
  {
    name: "Tim",
    title: "Designer",
    age: 28,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "russian", id: 3 },
      { name: "spanish", id: 4 },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        {persons.map((p) => (
          <Box
            key={p.name}
            name={p.name}
            title={p.title}
            age={p.age}
            lang={p.languages.map((lang) => (
              <li key={lang.id}>{lang.name}</li>
            ))}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
