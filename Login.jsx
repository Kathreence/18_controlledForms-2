import { useState, useEffect } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div>
      <input name="username" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
      <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <input name="remember" value={remember} type="checkbox" onChange={(e) => setRemember(e.target.checked)} />
    </div>
  );
}
