import LoginForm from "../app/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Formulário de Login */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center bg-white md:bg-transparent p-6 md:p-0">
        <div className="w-full">
          <img
            src="/TrajetonMagazine.png"
            alt="Trajeton Magazine Logo"
            className="block md:hidden mx-auto mb-6"
          />
          <LoginForm />
        </div>
      </div>
      {/* Logotipo para telas maiores */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#FFF7F2]">
        <img
          src="/TrajetonMagazineLarge.png"
          alt="Trajeton Magazine Logo"
          className="h-auto max-h-60"
        />
      </div>
    </div>
  );
}
