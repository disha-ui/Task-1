import React from "react";

function Template() {
  return (
    <div className="main">
      <img src="./img/1.jpg" height={400} width={1430} />

      <div className="main-txt-1">
        <i class="fa-solid fa-list"></i> ghost
        <div className="main-txt-2">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-solid fa-phone-volume"></i>
        </div>
        <div className="main-txt-3">
          <h1>Ghost & Gatsbay</h1>
          <h6>Thoughts,stories and JAMstack </h6>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Tag</li>
            <li>Author</li>
            <li>Help</li>
          </ul>
        </div>
          <button>About</button>
      </div>
      </div>
  );
}

export default Template;
