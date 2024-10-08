

const Navbar = ({items,total,removeItem}) => {
 
  return (
    <>
   
              <ol className="list-group list-group-numbered">
                {
                  items.map((item)=>{
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.name}</div>
                        {item.price}$
                      </div>
                      <button onClick={()=>{
                        removeItem(item)
                      }} className="badge text-bg-primary rounded-pill">X</button>
                    </li>
                  }
                  
                )
                }
              </ol>
              <h1>total :{total}$</h1>
   
   </>
  )
}

export default Navbar