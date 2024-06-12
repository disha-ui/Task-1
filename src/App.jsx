import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Template from './component/Template'
import './component/Template.css'
import Card from './component/Card'
import './component/Card.css'

function App() {
  

  return (
    <>
      <Template />
      <div style={{display:'flex'}}>
      <Card img="./img/1-1.jpg" heading="About Ghost + Gatsby" txt="Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!" p3="2 min read"/>
      <Card img="./img/1-2.png" heading="Welcome to Ghost" txt="Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!" p3="1 min read"/>
      <Card img="./img/1-3.jpg" heading="Writing posts with Ghost" txt="Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!" p3="3 min read"/>
      </div>
    </>
  );
}

export default App;
