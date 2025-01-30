import { LuCalendarClock, LuPhone } from "react-icons/lu";
import { Navbar } from "../../components/Navbar";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { PiCity } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

export const ProfilePage = () => {
  return (
    <>
      <Navbar />

      <section className="container m-auto p-4 md:grid md:grid-cols-[1fr,2fr] md:gap-2">
        <div className="flex flex-col gap-4 md:max-w-md md:border-r md:pr-4">
          <div className="flex flex-col items-center gap-2 py-6">
            <h1 className="text-4xl font-bold m-0">Martin Elias</h1>
            <p className="text-gray-500 text-sm">martin@gmail.com</p>
          </div>

          <div className="border-b border-gray-300 pb-4 md:p-4">
            <h2 className="text-lg font-bold">Sobre mi</h2>

            <div className="grid grid-cols-1 gap-2 mt-4">
              <div className="flex items-center gap-2">
                <LuPhone className="text-gray-500" />
                <span className="text-gray-500">Telefono:</span>
                <p className="text-black font-medium">(+57) 300-000-0000</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="text-gray-500" />
                <span className="text-gray-500">Correo:</span>
                <p className="text-black font-medium">martin@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <LuCalendarClock className="text-gray-500" />
                <span className="text-gray-500">Fecha de registro:</span>
                <p className="text-black font-medium">29/01/2025</p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 pb-4 md:p-4">
            <h2 className="text-lg font-bold">Dirección</h2>

            <div className="grid grid-cols-1 gap-2 mt-4">
              <div className="flex items-center gap-2">
                <GrMapLocation className="text-gray-500" />
                <span className="text-gray-500">Dirección:</span>
                <p className="text-black font-medium">Hola mundo</p>
              </div>
              <div className="flex items-center gap-2">
                <PiCity className="text-gray-500" />
                <span className="text-gray-500">Ciudad:</span>
                <p className="text-black font-medium">Cartagena</p>
              </div>
              <div className="flex items-center gap-2">
                <GoLocation className="text-gray-500" />
                <span className="text-gray-500">Codigo postal:</span>
                <p className="text-black font-medium">10001</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mt-4">Historial de busquedas</h2>

          <div className="grid grid-cols-1 gap-2 mt-4">
            <div className="flex items-center justify-between gap-2 bg-gray-50 p-2 rounded-md">
              <div className="flex items-center gap-2">
                <IoSearchOutline size={20} />

                <p className="text-base font-medium">Busqueda restaurante 1</p>
              </div>

              <button className="text-red-500">
                <AiOutlineDelete size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
