import React from "react";
import { useNavigate } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm.jsx";
import LoginForm from "../ui/loginForm.jsx";

export default function LoginFormComponent() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useLoginForm();

  const onSubmit = async (event) => {
    try {
      await handleSubmit(event);
      navigate("/", { replace: true });
    } catch {
     // error ya está manejado por use
    }
  };

  return <LoginForm register={register} errors={errors} onSubmit={onSubmit} />;
}