// src/App.js
import "./App.css";
// contacts
import contacts from "./contacts.json";
// useState
import { useState } from "react";

function App() {
  const [producerContacts] = useState(
    contacts.slice(0, 8)
  );
  return (
    <div className="App">
      <table>
        <h1>IronContacts</h1>
        <tr>
          <th><h2>Picture</h2></th>
          <th><h2>Name</h2></th>
          <th><h2>Popularity</h2></th>
          <th><h2>Won Oscar</h2></th>
          <th><h2>Won Emmy</h2></th>
        </tr>
        {producerContacts.map((contact) => (
          <tr>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} style={{width: "80px"}}/>
            </td>
            <td><p>{contact.name}</p></td>
            <td><p>{contact.popularity.toFixed(2)}</p></td>
            <td><p>{contact.wonOscar ? "🏆" : ""}</p></td>
            <td><p>{contact.wonEmmy ? "🏆" : ""}</p></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;