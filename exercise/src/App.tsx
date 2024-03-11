import { ProductService } from "./ProductService"

function App() {

  const _productService = new ProductService();

  const a = _productService.getById(1);

  console.log(a)

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
