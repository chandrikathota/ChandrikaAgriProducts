'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass, faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState ,useEffect} from 'react';

export default function Navbar() {


    const [isCategoryListOpen, setCategoryListOpen] = useState(false)
    const [isLocationListOpen, setLocationListOpen] = useState(false)
    const [isLanguageListOpen, setLanguageListOpen] = useState(false)
    const [language,setLanguage]=useState("Eng")


    const closeCategoryList = () => {
        setCategoryListOpen(false)
    }
    const openCategoryList = () => {
        setCategoryListOpen(true);setLocationListOpen(false);setLanguageListOpen(false)
    }


    const closeLocationList = () => {
        setLocationListOpen(false)
    }
    const openLocationList = () => {
        setLocationListOpen(true);setCategoryListOpen(false);setLanguageListOpen(false)
    }

    const closeLanguageList = () => {
        setLanguageListOpen(false)
    }
    const openLanguageList = () => {
        setLanguageListOpen(true);setCategoryListOpen(false);setLocationListOpen(false)
    }

    function handleLanguageSelected(selectedLanguage) {
        setLanguage(selectedLanguage.slice(0,3))
        closeLanguageList()
        
    }
    return (
        <>
            {/* Top of the Navbar */}
            <div className='topHeader flex justify-end items-center bg-green-700 h-[24px] w-full text-[12px]'>
                <div>
                    <button className='flex items-center w-[70px]' onClick={isLocationListOpen ? closeLocationList : openLocationList} >
                        <p className=' text-white'>Location <FontAwesomeIcon icon={faChevronDown} style={{ height: '10px', color: 'white', fontSize: '20px', marginLeft: '3px' }} /></p>
                    </button>
                    <div className={`absolute -translate-x-10 translate-y-3 ${isLocationListOpen ? '' : 'hidden'}`}>
                        <ul className='list-none flex flex-wrap items-center justify-center bg-white '>
                            {[
                                { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
                                { value: 'Telengana', label: 'Telangana' },
                                ].map((option) => (
                                <li key={option.value}>
                                    <button className='w-36 h-6 border border-b-gray-400'>
                                    {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <button className='flex items-center w-[50px] mr-5 ml-3' onClick={isLanguageListOpen ? closeLanguageList : openLanguageList}>
                        <p className=' text-white'>{language}</p>
                        <FontAwesomeIcon icon={faChevronDown} style={{ height: '10px', color: 'white', fontSize: '20px', marginLeft: '3px' }} />
                    </button>
                    <div className={`absolute -translate-x-20 translate-y-1 ${isLanguageListOpen ? '' : 'hidden'}`}>
                        <ul className='list-none flex flex-wrap items-center justify-center bg-white '>
                            {[
                                { value: 'English', label: 'English' },
                                { value: 'Telugu', label: 'Telugu' },
                                { value: 'Hindi', label: 'Hindi' },
                                { value: "French", label:'French'}
                                ].map((option) => (
                                <li key={option.value}>
                                    <button className='w-36 h-6 border border-b-gray-400' onClick={() => handleLanguageSelected(option.value)}>
                                    {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* NavBar */}
            <div className='navbar flex flex-wrap sm:justify-between items-center sm:text-[14px] w-full '>
                <div className='capLogo w-1/6 flex justify-center m-auto p-1'>
                    <Image
                        src="/images/CAP_logo.jpeg"
                        alt="CAP_Logo" width={150} height={110}
                    />
                </div>
                <div className='filteringSection flex w-2/6 justify-evenly'>

                    <div className='Categories'>
                        <button className='categoriesText block items-center' onClick={isCategoryListOpen ? closeCategoryList : openCategoryList} >
                            <p className='flex items-center'>Categories<FontAwesomeIcon className=' ml-[4px]' icon={faChevronDown} style={{ fontSize: '20px', color: 'black', height: '10px' }} /></p>
                        </button>
                        <div className={`absolute ${isCategoryListOpen ? '' : 'hidden'}`}>
                            <ul className='list-none'>
                                <li><button className='categoriesList flex items-center justify-center w-40 h-9 bg-slate-50 border border-b-gray-400'>Neem Powder</button></li>
                                <li><button className='categoriesList flex items-center justify-center w-40 h-9 bg-slate-50 border border-b-gray-400'>Castor cake powder</button></li>
                                <li><button className='categoriesList flex items-center justify-center w-40 h-9 bg-slate-50 border border-b-gray-400'>Kanuga Powder</button></li>
                            </ul>
                        </div>
                    </div>

                    <button className='whatsNewText' id='whatsNewText'>
                        <p>What's New</p>
                    </button>
                    <button className='deliveryText' id='deliveryText' onClick={() => alert("Hello")}>
                        <p>Delivery</p>
                    </button>
                </div>
                <div className='searchingSection w-2/6 flex justify-center'>
                    <div className='searchBar m-auto flex justify-between items-center relative'>
                        <input className='searchHolder  w-[350px] h-[30px] rounded-3xl bg-stone-100 text-xs p-2 outline-none' id='searchHolder' type='text' placeholder='Search Product' />
                        <FontAwesomeIcon className='searchIcon absolute right-2' icon={faMagnifyingGlass} style={{ fontSize: '20px', color: 'grey', height: '10px', marginRight: '2px' }} />
                    </div>
                </div>
                <div className='accountDetails w-1/6 flex justify-evenly'>
                    <button className='account flex items-center'>
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', color: 'black', height: '10px', marginRight: '2px' }} />
                        <p>Account</p>
                    </button>
                    <button className='cart flex items-center'>
                        <FontAwesomeIcon icon={faCartArrowDown} style={{ fontSize: '20px', color: 'black', height: '12px', marginRight: '2px' }} />
                        <p>Cart</p>
                    </button>
                </div>
            </div>

        </>
    )
}