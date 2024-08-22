import {} from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { FaTabletAlt } from "react-icons/fa";

function Platform() {
  return (
    <div className="p-5 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold text-gray-200">Platform</h1>
      <div className="p-2 mt-5 grid grid-cols-2 gap-8">
        <div className="space-y-3 text-gray-400">
          <h1 className="text-2xl font-bold"> $ 8b</h1>
          <p className="flex items-center space-x-2">
            <FaGlobeAmericas />
            <span className="text-[13px]">Website</span>
          </p>
        </div>
        <div className="space-y-3 text-gray-400">
          <h1 className="text-2xl font-bold"> $ 3b</h1>
          <p className="flex items-center space-x-2">
            <FaAppStoreIos />
            <span  className="text-[13px]">Ios</span>
          </p>
        </div>
        <div className="space-y-3 text-gray-400">
          <h1 className="text-2xl font-bold"> $ 11b</h1>
          <p className="flex items-center space-x-2">
            <DiAndroid />
            <span  className="text-[13px]">Andriods</span>
          </p>
        </div>
        <div className="space-y-3 text-gray-400">
          <h1 className="text-2xl font-bold"> $ 7b</h1>
          <p className="flex items-center space-x-2">
            <FaTabletAlt />
            <span  className="text-[13px]">Tablet</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Platform;
