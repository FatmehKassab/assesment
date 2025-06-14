import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import TextInput from "../../Inputs/TextInput";
import Button from "../../Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <form className="flex flex-col items-center gap-4 w-3/4 min-w-56">
      <TextInput label="Username" value={username} onChange={setUsername} />

      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Button title="Login" onClick={handleLogin} className="mt-4" />

      {error && <p className="text-red">{error}</p>}
    </form>
  );
};

export default LoginForm;
