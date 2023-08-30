import Image from "next/image"

export default function Products(){
    return(
        <>
            <div className="ProductsContainer">
                <div className="AllProducts flex flex-wrap justify-start p-4">
                        {[
                            {value:'Neem Powder',name:'Neem Powder',price:'₹1200'},
                            {value:'Neem Powder',name:'Neem Powder',price:'₹1800'},
                            {value:'Castor Cake Powder',name:'Castor Cake Powder',price:'₹1600'},
                            {value:'Kanuga Powder',name:'Kanuga Powder',price:'₹900'}
                         ].map((product)=>(
                            <div className="product w-[23%] h-[330px] items-stretch m-3 border rounded-2xl p-2 hover:cursor-pointer hover:shadow-md transform hover:translate-x-1 translate-y-1 transition ease-in-out delay-600">
                                <Image src={'/images/neemPowder.webp'} alt={'Neem Powder Image'} width={240} height={100}
                                className="m-auto rounded-3xl"/>
                                <div className="mt-3 p-2">
                                    <div className=" mt-2 flex justify-between"><h1 className=" font-bold text-md">{product.name}</h1>
                                        <p className="font-semibold text-md">{product.price}</p>
                                    </div>
                                    <div><p className=" text-[10px] mt-1 text-gray-500">Sun dried neem fruits are grinded to fine powder</p></div>
                                    <div className="flex justify-between font-medium mt-2">
                                        Qty: 50Kg
                                        <button className=" text-xs text-white bg-green-900 rounded-3xl w-[100px] h-8 hover:bg-white border border-green-900 hover:text-green-900">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    
                </div>
            </div>
        </>
    )
}