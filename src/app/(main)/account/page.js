import { faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import donors from '../../../../lib/data'

async function getUser() {
    try {
        const response = await fetch("http://localhost:4040/user");
        const user = await response.json(); // Await JSON conversion once
        
        console.log(user); // Log the parsed data
        
        return user; // Return the parsed data
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}
export default async function Account() {
    const data = await getUser()
    const d = await data.data[0]
    return (
        <div className="">
            <header className="flex py-2 justify-between border-b border-mainborder ">
                <div className="flex">
                    <p className="mx-5 py-2  font-bold">Welcome {d.name}</p>
                </div>
                <div className="mx-5 border-[1px] border-red-950 px-4 bg-white py-2 rounded-full  text-red-950"><FontAwesomeIcon icon={faPowerOff} style={{ width: 20 }} className="mx-1" /> Logout</div>
            </header>
            <div className="h-[60px] bg-mainbackground"></div>
            <div className="user-profile flex justify-center"><FontAwesomeIcon icon={faUser} style={{ width: 96, height: 96 }} className="text-mainbackground  p-5 rounded-full border-3 bg-white mb-[-80px]" /></div>
            <div className="body bg-white w-100 text-gray-700 mt-[90px] pt-4">
                <div className="flex justify-center items-center flex-col">
                    <p className="font-bold text-2xl"> {d.name}</p>
                    <p className=" text-gray-600"> {d.email}</p>
                    <p className="">+91  {d.phone}</p>

                    <p className="text-xl mt-3">Address : </p>
                    <div> {d.coordinate}</div>
                    <div>   {d.district}</div>
                    <div> {d.state}</div>
                </div>
                <div className="border-t border-gray-100 px-8 my-4 py-2">
                    <div className="flex justify-between ">
                        <p>Are you available</p>
                        <p>{d.available ? ("Yes"): ("No")}</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8 my-4 py-2">
                    <div className="flex justify-between ">
                        <div>
                            <p>Age</p>
                            <p> {d.age}</p>
                        </div>
                        <div>
                            <p>Gender</p>
                            <p>Male</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Location</p>
                        <p>{d.location}</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>State</p>
                        <p>{d.state}</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Diabetic</p>
                        <p>{d.medicaldata.diabetic ? ("Yes"): ("No")}</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Allergies</p>
                        <p>
                        {d.medicaldata && d.medicaldata.allergies.map((data, index) => (
                          <span key={index}>{data}</span>
                        ))}
                      </p>                    
                      </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Diseases</p><p>
                        {d.medicaldata && d.medicaldata.diseases.map((data, index) => (
                          <span key={index}>{data}</span>
                        ))}
                      </p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Alcohol</p>
                        <p>{d.medicaldata.alcohol ? ("YES"): ("No")}</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Tobacco</p>
                        <p>{d.medicaldata.tobacco ? ("YES"): ("No")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
