'use client'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function Filters(){

    const [isTypeFilterOpen,setTypeFilterOpen]=useState(false)
    const [isPriceFilterOpen,setPriceFilterOpen]=useState(false)
    const [isReviewFilterOpen,setReviewFilterOpen]=useState(false)
    
    const closeTypeFilterList=()=>{
        setTypeFilterOpen(false)
    }
    const openTypeFilterList=()=>{
        setTypeFilterOpen(true);setPriceFilterOpen(false);setReviewFilterOpen(false)
    }

    const closePriceFilterList=()=>{
        setPriceFilterOpen(false)
    }
    const openPriceFilterList=()=>{
        setPriceFilterOpen(true);setTypeFilterOpen(false);setReviewFilterOpen(false)
    }

    const closeReviewFilterList=()=>{
        setReviewFilterOpen(false)
    }
    const openReviewFilterList=()=>{
        setReviewFilterOpen(true);setTypeFilterOpen(false);setPriceFilterOpen(false)
    }

    return(
        <>
            <div className="w-[95%] h-[90px] m-auto flex items-center justify-between">
                <div className=" w-1/2 flex justify-between">
                    <div>
                        <button className=" text-[12px] bg-gray-200 w-[150px] h-[30px] rounded-[20px] flex items-center justify-center" 
                            onClick={isTypeFilterOpen?closeTypeFilterList:openTypeFilterList}>
                            <p>Powder Type</p>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize:'20px', height:'10px',marginLeft:'5px'}}/>
                        </button>
                        <div className={`absolute translate-y-1 translate-x-3 ${isTypeFilterOpen?'':'hidden'}`}>
                            <ul className='list-none bg-white '>
                                {[
                                    { value: 'Neem Powder', label: 'Neem Powder' },
                                    { value: 'Castor cake Powder', label: 'Castor cake Powder' },
                                    { value: 'Kanuga Powder', label: 'Kanuga powder'}
                                    ].map((type) => (
                                    <li key={type.value}>
                                        <button className=' text-sm w-40 h-9 border border-b-gray-400 hover:bg-slate-200'>{type.label}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <button className=" text-[12px] bg-gray-200 w-[80px] h-[30px] rounded-[20px] flex items-center justify-center" 
                            onClick={isPriceFilterOpen?closePriceFilterList:openPriceFilterList}>
                            <p>Price</p>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize:'20px', height:'10px',marginLeft:'5px'}}/>
                        </button>
                        <div className={`absolute translate-y-1 translate-x-3 ${isPriceFilterOpen?'':'hidden'}`}>
                            <ul className="list-none bg-white">
                                {[
                                    {value: 'Below 800', label: 'Below 800'},
                                    {value: '800-1200', label: '800-1200'},
                                    {value: '1200-1700', label:'1200-1700'},
                                    {value: '1700-2200', label:'1700-2200'}
                                 ].map((price)=>(
                                    <li>
                                        <button className="text-xs w-32 h-9 border border-b-gray-400 hover:bg-slate-200">{price.label}</button>
                                    </li>
                                 ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <button className=" text-[12px] bg-gray-200 w-[90px] h-[30px] rounded-[20px] flex items-center justify-center" 
                            onClick={isReviewFilterOpen?closeReviewFilterList:openReviewFilterList}>
                            <p>Review</p>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize:'20px', height:'10px',marginLeft:'5px'}}/>
                        </button>
                        <div className={`absolute translate-y-1 translate-x-3 ${isReviewFilterOpen?'':'hidden'}`}>
                            <ul className="list-none bg-white">
                                {[
                                    {value: 'High', label: 'High'},
                                    {value: 'Medium', label: 'Medium'},
                                    {value: 'Low', label:'Low'}
                                 ].map((review)=>(
                                    <li>
                                        <button className="text-xs w-28 h-9 border border-b-gray-400 hover:bg-slate-200">{review.label}</button>
                                    </li>
                                 ))
                                }
                            </ul>
                        </div>
                    </div>

                    <button className=" text-[12px] bg-gray-200 w-[120px] h-[30px] rounded-[20px] flex items-center justify-center">
                        <p>Material</p>
                        <FontAwesomeIcon icon={faChevronDown} style={{fontSize:'20px', height:'10px',marginLeft:'5px'}}/>
                    </button>
                    <button className=" text-[12px] bg-gray-200 w-[130px] h-[30px] rounded-[20px] flex items-center justify-center">
                        <p>All Filters</p>
                        <Image src="/images/filtersIcon.png" alt="filterIcon" width={12} height={12} style={{marginLeft:'5px'}}/>
                    </button>
                </div>
                <div>
                    <button className="sortBy border border-gray-400 text-[12px] w-[100px] h-[30px] rounded-[20px] flex items-center justify-center">
                        <p>Sort By</p>
                        <FontAwesomeIcon icon={faChevronDown} style={{fontSize:'20px', height:'10px',marginLeft:'5px'}}/>
                    </button> 
                </div>
            </div>
            
        </>
    )
}