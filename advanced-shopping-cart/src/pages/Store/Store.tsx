import { storePageData } from "../../data/moduleData"

const Store = () => {

  console.log(storePageData)
  return (
    <>
      <h1>{storePageData.pageTitle}</h1>
    </>
  )
}

export default Store