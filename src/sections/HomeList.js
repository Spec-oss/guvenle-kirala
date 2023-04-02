// import { useEffect, useState } from "react";
// import axios from "axios";
// mock
// import house from '../mock/house';
// icons
import { AiFillHeart } from "react-icons/ai"
import { FcApproval } from "react-icons/fc"
//service
// import HomeService from "../services/HomeService";

export default function HomeList() {
  // const services = new HomeService();
  // const [advertList, setAdvertList] = useState([]);

  // const [data, setData] = useState({
  //   page_number: 1,
  //   number_of_advert: 20,
  //   advert_order_menu_id: 3,
  //   mapData: null,
  //   cityRequest: null,
  //   advertListDetailData: {},
  //   property_type_ids: null,
  // });

  // axios.post(process.env.REACT_APP_API_URL, data).then((response) => {
  //   console.log(response.status);
  // });

  // useEffect(() => {
  //   axios.post(process.env.REACT_APP_API_URL, data, {})
  //   .then(response => {
  //     setAdvertList(response.data.advertListDatas);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }, []);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-10 px-16 gap-4 flex-wrap">
        <div className="shadow-md rounded-lg relative">
          <AiFillHeart className="absolute top-3 right-3 text-red-200 hover:text-red-500" size={24}/>
          <div>
            <img
              alt="Home"
              src="https://picsum.photos/1000?random?=1"
              className="h-56 w-full object-cover rounded-lg"
            />
          </div>

          <div className="p-4">
            <div className="flex gap-x-4 items-center">
              <p className="text-gray-700">15.000 TL / Aylık</p>
              <FcApproval />
            </div>

            <div>
              <p className="text-gray-600">Bostanlı Mah. Karşıyaka, İzmir</p>
              <p className="text-sm text-gray-500">Site içinde Dubleks Daire</p>
            </div>

            <div className="flex justify-between text-gray-500 mt-6">
              <span className="font-medium">280m Ne </span>
              <span className="font-medium">3+1 | 2 Banyo </span>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-lg relative">
          <AiFillHeart className="absolute top-3 right-3 text-red-200 hover:text-red-500" size={24}/>
          <div>
            <img 
              alt="Home"
              src="https://picsum.photos/1000?random?=1"
              className="h-56 w-full object-cover rounded-lg"
            />
          </div>

          <div className="p-4">
            <div className="flex gap-x-4 items-center">
              <p className="text-gray-700">15.000 TL / Aylık</p>
              <FcApproval />
            </div>

            <div>
              <p className="text-gray-600">Bostanlı Mah. Karşıyaka, İzmir</p>
              <p className="text-sm text-gray-500">Site içinde Dubleks Daire</p>
            </div>

            <div className="flex justify-between text-gray-500 mt-6">
              <span className="font-medium">280m Ne </span>
              <span className="font-medium">3+1 | 2 Banyo </span>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-lg relative">
          <AiFillHeart className="absolute top-3 right-3 text-red-200 hover:text-red-500" size={24}/>
          <div>
            <img
              alt="Home"
              src="https://picsum.photos/1000?random?=1"
              className="h-56 w-full object-cover rounded-lg"
            />
          </div>

          <div className="p-4">
            <div className="flex gap-x-4 items-center">
              <p className="text-gray-700">15.000 TL / Aylık</p>
              <FcApproval />
            </div>

            <div>
              <p className="text-gray-600">Bostanlı Mah. Karşıyaka, İzmir</p>
              <p className="text-sm text-gray-500">Site içinde Dubleks Daire</p>
            </div>

            <div className="flex justify-between text-gray-500 mt-6">
              <span className="font-medium">280m Ne </span>
              <span className="font-medium">3+1 | 2 Banyo </span>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-lg relative">
          <AiFillHeart className="absolute top-3 right-3 text-red-200 hover:text-red-500" size={24}/>
          <div>
            <img
              alt="Home"
              src="https://picsum.photos/1000?random?=1"
              className="h-56 w-full object-cover rounded-lg"
            />
          </div>

          <div className="p-4">
            <div className="flex gap-x-4 items-center">
              <p className="text-gray-700">15.000 TL / Aylık</p>
              <FcApproval />
            </div>

            <div>
              <p className="text-gray-600">Bostanlı Mah. Karşıyaka, İzmir</p>
              <p className="text-sm text-gray-500">Site içinde Dubleks Daire</p>
            </div>

            <div className="flex justify-between text-gray-500 mt-6">
              <span className="font-medium">280m Ne </span>
              <span className="font-medium">3+1 | 2 Banyo </span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
