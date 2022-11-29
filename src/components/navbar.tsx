import { useState, useContext } from "react";

//Icons
import { FaSearch, FaPlus, FaBell } from "react-icons/fa";

//Context
import { AppContext } from "../context/app/appContext";

//Assets
import userAvatar from "../assets/logo.png";
import { useModal } from "../hooks/useModal";
import FormProduct from "./form-product";
import Searchbar from "./searchbar";

const Navbar = () => {
  const { appState } = useContext(AppContext);

  // const [searchInput, setSearchInput] = useState<string>("");
  const [registerModalIsOpen, setRegisterModalIsOpen] = useModal();

  const username = `${appState.firstName} ${appState.lastName}`;

  // const handleSearch = (search: string) => {
  //   console.log(search);
  //   setSearchInput(search);
  // };

  // const handleOnClickNewProduct = () => {};
  return (
    <nav id="navbar">
      {/* <div className="searchbar"> */}
        <Searchbar/>
      {/* </div> */}
      <div className="navbar__options">
        <button
          className="navbar__options-btn-new-product"
          onClick={setRegisterModalIsOpen}
        >
          <div>
            <FaPlus />
          </div>
          NEW
        </button>
        <div className="navbar__options-box-notifications">
          <FaBell />
        </div>
        <div className="navbar__options-box-username">
          <span>{username}</span>
        </div>
        <div className="navbar__options-box-avatar">
          <img src={userAvatar} alt="name of user avatar" />
        </div>
      </div>
      <FormProduct
        isOpen={registerModalIsOpen}
        toggleModal={setRegisterModalIsOpen}
      />
    </nav>
  );
};

export default Navbar;
