import { faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import donors from '../../../../lib/data'

export default function Home() {

    return (
        <div className="">
            <header className="flex py-2 justify-between border-b border-mainborder ">
                <div className="flex">
                    <p className="mx-5 py-2  font-bold">Welcome Aditya Raj</p>
                </div>
                <div className="mx-5 border-[1px] border-red-950 px-4 bg-white py-2 rounded-full  text-red-950"><FontAwesomeIcon icon={faPowerOff} style={{ width: 20 }} className="mx-1" /> Logout</div>
            </header>
            <div className="h-[60px] bg-mainbackground"></div>
            <div className="user-profile flex justify-center"><FontAwesomeIcon icon={faUser} style={{ width: 96, height: 96 }} className="text-mainbackground  p-5 rounded-full border-3 bg-white mb-[-80px]" /></div>
            <div className="body bg-white w-100 text-gray-700 mt-[90px] pt-4">
                <div className="flex justify-center items-center flex-col">
                    <p className="font-bold text-2xl">Aditya Raj</p>
                    <p className=" text-gray-600">adityaraj6220@gmail.com</p>
                    <p className="">+91 7050020659</p>

                    <p className="text-xl mt-3">Address : </p>
                    <div>98.415, 48.456</div>
                    <div>Purani Bazar, Santar Muhalla</div>
                    <div>Lakhisarai, Bihar, India</div>
                </div>
                <div className="border-t border-gray-100 px-8 my-4 py-2">
                    <div className="flex justify-between ">
                        <p>Are you available</p>
                        <p>yes</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8 my-4 py-2">
                    <div className="flex justify-between ">
                        <div>
                            <p>Date Of Birth</p>
                            <p>31-12-2000</p>
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
                        <p>Patna</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>State</p>
                        <p>Bihar</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Diabetic</p>
                        <p>Yes</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Allergies</p>
                        <p>Dust, Peanuts</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Diseases</p>
                        <p>Asthama</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Alcohol</p>
                        <p>No</p>
                    </div>
                </div>
                <div className="border-t border-gray-100 px-8  py-2">
                    <div className="flex justify-between ">
                        <p>Tobacco</p>
                        <p>No</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
