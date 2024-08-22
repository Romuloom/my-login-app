import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const adminEmail = "admin@example.com";

    if (email !== adminEmail) {
      setError(
        "E-mail inválido. Este endereço de e-mail não está cadastrado no sistema, verifique e tente novamente"
      );
      return;
    }

    setSuccess(
      "Enviamos um link de recuperação para o seu e-mail cadastrado. Por favor, verifique a sua caixa de entrada e a pasta de spam, se necessário."
    );
  };

  const handleConfirm = () => {
    router.push("/reset-password/link");
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
              onClick={handleConfirm}
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
      </div>
    </div>
  );
}
