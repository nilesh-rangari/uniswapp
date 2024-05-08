import { useEffect, useState } from "react"
import AppNavbar from "../components/AppNavbar";

function AppLandingPage() {
    const [inputPayValue, setInputPayValue] = useState(""); 
    const [inputReceiveValue, setInputReceiveValue] = useState("");
    
    const [data, setData] = useState(null);

    const [coin, setCoin] = useState("ETH")
    const [coinPrice, setCoinPrice] = useState(0)

    const [coin2, setCoin2] = useState("Select token")
    const [coinPrice2, setCoinPrice2] = useState(0)

    
    
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.coincap.io/v2/assets');
            // const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setData(json.data);
            console.log(json.data[1].priceUsd)
            // setData(json);
            // console.log(json[0].id)
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();
      }, []);

      useEffect(() => {

      }, [])

    
    let toShow = showModal ? "block" : "hidden"

    useEffect(() => {
        // Convert the value of coin1 to coin2
        // Here you can use any conversion logic, for example, a simple ratio

        ((coin2 === "Select token") && (inputPayValue!=="")) ? setInputReceiveValue((coinPrice*parseInt(inputPayValue))/coinPrice2) : null

        const convertedValue = ((coinPrice*parseInt(inputPayValue))/coinPrice2) // Example: coin1 is twice the value of coin2
        setInputReceiveValue(convertedValue);
      }, [inputPayValue,coin2,coinPrice,coinPrice2]);

    const handlePayChange = (event) => { 
        const input = event.target.value;
        // Allow only numbers 

        const payValue = input.replace(/[^0-9.]/g, ""); 
        setInputPayValue(payValue); 
    }; 

    const handleReceiveChange = (event) => { 
        const input = event.target.value;
        // Allow only numbers 

        const receiveValue = input.replace(/[^0-9.]/g, ""); 
        setInputReceiveValue(receiveValue); 
    }; 
    
    let modalContent = (<div className={`${toShow} fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}>
                            <div className="ablsolute p-5 w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div className="relative rounded-lg shadow bg-[#131313]">
                                    {/* <!-- Modal header --> */}
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-[#9b9b9b]">
                                        <h3 className="text-lg font-semibold text-white">
                                            Select a token
                                        </h3>
                                        <button type="button" 
                                                className="text-white bg-transparent hover:text-[#9b9b9b] rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center "
                                                data-modal-toggle="crypto-modal"
                                                onClick={()=> setShowModal(false)}>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                     {/* <!-- Modal body --> */}
                                     <div 
                                        className="p-4 md:p-5 max-h-[400px] overflow-y-scroll"
                                        style={{ scrollbarWidth: 'none'}}
                                        >
                                        <p className="text-sm font-normal text-gray-400">Popular Tokens</p>
                                        <ul className="my-4 space-y-3">
                                        {(data != null) ? (data.map(coins => (
                                            <li key={coins.id} onClick={() => {setCoin(coins.symbol); setShowModal(false); setCoinPrice(coins.priceUsd) }}>
                                                <a href="#" className="flex items-center p-3 text-base font-bold text-white rounded-lg bg-[#131313] hover:bg-[#1b1b1b] group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path 
                                                            d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" 
                                                            fill="#3259A5"/>
                                                        <path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" 
                                                        fill="white"/>
                                                    </svg>
                                                    <div className="flex flex-col ">
                                                        <span className="flex-1 ms-3 whitespace-nowrap font-light text-[16px] text-white">{coins.id}</span>
                                                        <span className="flex-1 ms-3 whitespace-nowrap font-light text-[12px] text-[#9b9b9b]">{coins.symbol}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        ))) : ""}
                                        </ul>
                                        {/* <ul className="my-4 space-y-3">
                                            <li>
                                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                                                    <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
                                                    <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg>
                                                    <span className="flex-1 ms-3 whitespace-nowrap">Coinbase Wallet</span>
                                                </a>
                                            </li>
                                            <li>
                                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg>
                                                    <span className="flex-1 ms-3 whitespace-nowrap">Coinbase Wallet</span>
                                                </a>
                                            </li>
                                            <li>
                                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg>
                                                    <span className="flex-1 ms-3 whitespace-nowrap">Coinbase Wallet</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
                                                    <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                                                </a>
                                            </li>
                                        </ul> */}
                                    </div>
                                   
                                </div>
                            </div>
                        </div>)

    let displayModal = showModal ? modalContent : null

    let toShow2 = showModal2 ? "block" : "hidden"


    let modalContent2 = (<div className={`${toShow2} fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}>
                            <div className="ablsolute p-5 w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div className="relative rounded-lg shadow bg-[#131313]">
                                    {/* <!-- Modal header --> */}
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-[#9b9b9b]">
                                        <h3 className="text-lg font-semibold text-white">
                                            Select a token
                                        </h3>
                                        <button type="button" 
                                                className="text-white bg-transparent hover:text-[#9b9b9b] rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center "
                                                data-modal-toggle="crypto-modal"
                                                onClick={()=> setShowModal(false)}>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                     {/* <!-- Modal body --> */}
                                     <div 
                                        className="p-4 md:p-5 max-h-[400px] overflow-y-scroll"
                                        style={{ scrollbarWidth: 'none'}}
                                        >
                                        <p className="text-sm font-normal text-gray-400">Popular Tokens</p>
                                        <ul className="my-4 space-y-3">
                                        {(data != null) ? (data.map(coins => (
                                            <li key={coins.id} onClick={() => {setCoin2(coins.symbol); setShowModal2(false); setCoinPrice2(coins.priceUsd) }}>
                                                <a href="#" className="flex items-center p-3 text-base font-bold text-white rounded-lg bg-[#131313] hover:bg-[#1b1b1b] group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path 
                                                            d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" 
                                                            fill="#3259A5"/>
                                                        <path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" 
                                                        fill="white"/>
                                                    </svg>
                                                    <div className="flex flex-col ">
                                                        <span className="flex-1 ms-3 whitespace-nowrap font-light text-[16px] text-white">{coins.id}</span>
                                                        <span className="flex-1 ms-3 whitespace-nowrap font-light text-[12px] text-[#9b9b9b]">{coins.symbol}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        ))) : ""}
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>)

    let displayModal2 = showModal2 ? modalContent2 : null

    let buttonStyleChange = (coin2 !== "Select token") ? "bg-[#131313] hover:bg-opacity-80 font-semibold" : "bg-[#fc72ff] min-w-[180px]"

    return(
        <>
            <AppNavbar/>
            <div className="w-screen h-screen flex flex-row justify-center items-start bg-[#171616] px-8 py-12">       

                <div className="flex flex-col justify-center items-center gap-6 mt-4">
                    {/* header container */}
                    <div className="text-center w-full h-auto">
                        <h1 
                            className="text-4xl text-white text-center flex flex-col min-[320px]:text-[36px] sm:text-[52px] md:text-[64px] animate-fade-up">
                                <span className="flex justify-center text-center">
                                    <span className="transition animate-fade-up delay-100"> Swap </span> 
                                    <span className="transition animate-fade-up delay-300 ml-4"> anytime,</span>
                                </span>
                                <span className="leading-[120%] animate-fade-up delay-700">
                                    anywhere.
                                </span>
                        </h1>
                    </div>
                    
                    {/* main container */}
                    <div className="flex flex-col justify-center gap-1 items-center bg-[#131313] max-w-[480px] p-2 rounded-[24px] animate-fade-up delay-1000">
                        
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
                                    {/* dropdown menu   */}
                                    <div className="">
                                        <button 
                                            id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" 
                                            className="text-white text-[20px] flex bg-[#131313] hover:bg-opacity-80 font-semibold rounded-full px-3 py-1 text-center items-center" 
                                            type="button"
                                            onClick={() => setShowModal(true)}
                                            >
                                                {coin}
                                            <svg className="w-3.5 h-3.5 ms-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="pt-2">
                                    <p className="text-[rgb(125,125,125)] text-[14px]">
                                        {(inputPayValue!=="") ? `$${(coinPrice*parseInt(inputPayValue))}` : ""}
                                    </p>
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
                                    type="number"
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
                                            className={`${buttonStyleChange} text-white flex text-[20px] font-medium rounded-full px-3 py-1 text-center items-center`} 
                                            type="button"
                                            onClick={() => setShowModal2(true)}
                                            >
                                                {coin2}
                                            <svg className="w-3.5 h-3.5 ms-3 items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <p className="text-[rgb(125,125,125)] text-[14px]">
                                        {(inputPayValue!=="") ? `$${(coinPrice*parseInt(inputPayValue))}` : ""}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* button container */}
                        <div className="w-full">
                            <button className="w-full p-4 text-center bg-[rgb(49,28,49)] text-[rgb(252,114,255)] text-xl font-[535] rounded-[16px] hover:opacity-80">Connect Wallet</button>
                        </div>
                    </div>
                    <div className="max-w-[480px] text-center px-6 animate-fade-up delay-1000">
                        <p className="text-[rgb(125,125,125)] text-[14px] font-normal" >The largest onchain marketplace. Buy and sell crypto on Ethereum and 7+ other chains.</p>
                    </div>
                </div>
                {displayModal}
                {displayModal2}
            </div>
        </>
    )
}

export default AppLandingPage

