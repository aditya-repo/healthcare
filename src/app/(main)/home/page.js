import { faBars, faBell, faHandRock, faHandshake, faHome, faHospital, faLocationArrow, faMessage, faShare, faTint, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import donors from '../../../../lib/data'
// import LeftSlider from "./_comp/slider";

async function getData() {
  const res = await fetch("http://localhost:4040/receipent", {
    method: "POST",
  });
  return res.json();
}

export default async function Home() {

  const receipents = await getData();
  
  return (
    <div className="">
      <header className="py-4 flex justify-between border-b border-mainborder ">
        <div className="flex">
          <p className="mx-5 font-bold">Welcome Aditya Raj</p>
        </div>
        <div><FontAwesomeIcon icon={faBell} style={{ width: 20 }} className="mx-5" /></div>
      </header>
      <div className="body" >
        <div className="flex justify-center mt-8 px-3">
          <div className="w-[100%] text-white rounded-lg shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center ml-4">
                <div className="flex justify-items-center flex-col items-center">
                  <p className="text-gray-700  text-lg">USAVER-809345</p>
                  <p className="text-gray-700 text-xs">USERID</p>
                </div>
                <div className="flex flex-col items-center justify-center relative">
                  <FontAwesomeIcon icon={faTint} className="w-12 h-12" style={{ color: "red", marginTop: "-24px" }} />
                  <span className="absolute text-white pb-12  text-sm">O+</span>
                  <p className="text-gray-700 mt-2 text-sm">Blood Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-foreground mt-[-52px] h-[64]"></div>
        <div className="px-3 bg-foreground flex flex-col justify-center">
           <div className="slider mb-1 border-2 border-mainborder w-[100%] h-36 rounded-lg shadow-lg bg-white">
            <div className="px-6 py-4"></div>
          </div>
          <div className="flex mt-2 gap-3">
            <div className="shadow-lg rounded-lg w-[50%] bg-white px-6 py-4">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faHandRock} style={{ color: "red", width: 32, height: 32, paddingBottom: "12px" }} />
                <p className="text-gray-700 text-sm">Request For Blood</p>
              </div>
            </div>
            <div className="shadow-lg rounded-lg w-[50%] bg-white px-6 py-4">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faHandshake} style={{ color: "red", width: 45, paddingBottom: "12px", height: 45 }} />
                <p className="text-gray-700 text-sm">Donate Blood</p>
              </div>
            </div>
          </div>
          {receipents.map((data, index)=>{
            return <RequestCard key={index} data={data}/>
          })}
        </div>
      </div>
    </div>
  );
}


const RequestCard = ({data}) => {
  console.log(data);
  
  return (
    <div className="mt-3 rounded-lg bg-white shadow-lg w-[100%]">
      <div className="flex">
        <div className="p-4 flex-none mt-2"><FontAwesomeIcon icon={faUserCircle} style={{ color: "red", width: 36, height: 36 }} /></div>
        <div className="flex-grow py-4">
          <div className="flex justify-between pr-4 font-bold">
            <p className="text-gray-700">{data.contactname}</p>
            <p className="text-red-700">{data.status}</p>
          </div>
          <div className="flex justify-between pr-4 text-sm font-bold">
            <p className="text-gray-700">{data.bloodgroup} ({data.bloodtype})</p> 
            <p className="text-gray-700">{data.unitcount} Units </p>
          </div>
          <p className="text-gray-400 text-sm">{data.hospitalname}, {data.landmark}</p>
          <p className="text-gray-400 text-sm">{data.city},{data.district},  {data.state}</p>
          <p className="text-gray-800 text-sm">Tuesday, Dec 31</p>

          <div className="flex justify-between pr-4 text-sm font-bold mt-2">

            <div className="flex">

              <FontAwesomeIcon icon={faLocationArrow} style={{ color: "blue", width: 20, height: 20 }} className="mx-3" />
              <FontAwesomeIcon icon={faShare} style={{ color: "orangered", width: 20, height: 20 }} className="mx-3" />

            </div><p className="px-4 py-1 text-white bg-green-700 rounded-full">Accept</p>
          </div>
        </div>
      </div>
    </div>

  )
}