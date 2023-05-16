import './Navbar.css';
const Navbar = ()=> {
    return (
        <div className='nav'>
            <div className="logo">
                <p>ReactMeals</p>
            </div>
            <div className="navCart">
                <div>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div>
                    <p>Your Cart</p>
                </div>
                <div className='cartItem'>
                     <p>0</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar