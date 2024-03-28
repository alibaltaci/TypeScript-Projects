import { Col, Row } from "react-bootstrap"
import { storePageData } from "../../data/moduleData"
import StoreItem from "../../components/StoreItem/StoreItem"

const Store = () => {

  console.log(storePageData)
  const {pageTitle, items} = storePageData
  return (
    <>
      <h1>{pageTitle}</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {
          items.map( item => (
            <Col key={item.id}>
              <StoreItem {...item} />  
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Store