import { useState } from "react"

function AppLandingPage() {
    const [inputPayValue, setInputPayValue] = useState(""); 
    const [inputReceiveValue, setInputReceiveValue] = useState(""); 
  
    const handlePayChange = (event) => { 
        const input = event.target.value;
        // Allow only numbers 

        const payValue = input.replace(/[^0-9]/g, ""); 
        setInputPayValue(payValue); 
    }; 

    const handleReceiveChange = (event) => { 
        const input = event.target.value;
        // Allow only numbers 

        const receiveValue = input.replace(/[^0-9]/g, ""); 
        setInputReceiveValue(receiveValue); 
    }; 


    return(
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-[#171616]">

            <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-center w-full h-auto">
                     <h1 className="text-4xl text-white flex flex-col min-[320px]:text-[36px] sm:text-[52px] md:text-[64px]">Swap anytime, <span className="leading-[120%]">anywhere.</span></h1>
                </div>
                {/* main container */}
                <div className="flex flex-col justify-center gap-1 items-center bg-[#131313] max-w-[480px] p-2 rounded-[24px]">
                    
                    {/* first container  */}
                    <div className="rounded-[20px] p-4 min-h-11  bg-[#1b1b1b] h-[120px] w-full">
                        <div>
                            <div>
                            <h1 className="text-[rgb(125,125,125)] text-[14px] font-normal">You pay</h1>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="mt-1">
                                    <input 
                                        type="text"
                                        value={inputPayValue}
                                        onChange={handlePayChange} 
                                        className="w-full outline-none text-white text-left text-4xl font-[485] max-h-11 bg-[#1b1b1b] caret-white placeholder-[#363636]"
                                        placeholder="0" 
                                    />
                                </div>
                                {/* dropdown menu     */}
                                <div className="">
                                    <button 
                                        id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" 
                                        className="text-white text-[24px] flex bg-[#131313] hover:bg-opacity-80 font-semibold rounded-full px-3 py-1 text-center items-center" 
                                        type="button">
                                            ETH
                                        <svg className="w-3.5 h-3.5 ms-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="pt-2">
                                <p className="text-[rgb(125,125,125)] text-[14px]">$23987646.45</p>
                            </div>
                        </div>
                    </div>

                    {/* Second container  */}
                    <div className="rounded-[20px] p-4 min-h-11  bg-[#1b1b1b] h-[120px] w-full">
                        <div>
                            <div>
                            <h1 className="text-[rgb(125,125,125)] text-[14px] font-normal">You receive</h1>
                            </div>

                            <div className="flex justify-between items-center">
                            <div className="mt-1">
                              <input 
                                type="text"
                                value={inputReceiveValue}
                                onChange={handleReceiveChange} 
                                className="w-full outline-none text-white text-left text-4xl font-[485] max-h-11 bg-[#1b1b1b] caret-white placeholder-[#363636]"
                                placeholder="0" 
                              />
                            </div>
                            {/* dropdown menu     */}
                                <div>
                                    <button 
                                        id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" 
                                        className="text-white flex text-[24px] bg-[#fc72ff] w-[200px] font-medium rounded-full px-3 py-1 text-center items-center" 
                                        type="button">
                                            Select Token
                                        <svg className="w-3.5 h-3.5 ms-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <p className="text-[rgb(125,125,125)] text-[14px]">$23987646.45</p>
                            </div>
                        </div>
                    </div>

                    {/* button container */}
                    <div className="w-full">
                        <button className="w-full p-4 text-center bg-[rgb(49,28,49)] text-[rgb(252,114,255)] text-xl font-[535] rounded-[16px] hover:opacity-80">Connect Wallet</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AppLandingPage

