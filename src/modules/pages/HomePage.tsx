import { Navbar } from "../../components/Navbar";
import { CardResturant } from "../../components/CardResturant";
import { FilterByRestaurant } from "../../components/FilterByRestaurant";

export const HomePage = () => {
  return (
    <>
      <Navbar />

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

          <FilterByRestaurant />

          <div>
            <h2 className="text-2xl font-semibold my-6">
              Restaurantes cercanos
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CardResturant />
              <CardResturant />
              <CardResturant />
              <CardResturant />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
