import React from "react";

function Signup() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="messages" placeholder="Messages" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  export default Signup;
