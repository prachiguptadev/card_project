import { useState } from "react";
import fontOptions from "./fontOptions";

const Form = ({ toUpdate }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("white");
  const [font, setFont] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    toUpdate(name, color, font);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="color">Choose your favriote color: </label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <label htmlFor="font">select your font: </label>

        <select
          id="font"
          onChange={(e) => setFont(e.target.value)}
          value={font}
        >
          {fontOptions.map((font, index) => (
            <option value={font} key={index}>
              {font}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
