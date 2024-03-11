// import { ChangeEvent, useState } from "react";
import { Product } from "./Product";
import { ProductService } from "./ProductService"

function App() {

  // const [value, setValue] = useState<number>()

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(Number(e.target.value))
  // }

  const _productService = new ProductService();

  const a = _productService.getById(1);

  console.log(a)

  const p = new Product();

  p.name = "Iphone 13";
  p.price = 30000;
  p.category = "Telefon";

  console.log("-->", p)
  _productService.saveProduct(p);

  return(
    <>
      <h1>Ürünler</h1>
      {_productService.getProducts().map(el => (
        <div key={el.id}>
          <h3>{el.name}</h3>
          <p>Kategori: {el.category}</p>
          <p>Fiyat: {el.price}</p>
          <p>Ürün ID: {el.id}</p>
          <div style={{borderBottom: "1px solid black"}}/>
        </div>
      ))}
    </>
  )
}

export default App
