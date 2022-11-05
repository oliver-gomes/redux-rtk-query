import "./App.css";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./store/productsApi";
import { useState } from "react";

function App() {
  // const { data, isLoading, error, isError } = useGetAllProductsQuery();
  const [input, setInput] = useState("");

  const {
    data: singleProduct,
    error,
    isError,
    isLoading,
  } = useGetSingleProductQuery(input);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <p>{error}</p>;

  return (
    <div className="App">
      <div>Search Product:</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h1>Results</h1>
      <div>
        <ul>
          {singleProduct &&
            singleProduct.products.map((item) => {
              return (
                <li>
                  {item.title}
                  <img src={item.images[0]} alt="" width={200} />
                  <p>{item.price}</p>
                  <hr />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
