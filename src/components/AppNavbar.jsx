import { Link } from "react-router-dom";

function AppNavbar(){
    return(
        <nav className="flex px-5 py-3 h-[70px] sticky top-0 z-[1020]">
            <div className="flex items-center justify-start">
                <div>
                    {/* logo */}
                </div>
                <div className="flex gap-1 items-center text-center ">
                    <Link className="/swap">
                        <a href="" className=" px-[14px] my-1 text-[#9B9B9B]">Swap</a>
                    </Link>
                        <a href="" className=" px-[14px] my-1 text-[#9B9B9B]">Explore</a>
                        <a href="" className="px-[14px] my-1 text-[#9B9B9B]">NFTs</a>
                    <Link to = "/pool">
                        <a href="" className="px-[14px] my-1 text-[#9B9B9B]">Pool</a>
                    </Link>
                </div>
                <div className="text-[#9B9B9B] p-[9px] py-[14px]">
                    <svg className="w-3.5 h-3.5 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-center self-center">
                <div className="px-3 py-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path d="M21.53 20.47L17.689 16.629C18.973 15.106 19.75 13.143 19.75 11C19.75 6.175 15.825 2.25 11 2.25C6.175 2.25 2.25 6.175 2.25 11C2.25 15.825 6.175 19.75 11 19.75C13.143 19.75 15.106 18.973 16.629 17.689L20.47 21.53C20.616 21.676 20.808 21.75 21 21.75C21.192 21.75 21.384 21.677 21.53 21.53C21.823 21.238 21.823 20.763 21.53 20.47ZM3.75 11C3.75 7.002 7.002 3.75 11 3.75C14.998 3.75 18.25 7.002 18.25 11C18.25 14.998 14.998 18.25 11 18.25C7.002 18.25 3.75 14.998 3.75 11Z" 
                        fill="#9B9B9B">
                    </path>
                </svg>
                    <input 
                        type="search"
                        placeholder="Search tokens and NFT collections"
                        className="bg-[#131313] "
                    />
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar