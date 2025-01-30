interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  titleRegisterLogin: string;
  linkRegisterLogin?: string;
  img: string;
}

export const AuthLayout = ({
  children,
  img,
  titleRegisterLogin,
  linkRegisterLogin,
  title,
}: AuthLayoutProps) => {
  return (
    <>
      <div className="w-full h-dvh bg-background flex items-center justify-center gap-4 p-4">
        <div className="w-full bg-white px-4 py-8 border-2 border-gray-200 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#3b82f6]">
            {title}
          </h2>

          {children}

          <div>
            <p className="mt-4 text-sm text-black font-medium flex flex-col items-end">
              {title === "Iniciar sesión"
                ? "¿No tienes una cuenta? "
                : "¿Ya tienes una cuenta?"}

              <span className="font-semibold text-base text-blue-500 cursor-pointer hover:underline duration-100">
                {titleRegisterLogin}
              </span>
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={img} alt={title} />
        </div>
      </div>
    </>
  );
};
