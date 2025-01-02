const LoginPage = () => {
    return (
        <div className="mb-20">
            <p className="py-3 text-3xl">Hello, Welcome to HealthCare!</p>
            <p className="">3 Easy steps to join our Usaver Community to Find a Donor or Become a Donor.</p>
            <div className="flex flex-col items-center mt-5">
                <div className=" my-5 px-3 flex justify-center items-center">
                    <div className=" py-2 border-b border-gray-500 text-lg">+91</div>
                    <input type="text" placeholder="Mobile Number" className="text-lg tracking-wide w-[100%] max-w-[300px]  p-2  focus:outline-none  no-spin  border-b border-gray-700" />
                </div>
                <button className="bg-mainbackground rounded-full text-white py-2 px-6 w-30">Get OTP</button>
            </div>
        </div>
    )
}

export default LoginPage