import React, { useEffect, useState } from "react"
import { Container } from "reactstrap"
import { Space, Table, Tag } from "antd"
import {
  listOrders,
  update,
  updateStatusReceived,
} from "services/order.service"
import { Button } from "reactstrap"
const { Column } = Table
const Dashboard = () => {
  //meta title
  const [orders, setOrders] = useState([])
  const getOrders = async () => {
    let response = await listOrders(localStorage.getItem("email"))
    setOrders(response.newOrder)
  }
  const setStatusReceived = async orderId => {
    let response = await updateStatusReceived(orderId)
    window.location.reload()
  }
  useEffect(() => {
    getOrders()
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Buyer</h4>
          <Table dataSource={orders}>
            <Column title="Order number" dataIndex="_id" key="_id" />
            <Column title="Ordered at" dataIndex="created" key="created" />
            <Column
              title="Product name"
              dataIndex="productName"
              key="productName"
            />
            <Column title="Seller" dataIndex="seller" key="seller" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column
              title="Action"
              key="action"
              render={(record, text) =>
                record.status == 0 ? (
                  <Button color="primary">Filled</Button>
                ) : record.status == 1 ? (
                  <Button
                    color="info"
                    onClick={() => setStatusReceived(record._id)}
                  >
                    On way
                  </Button>
                ) : record.status == 2 ? (
                  <Button color="success">Received</Button>
                ) : (
                  ""
                )
              }
            />
          </Table>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
