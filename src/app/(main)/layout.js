import BottomBar from "../_comp/bottombar";


export default function RootLayout({ children }) {
  return (
      <div className="max-w-[36rem] text-white  w-[100%] h-[140px] relative">
        <div className="pb-[68px] bg-foreground">
          <div className="bg-mainbackground">
            {children}
          </div>
        </div>
        <BottomBar />
      </div>
  );
}
