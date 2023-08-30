import Image from 'next/image'
export default function Offerzone(){
    return(
        <>
            <div className=" bg-[#FBF0E4] w-[95%] h-40 m-auto flex justify-center">
                <div className="offerText block w-1/2 h-2/3 m-auto text-center">
                    <h1 className=' w-full text-green-900 text-[30px] font-bold '>Grab upto 10% Season Sale</h1>
                    <button className=' w-[100px] h-[30px] text-white bg-green-900 rounded-[30px] mt-3'>Buy Now</button>
                </div> 
                <div className="plantImage flex w-1/2 items-center justify-center">
                    <Image 
                        src="/images/compostbag.jpg" alt='plantImage' width={230} height={160}
                        className=' rounded-2xl'
                    />
                </div>
            </div>
        </>
    )
}