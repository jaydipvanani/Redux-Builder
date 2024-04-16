import { useEffect } from "react";
import './App.css';
import Data from './componant/Data';
import { useDispatch } from "react-redux";
import { GET_USER_PENDING } from "./redux-saga/user/action/action";

function App() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_PENDING });
  }, []);


  return (
    <>

      <Data />
    </>
  );
}

export default App;
