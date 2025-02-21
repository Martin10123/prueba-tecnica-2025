import { FiUser } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { AuthTemplate } from "../templates/AuthTemplate";

export const RegisterPage = () => {
  return (
    <AuthTemplate title="Registrarte" image="/register-auth.svg">
      <form className="grid gap-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Nombre
          </label>

          <div className="relative">
            <input
              type="email"
              id="name"
              className="peer py-3.5 px-4 ps-11 block w-full bg-white border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Ingresa tu nombre..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <FiUser className="shrink-0 size-4" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Correo
          </label>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer py-3.5 px-4 ps-11 block w-full bg-white border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Ingresa tu email..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <MdAlternateEmail />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Contraseña
          </label>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer py-3.5 px-4 ps-11 block w-full bg-white border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Ingresa tu contraseña..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <IoKeyOutline />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 mt-2 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Registrarte
        </button>

        <p className="text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <span className="text-blue-500 hover:underline">Inicia sesión</span>
        </p>
      </form>
    </AuthTemplate>
  );
};
