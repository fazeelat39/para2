import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayPKRCurrency from '../helpers/displayCurrency';
const AdminProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct,setEditProduct] = useState(false)

  return (
    <div className='bg-white p-4 rounded '>
      <div className='w-40'>
       <div className='  flex justify-center items-center '>
          <img src={data?.productImage[0]} className='  mx-auto object-fill h-full'/>
        </div>
         
         
         <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

       <div>  
        <p className='font-semibold'>
          {
            displayPKRCurrency(data.sellingPrice)
          }
          </p> 
 

             <div className='w-fit ml-auto p-2 bg-slate-100 hover:bg-slate-600 rounded-full hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)}>
               <MdModeEdit/>
             </div>
        </div>   
      </div>




              {
                editProduct &&(
                  <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>

                )
              }
              
              
    </div>
              

  )
}

export default AdminProductCard