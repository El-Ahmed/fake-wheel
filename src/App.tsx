import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import djb2a from "djb2a";

function App() {

  const [link, setLink] = useState('https://el-ahmed.github.io/spin-wheel/')

  const [formData, setFormData] = useState({
    winningName: '',
    winningStrike: 1,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLink(`https://el-ahmed.github.io/spin-wheel/?l=${djb2a(formData.winningName)}&c=${formData.winningStrike+17}`);
  };

  return (
    <div className="App">
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="winningName">Winning Name: </label>
          <input
            type="text"
            id="winningName"
            name="winningName"
            value={formData.winningName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="winningStrike">Winning Strike: </label>
          <input
            type="number"
            id="winningStrike"
            name="winningStrike"
            value={formData.winningStrike}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Generate Link</button>
        </form>
        <a href={link}>{link}</a>
      </main>
    </div>
  );
}

export default App;
