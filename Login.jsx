import { useState, useEffect } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      setRemember(checked);
    }
  };


  return (
    <div>
      <input name="username" type="text" onChange={inputChange} />
      <input name="password" type="password" onChange={inputChange} />
      <input name="remember" type="checkbox" onChange={inputChange} />
    </div>
  );
}
