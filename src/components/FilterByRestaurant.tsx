import { IoSearchOutline } from "react-icons/io5";

export const FilterByRestaurant = () => {
  return (
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
        <label className="block text-base font-medium md:mb-2">
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
  );
};
