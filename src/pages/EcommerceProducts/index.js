import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap"

import "nouislider/distribute/nouislider.css"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import { listProducts } from "services/product.service"
import { createOrder } from "services/order.service"
//Import data
// import { productsData } from "common/data"

const EcommerceProducts = props => {
  //meta title
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    let response = await listProducts()
    setProducts(response)
  }
  const addOrder = async productId => {
    let body = {
      productId: productId,
      email: localStorage.getItem("email"),
    }
    let response = await createOrder(body)
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Products" />
          <Row>
            <Row>
              {products &&
                products.map((product, index) => (
                  <Col sm="3" key={index}>
                    <Card>
                      <CardBody>
                        <div className="product-img position-relative">
                          <img
                            src={product.image}
                            alt=""
                            width={230}
                            height={200}
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <h5 className="mb-3 text-truncate">
                            <div className="text-dark">{product.name}</div>
                          </h5>
                          <div className="text-muted mb-3">
                            Seller: {product.salerId}
                          </div>

                          <h5 className="my-0">
                            <b>₮{product.price}</b>
                          </h5>
                          <div className="my-0" style={{ padding: "15px" }}>
                            <Button
                              type="submit"
                              color="info"
                              className="btn "
                              onClick={() => addOrder(product._id)}
                            >
                              Buy it now
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

EcommerceProducts.propTypes = {
  products: PropTypes.array,
  history: PropTypes.object,
}

export default withRouter(EcommerceProducts)
