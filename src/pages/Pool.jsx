import backgroundImg from '../assets/background.png'

function Pool() {
    return(
        <div className="w-screen h-screen flex flex-row  text-white justify-center items-start bg-[#171616]">
            {/* main conatainer */}
            <div className="max-w-[640px] flex flex-col gap-5 items-center px-2">
                <div 
                    className="bg-cover border border-[#222222] shadow-lg shadow-white-40 flex flex-col p-4 gap-3  rounded-[12px]"
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                    >
                    <div>
                        <h1 className="text-[16px] ">Liquidity provider rewards</h1>
                    </div>
                    <div>
                    <p className="text-[14px]">
                        Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
                    </p>
                    </div>
                    <div>
                    <a 
                        href="https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools"
                        className="text-[14px] underline"
                        
                    >
                        Read more about providing liquidity
                    </a>
                    </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                    <div>
                        <h1 className="text-[20px] font-semibold">Your V2 liquidity</h1>
                    </div>
                    <div className="flex flex-col mt-5 sm:mt-0 sm:flex-row  items-center gap-4 sm:gap-2">
                        <button type="button" className="text-[#fc72ff] hover:border-[#fc72ff] bg-[rgb(49, 28, 49)] border-[0.5px] border-[rgb(49, 28, 49)] text-[16px] px-4 py-2 font-semibold rounded-[12px]">Create a pair</button>
                        <button type="button" className="bg-[#fc72ff] hover:bg-[#ec51f0] text-white text-[16px] px-4 py-2 font-semibold rounded-[12px]">Import pool</button>
                        <button type="button" className="bg-[#fc72ff] hover:bg-[#ec51f0] text-white text-[16px] px-4 py-2 font-semibold rounded-[12px]" >Add V2 liquidity</button>
                    </div>
                </div>
                <div>
                    <p className="p-10 font-semibold text-[16px] text-center">Connect to a wallet to view your liquidity.</p>
                </div>
            </div>
        </div>
    )
}

export default Pool