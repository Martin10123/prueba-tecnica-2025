import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

export const HomePage = () => {
  return (
    <>
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border-b border-gray-200">
        <nav className="w-full container mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
              <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
                <img
                  className="w-10 h-auto"
                  src="/assets/logo-M.svg"
                  alt="Logo"
                />
                Martin
              </span>
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                <IoMenuOutline size={17} />

                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <p className="font-medium text-blue-500 focus:outline-none">
                Perfil
              </p>
              <p className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
                Cerrar sesión
              </p>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-8">
          <div>
            <h1 className="text-4xl font-semibold m-0">
              Bienvenido a la página principal
            </h1>

            <p className="text-gray-600 mt-4">
              Martin Elias, aqui podras encontrar todos los restaurantes
              cercanos a tu ubicación.
            </p>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm md:max-w-5xl md:grid md:grid-cols-2 md:gap-4">
            <div>
              <label className="block text-base font-medium mb-2">
                Buscar restaurante
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="text"
                  className="py-3.5 px-4 ps-12 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Buscar restaurante..."
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <IoSearchOutline size={20} color="#3b82f6" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-2 md:mt-0 md:gap-0">
              <label className="block text-base font-medium mb-2">
                Tipo de comida
              </label>

              <select className="py-3.5 px-4 pe-9 block w-full bg-white border cursor-pointer border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <option value="">Selecciona una opción</option>
                <option value="">Comida rápida</option>
                <option value="">Comida saludable</option>
                <option value="">Comida mexicana</option>
                <option value="">Comida italiana</option>
                <option value="">Comida japonesa</option>
                <option value="">Comida china</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold my-6">
              Restaurantes cercanos
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Card title</h3>
                <p className="mt-1 text-xs font-medium uppercase text-gray-500">
                  Card subtitle
                </p>
                <p className="mt-2 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

              <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Card title</h3>
                <p className="mt-1 text-xs font-medium uppercase text-gray-500">
                  Card subtitle
                </p>
                <p className="mt-2 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
