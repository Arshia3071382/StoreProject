
import { Link, useNavigate } from "react-router-dom";
import cartIcon from "../../../public/image/shopping_cart_47dp_000000_FILL0_wght400_GRAD0_opsz48.png";
import { useShoppingCardContext } from "../../context/ShoppingContext";

function Navbar() {

  const{productQty} = useShoppingCardContext()
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleCartClick = () => {
    if (!userName) {
      alert("Please log in first🙏");
      navigate("/"); 
    } else {
      navigate("/card");
    }
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <Link to="/" className="text-2xl font-bold">
        Store
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/store" className="hover:text-blue-600 transition">
          Store
        </Link>

        <button
          onClick={handleCartClick}
          disabled={!userName}
          className={`p-2 rounded-full transition ${
            userName
              ? "hover:bg-blue-100 cursor-pointer" 
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <img src={cartIcon} alt="cart" className="w-6 h-6" />
          {userName && (
            <div>
              <p className='absolute bg-red-600 px-2 rounded-2xl text-white right-9 top-3'>{productQty}</p>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

