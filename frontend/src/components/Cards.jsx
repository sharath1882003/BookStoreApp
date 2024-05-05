import React from 'react';

function Cards({ item }) {
    
  return (
    <>
    <div classname='mt-4'>
     <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
       <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
       <div className="card-body">
     <h2 className="card-title">
       Shoes!
      <div className="badge badge-secondary">NEW</div>
     </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
     <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </>
  ) 
  
}

export default Cards;