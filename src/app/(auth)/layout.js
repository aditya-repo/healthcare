import Image from "next/image";
import Logo from "../../../assets/logo.png"

export default function RootLayout({ children }) {
    return (
        <div className="max-w-[36rem] bg-white   w-[100%] relative justify-items-center">
            <div className="h-[100%] flex items-center">
                <div className="bg-white flex flex-col text-red-900 px-[68px] items-center">
                    <Image src={Logo} alt="Logo" className="mb-6"/>
                    {children}
                </div>
            </div>
        </div>
    );
}
