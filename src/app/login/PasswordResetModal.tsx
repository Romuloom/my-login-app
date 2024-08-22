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

    const isEmailSent = await mockSendPasswordReset(email);

    if (isEmailSent) {
      setSuccess(
        "Enviamos um link de recuperação para o seu e-mail cadastrado. Por favor, verifique a sua caixa de entrada e a pasta de spam, se necessário."
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
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">Recuperar senha</h2>
        {success ? (
          <div>
            <p className="text-sm mb-4 text-gray-600">{success}</p>
            <button
              onClick={onClose}
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
            >
              Entendido
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm mb-4 text-gray-600">
              Para recuperar sua senha, digite o e-mail cadastrado.
            </p>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
              >
                Enviar
              </button>
            </form>
          </>
        )}
        {!success && (
          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-500 hover:text-gray-700 hover:underline"
          >
          </button>
        )}
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
