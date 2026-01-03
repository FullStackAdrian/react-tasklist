import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "./useAuth";
import { authFormSchema } from "../schemas/authFormSchema";

export default function useLoginForm() {
  const { login } = useAuth();
  const [serverError, setServerError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authFormSchema),
    defaultValues: { email: "user@example.com", password: "password" },
  });

  const onSubmit = useCallback(
    async (values) => {
      setSubmitting(true);
      setServerError(null);
      try {
        await login(values); // llama al contexto -> authService mock -> persiste
      } catch (err) {
        setServerError(err.message || "Error al autenticar");
        throw err; // opcional: permite que la página lo capture
      } finally {
        setSubmitting(false);
      }
    },
    [login]
  );

  // Devuelve handleSubmit ya envuelto para usar en el form: <form onSubmit={handleSubmit(onSubmit)}>
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    submitting,
    serverError,
  };
}