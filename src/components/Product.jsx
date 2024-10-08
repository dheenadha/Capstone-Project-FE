
import React from 'react'

export default function Product({product,addItem}) {
        return (
            <>
            
            <div className="card text-center mt-3  " style={{height:"300px",width:"250px", background:"#add8e6"}}><div className="d-flex justify-content-center">
            <img src={product.image} className="card-img-top" alt="some image" style={{height:"100px",width:"150px"}}/></div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="price">{product.price}$</div>
                
              <button onClick={()=>{
                addItem(product)
              }
                
              } className="btn btn-warning">Add to tour</button>
            </div>
            </div>
            
            </>
        )
    }