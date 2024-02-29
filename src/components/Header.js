import { useNavigate } from "react-router-dom";
import { auth } from "./../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, supported_languages, userAvtar } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { handleTranslation } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: userAvtar,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleTogglelanguage = (e) => {
    console.log(e.target.value)
    dispatch(handleTranslation(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 align-middle">
          <select
            className="p-1 bg-gray-500 text-white rounded-md"
            onChange={handleTogglelanguage}
          >
            {supported_languages.map((language, index) => {
              return (
                <option key={index} value={language.value}>
                  {language.label}
                </option>
              );
            })}
          </select>
          <button
            className="bg-blue-500 p-1 mx-1 rounded-md text-white"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <img src={user.photoURL} className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
