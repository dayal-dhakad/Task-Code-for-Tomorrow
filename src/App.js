import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./redux/slices/ProductSlice";

import { setPageItems } from "./redux/slices/PageItems";

function App() {
 
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const output = await response.json();

    dispatch(setItems(output));
    const firstSix = output.slice(0, 6);
    dispatch(setPageItems(firstSix));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Products loading={loading} isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;
