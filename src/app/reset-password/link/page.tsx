import Link from "next/link";

export default function PasswordResetLinkPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E8ECEF]">
      <div className="bg-white rounded-lg shadow-md max-w-lg w-full">
        {" "}
        <div className="bg-[#D1D5DB] p-4 rounded-t-lg text-center">
          {" "}
          <img
            src="/TrajetonMagazineLarge.png"
            alt="Trajeton Logo"
            className="h-12 mx-auto"
          />
        </div>
        <div className="border border-[#D1D5DB] m-6 p-6 bg-[#F9FAFB] rounded-md">
          {" "}
          <p className="text-base text-gray-700 mb-4">Olá,</p>
          <p className="text-base text-gray-700 mb-4">
            Redefina sua senha de acesso clicando no link abaixo.
          </p>
          <Link
            href="/reset-password"
            className="text-blue-500 hover:underline"
          >
            https://reseteSuasenhaAqui.com/senha
          </Link>
          <p className="text-sm text-red-500 mt-4">O link expira em 24 horas</p>
        </div>
      </div>
    </div>
  );
}
