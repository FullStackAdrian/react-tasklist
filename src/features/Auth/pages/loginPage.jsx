import React from "react";
import { useNavigate } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm";
import LoginFormComponent from "../components/loginFormComponent.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors, submitting, serverError } = useLoginForm();

  const submitAndNavigate = async (event) => {
    try {
      await handleSubmit(event); 
      navigate("/", { replace: true });
    } catch {
      // error ya está manejado por useLoginForm (serverError)
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <LoginFormComponent
        register={register}
        handleSubmit={submitAndNavigate}
        errors={errors}
        loading={submitting}
        serverError={serverError}
      />
    </div>
  );
}