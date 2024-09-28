const Navbar = ({cartVal}) => {
  return (
    <>
   
    <nav className="navbar   bg-light flex-row-reverse">
        <form className="d-flex ">
            <button className="btn btn-outline-dark ">No.of Ture - {cartVal}</button>
        </form>
       
    </nav>
   
   </>
  )
}

export default Navbar