import React from "react";
import "../App.css";

//Create a ErrorPage

function NotFoundPage() {
    return (
      <div className="error">
        <h1> Error 404!!! This Page doesn't exist</h1>
      <button>Go Back to the Home Page</button> 
      </div>
    );
  };

  export default NotFoundPage;