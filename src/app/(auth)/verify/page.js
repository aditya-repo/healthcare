const VerifyPage = () => {
    return (
        <div className="mb-20 flex flex-col justify-center items-center">
            <p className="text-[1.6rem] text-gray-900 text-center w-[90%]">OTP has been sent to <span className="text-mainbackground text-[1.8rem]">7050020659</span> via SMS</p>
            <div className="flex flex-col items-center mt-5">
                <div className=" my-2 px-3 flex justify-center items-center">
                    <input type="text" placeholder="OTP" className="text-2xl tracking-widest w-[100%] max-w-[120px] text-center p-2  focus:outline-none  no-spin  border-b border-gray-700" />
                </div>
                <div>30</div>
                <button className="bg-mainbackground rounded-full text-white py-2 mt-3 px-6 w-30">Verify</button>
            </div>
        </div>
    )
}

export default VerifyPage