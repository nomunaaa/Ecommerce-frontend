import React, { useEffect, useState } from "react"
import { Container } from "reactstrap"
import { Space, Table, Tag } from "antd"
import { updateStatusOnWay, listOrdersSeller } from "services/order.service"
import { Button, Col, Card, CardBody, Row } from "reactstrap"
import { Link } from "react-router-dom"
const { Column } = Table

function Earning(props) {
  const [orders, setOrders] = useState([])
  const getOrders = async () => {
    let response = await listOrdersSeller(localStorage.getItem("email"))
    setOrders(response?.newOrder)
  }
  const setStatusOnWay = async orderId => {
    let response = await updateStatusOnWay(orderId)
    window.location.reload()
  }
  useEffect(() => {
    getOrders()
  }, [])

  return (
    <React.Fragment>
      <Col xl="8">
        <Card>
          <CardBody>
            <Table dataSource={orders}>
              <Column title="Order number" dataIndex="_id" key="_id" />
              <Column title="Ordered at" dataIndex="created" key="created" />
              <Column
                title="Product name"
                dataIndex="productName"
                key="productName"
              />
              <Column title="Buyer" dataIndex="buyer" key="buyer" />
              <Column title="Price" dataIndex="price" key="price" />
              <Column
                title="Action"
                key="action"
                render={(record, text) =>
                  record.status == 0 ? (
                    <Button
                      color="primary"
                      onClick={() => setStatusOnWay(record._id)}
                    >
                      Filled
                    </Button>
                  ) : record.status == 1 ? (
                    <Button color="info">On way</Button>
                  ) : record.status == 2 ? (
                    <Button color="success">Received</Button>
                  ) : (
                    ""
                  )
                }
              />
            </Table>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Earning
