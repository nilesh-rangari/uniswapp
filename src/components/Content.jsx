import bgStars from "../assets/glimmer_bg.svg";
import apps from "../assets/apps.png";
import developerImage from '../assets/developer.png';
import unigrants from '../assets/unigrants.png';
import horseCard from '../assets/horse-card.png';

function Content() {
    return(
        <main className="bg-[#191b1f] max-w-[1600px] w-full h-full px-6 sm:px-14 lg:px-20">
            {/* className="bg-[#191b1f] w-full h-full" */}

            {/* first section */}

            {/* <div className="">
            className="bg-[#191b1f] h-screen w-full mx-auto flex justify-center mb-10"
                <div className="relative w-full overflow-clip" style={{ backgroundImage: `url(${bgStars})` }}>
                        <div className="relative inset-0 flex flex-wrap flex-col justify-end items-start p-10">
                            <h1 className="text-white text-left text-[42px] sm:text-[56px] w-full sm:w-full gap-3 mb-5">
                                <span className="font-light mr-3 my-0">
                                    UNISWAP
                                </span>
                                <span className="font-semibold">
                                PROTOCOL
                                </span>
                            </h1>
                            <p className="font-light max-w-[780px] text-2xl text-white mb-5">
                                    Swap, earn, and build on the leading decentralized
                                    crypto trading protocol.
                            </p>
                            <button className="min-[960px]:hidden px-2 py-3 rounded-lg cursor-pointer text-white bg-[#ff007a] mb-8">
                                <a target="_blank" href="https://app.uniswap.org/" className="">
                                    Launch App
                                </a>
                            </button>
                                
                                <nav className="flex gap-4">
                                    <a href="https://twitter.com/Uniswap" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.275 5.924c-.503.223-1.02.411-1.548.564a6.842 6.842 0 0 0 1.393-2.45.516.516 0 0 0-.755-.6 12.181 12.181 0 0 1-3.6 1.422 6.904 6.904 0 0 0-4.809-1.96 6.877 6.877 0 0 0-6.813 7.757A17.587 17.587 0 0 1 3.072 4.253a.516.516 0 0 0-.846.067 6.866 6.866 0 0 0-.93 3.454c0 1.655.59 3.225 1.634 4.452a5.816 5.816 0 0 1-.919-.41.516.516 0 0 0-.767.44v.091c0 2.47 1.33 4.695 3.362 5.908a5.882 5.882 0 0 1-.522-.076.516.516 0 0 0-.588.664 6.867 6.867 0 0 0 5.032 4.605 12.153 12.153 0 0 1-6.497 1.854c-.486 0-.976-.029-1.455-.085a.517.517 0 0 0-.339.946A18.525 18.525 0 0 0 10.255 29.1c6.994 0 11.37-3.298 13.808-6.065 3.041-3.45 4.785-8.016 4.785-12.528 0-.189-.003-.38-.009-.569a13.355 13.355 0 0 0 3.074-3.255.516.516 0 0 0-.638-.759Z"></path>
                                    </svg>
                                    </a>
                                    <a href="https://github.com/Uniswap" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                    </a>
                                    <a href="https://discord.gg/FCfyBSbCU5" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 fill-white" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z"></path>
                                    </svg>
                                    </a>
                                    
                                </nav>
                                
                        </div>
                </div> 
            </div> */}


            <div className="bg-[#191b1f] h-screen w-full mx-auto flex justify-center mb-16 lg:mb-16">
                <div className="absolute h-screen w-full bg-cover" style={{ backgroundImage: `url(${bgStars})` }}>
                        <div className="absolute inset-0 flex flex-col justify-end items-start px-6 sm:px-14 lg:px-20">
                            <h1 className="text-white text-left text-[42px] flex flex-col sm:flex-row sm:text-[56px] sm:w-full text-wrap mb-5">
                                <span className="font-light mr-3 my-0">
                                    UNISWAP
                                </span>
                                <span className="font-semibold">
                                PROTOCOL
                                </span>
                            </h1>
                            <p className="font-light max-w-[780px] text-2xl text-white mb-5">
                                    Swap, earn, and build on the leading decentralized
                                    crypto trading protocol.
                            </p>
                            <button className="min-[960px]:hidden px-2 py-3 rounded-lg cursor-pointer text-white bg-[#ff007a] mb-8">
                                <a target="_blank" href="https://app.uniswap.org/" className="">
                                    Launch App
                                </a>
                            </button>
                                
                                <nav className="flex gap-4">
                                    <a href="https://twitter.com/Uniswap" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.275 5.924c-.503.223-1.02.411-1.548.564a6.842 6.842 0 0 0 1.393-2.45.516.516 0 0 0-.755-.6 12.181 12.181 0 0 1-3.6 1.422 6.904 6.904 0 0 0-4.809-1.96 6.877 6.877 0 0 0-6.813 7.757A17.587 17.587 0 0 1 3.072 4.253a.516.516 0 0 0-.846.067 6.866 6.866 0 0 0-.93 3.454c0 1.655.59 3.225 1.634 4.452a5.816 5.816 0 0 1-.919-.41.516.516 0 0 0-.767.44v.091c0 2.47 1.33 4.695 3.362 5.908a5.882 5.882 0 0 1-.522-.076.516.516 0 0 0-.588.664 6.867 6.867 0 0 0 5.032 4.605 12.153 12.153 0 0 1-6.497 1.854c-.486 0-.976-.029-1.455-.085a.517.517 0 0 0-.339.946A18.525 18.525 0 0 0 10.255 29.1c6.994 0 11.37-3.298 13.808-6.065 3.041-3.45 4.785-8.016 4.785-12.528 0-.189-.003-.38-.009-.569a13.355 13.355 0 0 0 3.074-3.255.516.516 0 0 0-.638-.759Z"></path>
                                    </svg>
                                    </a>
                                    <a href="https://github.com/Uniswap" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                    </a>
                                    <a href="https://discord.gg/FCfyBSbCU5" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 fill-white" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z"></path>
                                    </svg>
                                    </a>
                                    
                                </nav>
                                
                        </div>
                </div> 
            </div>


            {/* second section */}
            <div className="bg-[#191b1f] min-[960px]:block hidden lg:mb-16">
            {/* className="min-[960px]:block hidden w-full bg-[#191b1f] z-20 p-16 mb-32" */}
				<div className="flex justify-center">
					<div className="flex w-2/3 justify-between items-center m-0 text-white">
									<div className="flex flex-col items-center mr-3">
										<span className="text-5xl font-bold">$1.8T+</span>
										<p className="text-sm font-light mt-3">
											Trade Volume
										</p>
									</div>
									<div className="flex flex-col items-center mr-3">
										<span className="text-5xl font-bold">228M+</span>
										<p className="text-sm font-light mt-3">
											All Time Trades
										</p>
									</div>
									<div className="flex flex-col items-center mr-3">
										<span className="text-5xl font-bold">300+</span>
										<p className="text-sm font-light mt-3">
											Integrations
										</p>
									</div>
									<div className="flex flex-col items-center">
										<span className="text-5xl font-bold">4,400+</span>
										<p className="text-sm font-light mt-3">
											Community Delegates
										</p>
									</div>
					</div>
				</div>
			</div>

            {/* 3rd section */}
            <div className="mb-16 lg:mb-16">
                <div className="w-full flex flex-col items-start justify-start min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
                    <div className="w-full">
                        <a className="text-white text-[18px] font-normal " href="https://uniswap.org/ecosystem">UNISWAP ECOSYSTEM →</a>
                        <h1 className="max-w-[380px] text-white text-[32px] my-5">A growing network of DeFi Apps.</h1>
                        <p className="max-w-[390px] text-xl text-[#888D9B] font-light">
                            Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all.
                        </p>
                    </div>
                    <div className="relative min-[960px]:max-w-xl min-[960px]:mr-3 mx-auto mb-3 mt-8">
                        <img className="w-full object-cover min-h-[290px] rounded-[24px] border border-[#ffffff30]" src={apps} alt="apps image"/>
                        <div className="absolute inset-0 flex-col items-start justify-start p-6">
                            <h1 className="text-white text-5xl font-bold">300+</h1>
                            <p className="text-[#a3a3a3] text-xl">Integrations</p>
                            <a target="_blank" href="https://uniswap.org/ecosystem">
                                <button className="px-[12px] py-[10px] text-white bg-[#35373a] rounded-[10px]">Explore all ↗</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th section */}

            <div className="mb-16 lg:mb-16">
                <a href="https://uniswap.org/developers">
                    <h1 className="my-4 text-white text-[18px] font-normal">DEVELOPERS →</h1>
                </a>
                <div className="flex flex-col justify-between lg:flex-row lg:justify-between lg:gap-4">
                    <div className="sm:flex-row sm:justify-between flex-col">
                        <div className="relative w-full mx-auto">
                            <img className="w-full object-cover min-h-[350px] rounded-[24px] border border-[#ffffff30]" src={developerImage} alt="apps image"/>
                            <div className="absolute inset-0 flex-col items-start justify-end self-end p-5 sm:p-6">
                                <h3 className="text-white text-[24px] md:text-[32px] mb-4">Superpowers for DeFi developers.</h3>
                                <p className="text-[16px] md:text-xl text-[#888D9B] font-light mb-4">Build Defi apps and tools on the largest crypto project on Ethereum. Get started with quick start guides, protocol documentation, a Javascript SDK, and fully open source code.</p>
                                <a target="_blank" href="https://docs.uniswap.org/">
                                    <button className="px-[12px] py-[10px] text-white bg-[#35373a] rounded-[12px] text-[16px]">Documentation ↗</button>
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 mb-4 lg:mt-4 lg:mb-0 gap-4 flex w-full flex-col sm:flex-row sm:justify-between">
                             <button className="flex w-full justify-between text-[20px] text-white bg-[#FFFFFF05] rounded-[20px] p-6 border border-[#ffffff30]">
                                <a target="_blank" href="https://uniswap.org/whitepaper-v3.pdf">
                                        V3 Whitepaper
                                </a>
                                <p> ↗</p>
                            </button>
                            <button className=" flex w-full justify-between text-[20px] text-white bg-[#FFFFFF05] rounded-[20px] p-6 border border-[#ffffff30]">
                                <a target="_blank" href="https://github.com/Uniswap">
                                        Github
                                </a>
                                <p>↗</p>
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF05] lg:max-w-[35%] rounded-[24px] p-6 lg:p-8 border border-[#ffffff30] md:w-auto">
                        <div className="flex-col items-start justify-start">
                                <img src={unigrants} alt="unigrants image" />
                                <h3 className="text-white text-xl mt-4">Apply for funding from the Uniswap Grants Program</h3>
                                <p className="text-xl text-[#FFFFFF99] font-light my-4">Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps, tools, and activities on the Uniswap Protocol.</p>
                                <a target="_blank" href="https://www.uniswapfoundation.org/">
                                    <button className="px-[12px] py-[10px] text-white bg-[#35373a] rounded-[12px]">Learn more ↗</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th section */}

            <div className="mb-16 lg:mb-16">
                <a href="https://uniswap.org/governance">
                    <h1 className="my-4 text-white text-[18px] font-normal">PROTOCOL GOVERNANCE →</h1>
                </a>
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
                    <div className="h-full">
                        <div className="relative w-full h-full mx-auto">
                                <img className="w-full object-cover min-h-[350px] rounded-[24px] border border-[#ffffff30]" src={horseCard} alt="apps image"/>
                                <div className="absolute inset-0 flex flex-col justify-between h-full p-6">
                                    <div>
                                        <h3 className="text-white text-[24px] lg:text-[32px] mb-4 pr-4">Governed by the community.</h3>
                                        <p className="text-xl text-[#888D9B] font-light mb-4">
                                            The Uniswap Protocol is managed by a global community of UNI token holders and delegates.
                                        </p>
                                    </div>
                                    <div className="">
                                        <a target="_blank" href="https://docs.uniswap.org/concepts/governance/guide-to-voting">
                                            <button className="px-[12px] py-[10px] text-white bg-[#35373a] rounded-[10px] text-[16px]">Read More ↗</button>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="flex-col justify-evenly">
                        <div className="p-6 border border-[#ffffff30] bg-[#ffffff05] rounded-[20px]">
                                <a target="_blank" href="https://gov.uniswap.org/">
                                    <button>
                                        <h3 className="text-white text-xl text-start mb-3">Governance Forum ↗</h3>
                                        <p className="text-[16px] text-[#FFFFFF99] font-light text-start">Participate by proposing upgrades and discussing the future of the protocol with the Uniswap community.</p>
                                    </button>
                                </a>
                        </div>
                        <div className="p-6 my-6 border border-[#ffffff30] bg-[#ffffff05] rounded-[20px]">
                                <a target="_blank" href="https://sybil.org/#/delegates/uniswap">
                                    <button>
                                        <h3 className="text-white text-xl text-start mb-3">Sybil ↗</h3>
                                        <p className="text-[16px] text-[#FFFFFF99] font-light text-start">Vote on offchain proposals with the Snapshot interface. Votes are weighted by the number of UNI delegates.</p>
                                    </button>
                                </a>
                        </div>
                        <div className="p-6 border border-[#ffffff30] bg-[#ffffff05] rounded-[20px]">
                                <a target="_blank" href="https://app.uniswap.org/vote">
                                    <button>
                                        <h3 className="text-white text-xl text-start mb-3">Governance Portal ↗</h3>
                                        <p className="text-[16px] text-[#FFFFFF99] font-light text-start">Vote on official Uniswap governance proposals and view past proposals.</p>
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Content





