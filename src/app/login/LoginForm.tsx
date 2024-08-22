"use client";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import PasswordResetModal from "./PasswordResetModal";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError(
        "E-mail inválido. Insira um endereço de e-mail no formato correto."
      );
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais."
      );
      return;
    }

    const isAuthenticated = await mockAuthenticate(email, password);

    if (!isAuthenticated) {
      setError("Credenciais inválidas. Tente novamente.");
    } else {
      console.log("Usuário autenticado!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 rounded-lg">
        <div className="mb-6">
          <label
            className="flex text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            E-mail
            <div className="text-red-600"> *</div>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className=" flex text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Senha
            <div className="text-red-600"> *</div>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
        >
          Entrar
        </button>
        <p className="mt-4 text-sm">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)} // Abrir modal ao clicar
            className="text-blue-600 hover:underline"
          >
            Esqueci minha senha
          </button>
        </p>
        {error && <ErrorMessage message={error} />}
      </form>
      <PasswordResetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />{" "}
      {/* Modal de recuperação de senha */}
    </>
  );
}

function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password: string): boolean {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
  return re.test(password);
}

async function mockAuthenticate(
  email: string,
  password: string
): Promise<boolean> {
  // Simulação de autenticação (substitua pela lógica real conforme necessário)
  return email === "admin@example.com" && password === "Admin123!";
}
