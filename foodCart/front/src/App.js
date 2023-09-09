
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Nav from "./Nav";
import Card from "./Card";

function App() {
  const [first, setfirst] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    const fectchApi = async () => {
      try {
        const data = await axios.get("http://localhost:5000");
        //  setfirst(data.data.api)
        setfirst(data.data.api.data);
        setLink(data.data.link[0].link);
      } catch (e) {
        console.log(e);
      }
    };
    fectchApi();
  }, [link]);

  return (
    <>
   <div class="container">
      <Nav />
     
        {first.map((product) => {
          // console.log(product,"Inside Map");
          return <Card props={product} link={link} />;
        })}
      
      {/* <Card props={first} link={link}/> */}
      </div>
  
    </>
  );
}

export default App;
