import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import Select from 'react-select';
import fair from '../assets/fairmoney-logo.png';
import NigeriaFlag from '../assets/naija.png';
import KenyaFlag from '../assets/kenya.png';
import EgyptFlag from '../assets/egypt.png';
import SouthAfricaFlag from '../assets/south.png';
import EthiopiaFlag from '../assets/ethopia.png';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const countries = [
  { value: 'ng', label: <img src={NigeriaFlag} alt="Nigeria" />, flag: NigeriaFlag },
  { value: 'ke', label: <img src={KenyaFlag} alt="Kenya" />, flag: KenyaFlag },
  { value: 'eg', label: <img src={EgyptFlag} alt="Egypt" />, flag: EgyptFlag },
  { value: 'za', label: <img src={SouthAfricaFlag} alt="South Africa" />, flag: SouthAfricaFlag },
  { value: 'et', label: <img src={EthiopiaFlag} alt="Ethiopia" />, flag: EthiopiaFlag },
];

const customStyles = {
  control: (styles) => ({
    ...styles,
    width: 100,
    height:50, // Adjust the width as needed
    background: `url(${NigeriaFlag}) no-repeat`,
    backgroundSize: '0px 20px', // Adjust the size as needed
  }),
};


const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Check local storage for theme preference and set the initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []); // The empty dependency array ensures this effect runs only once on component mount
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };
  
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
 

  const togglePasswordVisibilty =()=>{
    setShowPassword(!showPassword);
  };
 




  return (
    <>
    <div className="dashboard dark:bg-gray-900 ">
    <h1 className="text-white"></h1>
    <div className="theme-switcher flex items-center dark:bg-black p-2 rounded-md shadow-inner">
    <div className={`theme-switcher flex gap-2 items-center ${isDarkMode ? 'dark:bg-black' : 'bg-white'} p-2 rounded-md shadow-inner`}>
      <p className="ml-2 text-black dark:text-white">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-inner'}`}
        >
          <div className="flex   space-x-5">
            {isDarkMode ? <IoSunnyOutline className='bg-gray-400 text-white h-5 shadow-inner dark:bg-gray-800 dark:text-gray-600  rounded w-7'  /> : <IoMoonOutline  />}
            {isDarkMode ? <IoMoonOutline className='dark:text-white '/> : <IoSunnyOutline   className='text-white bg-gray-400 h-5 shadow-inner dark:bg-black  rounded w-7' />}
          </div>
        </button>
       
      </div>
       <div>

  </div>
    
    </div>
    {/* Other content of your Dashboard */}
    
  </div>
 

    
    <div className=' items-center w-full px-5 py-7 md:px-12 md:py-14 font-Inter lg:px-20 lg:py-1'>
      
      <div className="flex justify-center pb-5 md:pb-10">
        <img src={fair} alt="fair" />
        </div>

        <div className=''>
        <h1 className="text-2xl text-center font-bold md:text-3xl dark:text-white">Welcome back!</h1>
        <h2 className="text-md pb-1 text-gray-400 tracking-wider md:text-xl text-center md:pb-3">Continue to send and receive money with ease.</h2>
        </div>

        <div className="flex flex-col justify-center py-2 md:py-4">
          
            <div className="px-5 md:px-10 lg:px-80  ">
              <h1 className="text-md md:text-lg font-bold dark:text-white">Phone number</h1>
              <div className='flex justify-center items-center gap-5 pb-7'>
              <div className="">
     
      <Select
        options={countries}
        onChange={handleCountryChange}
        value={selectedCountry}
        styles={customStyles}
      />
    </div>
              <input type="text" placeholder='901 732 5355' className='rounded border border-gray-500 h-12 w-full  px-5 font-semibold font-inter' required />
              </div>
              <div className='relative'>
                <span className='flex justify-between'>
                  <h1 className='font-bold dark:text-white'>Fairmoney Pin</h1>
                  <h1 className='text-gray-400 dark:text-white dark:hover:opacity-50'>Forgot your PIN?</h1>
                </span>
              <input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={handlePasswordChange}  className='rounded border border-gray-500 h-12 w-full  px-5 font-semibold font-inter' required/>
              <span  onClick={togglePasswordVisibilty} className='absolute right-4 top-1/2 transform-translate-y-1/2 cursor-pointer'>
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              

              </span>
            </div>
          
            <a
        href= '/Dashboard' 
        className='flex justify-center mt-10 text-center transform -translate-y-1/2 bg-black text-white dark:bg-white dark:text-green-500 hover:opacity-50 hover:text-white rounded-md px-2 py-2'
          
      >
        Log In
      </a>
            </div>
            <div className="text-center dark:text-white  pt-4">
              <a href="">Are you new user? </a>
              <a href="" className='font-bold hover:opacity-50 '>Create an account</a>
            </div>
            
            <h1 className="text-center text-gray-500 pt-10 text-sm">
              FairMoney MFB is licencensed by the central bank of Nigeria.
              <h1>All deposits are insured by NDIC</h1>
            </h1>

        </div>

    </div>
    </>
  )
}

export default Login