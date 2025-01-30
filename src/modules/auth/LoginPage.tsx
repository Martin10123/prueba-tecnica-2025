import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <AuthLayout
      title="Iniciar sesión"
      titleRegisterLogin="Regístrate"
      linkRegisterLogin="/auth/register"
      img="/assets/login-img.svg"
    >
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-base font-medium mb-2">Correo</label>
          <div className="relative">
            <input
              type="text"
              name="email"
              className="py-3.5 px-4 ps-12 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="you@site.com..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <MdEmail size={20} color="#3b82f6" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-base font-medium mb-2">Contraseña</label>
          <div className="relative">
            <input
              type="password"
              name="password"
              className="py-3.5 px-4 ps-12 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Contraseña..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <RiLockPasswordLine size={20} color="#3b82f6" />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full border text-blue-500 font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white duration-300 mt-2"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
