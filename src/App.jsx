import { useState } from "react";
import Form from "./Form";
import ShowImage from "./components/ShowImage";
import "./style.css";

const App = () => {
  const [data, setData] = useState({
    name: "name",
    color: "color",
    font: "lato"
  });
  function toUpdate(name, color, font) {
    setData({ name: name, color: color, font: font });
  }

  return (
    <>
      {/* {fontOptions.map((font, index) => {
        console.log(font);
      })} */}
      <h1>Mini Card</h1>
      <h2>{data.name}</h2>
      <Form toUpdate={toUpdate} />
      <ShowImage data={data} />
    </>
  );
};

export default App;
