"use client"

import { faHome, faHospital, faMessage, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

const BottomBar = () => {
    const [activeTab, setActiveTab] = useState("home")

    const setCurrentTab = (data) => {
        setActiveTab(data)
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center">
            <div className="flex justify-around gap-x-4 p-2 w-full  max-w-[36rem] bg-mainbackground text-white">
                <Link href="/home">
                    <div className="flex flex-col items-center justify-items-center" onClick={() => setCurrentTab('home')}>
                        {activeTab === 'home' ? (
                            <>
                                <FontAwesomeIcon icon={faHome} style={{ width: 24, color: "red" }} className="mt-1" />
                                <div className="text-red-500">Home</div>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faHome} style={{ width: 24 }} className="mt-1" />
                                <div>Home</div>
                            </>
                        )}
                    </div>
                </Link>
                <div className="flex flex-col items-center justify-items-center" onClick={() => setCurrentTab('city')}>
                    {activeTab === 'city' ? (
                        <>
                            <FontAwesomeIcon icon={faHospital} style={{ width: 24, color: "red" }} className="mt-1" />
                            <div className="text-red-500">Your City</div>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faHospital} style={{ width: 24 }} className="mt-1" />
                            <div>Your City</div>
                        </>
                    )}
                </div>
                <div className="flex flex-col items-center justify-items-center" onClick={() => setCurrentTab('chat')}>
                    {activeTab === 'chat' ? (
                        <>
                            <FontAwesomeIcon icon={faMessage} style={{ width: 24, color: "red" }} className="mt-1" />
                            <div className="text-red-500">Chats</div>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faMessage} style={{ width: 24 }} className="mt-1" />
                            <div>Chats</div>
                        </>
                    )}
                </div>
                <Link href={"/account"}>
                <div className="flex flex-col items-center justify-items-center" onClick={() => setCurrentTab('account')}>
                    {activeTab === 'account' ? (
                        <>
                            <FontAwesomeIcon icon={faUserCircle} style={{ width: 24, color: "red" }} className="mt-1" />
                            <div className="text-red-500">Account</div>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faUserCircle} style={{ width: 24 }} className="mt-1" />
                            <div>Account</div>
                        </>
                    )}
                </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomBar
