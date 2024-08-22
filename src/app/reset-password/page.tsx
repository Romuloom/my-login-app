// src/app/reset-password/page.tsx

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

    // Simulação de redefinição de senha (substitua pela lógica real conforme necessário)
    const isPasswordReset = await mockResetPassword(password);

    if (isPasswordReset) {
      setSuccess(
        "Senha alterada com sucesso! Você será redirecionado para o login."
      );
      // Redirecionar para a página de login após alguns segundos
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } else {
      setError("Erro ao redefinir a senha. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6">Redefinir senha</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {!success && (
          <>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Nova senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-3 block w-full border rounded-md shadow-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="confirm-password"
              >
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-3 block w-full border rounded-md shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md"
            >
              Redefinir senha
            </button>
          </>
        )}
      </form>
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
