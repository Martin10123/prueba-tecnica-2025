import { MdEmail } from "react-icons/md";
import { AuthLayout } from "../layout/AuthLayout";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export const RegisterPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <AuthLayout
      title="Registrarse"
      titleRegisterLogin="Ingresar"
      linkRegisterLogin="/auth/login"
      img="/assets/register-img.svg"
    >
      <form className="grid gap-2" onSubmit={handleSubmit}>
        <div>
          <label className="block text-base font-medium mb-2" htmlFor="name">
            Nombre
          </label>
          <div className="relative">
            <input
              id="name"
              type="text"
              name="name"
              className="py-3.5 px-4 ps-12 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Martin Elias..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <FaRegUser size={20} color="#3b82f6" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-base font-medium mb-2" htmlFor="email">
            Correo
          </label>
          <div className="relative">
            <input
              id="email"
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
          <label
            className="block text-base font-medium mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              id="password"
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
            Registrarse
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
