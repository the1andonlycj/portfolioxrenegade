import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        You're at my home page. <br />
        It's currently under renovation. Pardon my dust, and please visit the{" "}
        <br />
        <br />
        <Link to={"/renegade"} style={{ color: "#FF199C" }} className="link">
          Neon Renegade Page
        </Link>{" "}
      </h1>
    </div>
  );
}

export default Home;
