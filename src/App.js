import 'minireset.css';
import './App.css';

function App({ name, course, date }) {
  return (
    <div className="App">
      <Icon />
      <p className="byline">Certificate of completion</p>

      <div className="content">
        <p>Awarded to</p>
        <h1>{name}</h1>
        <p>for completing:</p>
        <h2>{course}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on{' '}
          <span className="bold">{date}</span>
        </p>
      )}
    </div>
  );
}

App.defaultProps = {
  name: "Arjai Reynolds",
  course: "Being a big boy on his first day",
  date: "August 9 2021",
};

const Icon = () => (
  <img src="unittwo.png" />
);

export default App;
