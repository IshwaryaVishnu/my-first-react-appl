import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>coloumn1</th>
            <th>coloumn2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row"></td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td scope="row"></td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
