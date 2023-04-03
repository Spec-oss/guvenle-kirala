// import { useState, useEffect } from "react";
// //service
// import HomeService from "../services/HomeService";
// mock
import houses from "../mock/houses";
// icons
import { AiFillHeart } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";


export default function HomeList() {

  // const services = new HomeService();
  // const [adverts, setAdverts] = useState([]);
  // const data = JSON.stringify({ page_number: 1, number_of_advert: 20 });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await services.getHome(data);
  //     setAdverts(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-10 px-16 gap-4 flex-wrap">
        {houses.map((house,key) => (
          <div className="shadow-md rounded-lg relative" key={house.advert_id}>
            <AiFillHeart
              className="absolute top-3 right-3 text-red-200 hover:text-red-500"
              size={24}
            />
            <div>
              <img
                alt="Home"
                src={house.photo_links}
                className="h-56 w-full object-cover rounded-lg"
              />
            </div>

            <div className="p-4">
              <div className="flex gap-x-4 items-center">
                <p className="text-gray-700">{house.monthly_rental_fee} TL</p>
                <FcApproval />
              </div>

              <div>
                <p className="text-sm text-gray-600">{house.public_address}</p>
                <p className="text-xs text-gray-500">
                  {house.advert_header_text}
                </p>
              </div>

              <div className="flex justify-between text-gray-500 mt-6">
                <span className="font-medium">{house.net_area} m²</span>
                <span className="font-medium">
                  {house.room_number}+{house.lounge_number} | {house.bathroom_number} Banyo
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
