interface AuthTemplateProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  image: string;
}

export const AuthTemplate = ({ children, title, image }: AuthTemplateProps) => {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center mx-auto p-2 bg-[#f8f8f8] rounded-lg shadow-lg">
      <div className="w-full flex justify-center p-2 sm:p-4 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center m-0 mb-6 md:text-5xl md:py-4">
            {title}
          </h1>

          {children}
        </div>

        <figure>
          <img
            className="hidden max-w-screen-md lg:block"
            src={image}
            alt={title}
          />
        </figure>
      </div>
    </div>
  );
};
