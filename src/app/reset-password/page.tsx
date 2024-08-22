"use client";

import { useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validatePassword(password)) {
      setError(
        "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    // Simulação de redefinição de senha
    const isPasswordReset = await mockResetPassword(password);

    if (isPasswordReset) {
      setSuccess(
        "Senha alterada com sucesso! Você será redirecionado para o login."
      );
      // Redirecionar para a página de login após alguns segundos
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      setError("Erro ao redefinir a senha. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <div className="text-center mb-4">
          <img
            src="/TrajetonMagazineLarge.png"
            alt="Trajeton Logo"
            className="h-16 mx-auto"
          />
        </div>
        <div className="bg-[#F9FAFB] border border-gray-300 p-8 rounded-md">
          {" "}
          <h2 className="text-2xl font-semibold text-center mb-4">
            Redefinir senha
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Redefina sua senha com no mínimo 6 caracteres
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Senha*
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
                <span className="absolute inset-y-0 right-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.75 10a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0zm7.75-4a1 1 0 00-1 1v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 00-1-1z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="confirm-password"
              >
                Confirme sua senha*
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
                <span className="absolute inset-y-0 right-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.75 10a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0zm7.75-4a1 1 0 00-1 1v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 00-1-1z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-6">
              <p className="mb-1">Crie uma senha segura</p>
              <ul className="list-disc ml-4">
                <li>Use letras maiúsculas e minúsculas, símbolos e números.</li>
                <li>Não use informações pessoais como datas de aniversário.</li>
                <li>Não use uma senha igual à anterior.</li>
              </ul>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
            >
              Redefinir senha
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function validatePassword(password: string): boolean {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
  return re.test(password);
}

async function mockResetPassword(password: string): Promise<boolean> {
  // Simulação de redefinição de senha (substitua pela lógica real conforme necessário)
  
  return true;
}
