import Image from "next/image";
import { IoBrowsersOutline, IoCalculatorOutline, IoFootball, IoHeart, IoLogoReact } from "react-icons/io5";
import SiderbarMenuItems from "./SiderbarMenuItems";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={20} />,
    title: "Dashboard",
    subtitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={20} />,
    title: "Counter",
    subtitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={20} />,
    title: "Pokemons",
    subtitle: "Generacion estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart size={20} />,
    title: "Favorites",
    subtitle: "Pokemons Favoritos",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-centertext-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Yahinniel</span>
          <span className="text-blue-500">Page</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src='https://i.pinimg.com/736x/97/27/d1/9727d1e4a024b8607d99782c68d28d0e.jpg'
              alt="User Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Yahinniel Vasquez
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">

        {
          menuItems.map( item => (
            <SiderbarMenuItems
              key={item.path}
              {...item}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
