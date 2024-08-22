// src/app/login/PasswordResetModal.tsx

import { useState } from "react";

interface PasswordResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PasswordResetModal({
  isOpen,
  onClose,
}: PasswordResetModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError(
        "E-mail inválido. Insira um endereço de e-mail no formato correto."
      );
      return;
    }

    // Simulação de envio de e-mail de recuperação (substitua pela lógica real conforme necessário)
    const isEmailSent = await mockSendPasswordReset(email);

    if (isEmailSent) {
      setSuccess(
        "Enviamos um link de recuperação para o seu e-mail. Verifique sua caixa de entrada e a pasta de spam."
      );
    } else {
      setError(
        "Erro ao enviar o e-mail de recuperação. Tente novamente mais tarde."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Recuperar Senha</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {!success && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                E-mail cadastrado
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 block w-full border rounded-md shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              Enviar
            </button>
          </form>
        )}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

async function mockSendPasswordReset(email: string): Promise<boolean> {
  // Simulação de envio de e-mail de recuperação (substitua pela lógica real conforme necessário)
  return email === "admin@example.com";
}
