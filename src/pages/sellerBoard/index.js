import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import MiniWidget from "./mini-widget"
import Earning from "./earning"
import SalesAnalytics from "./sales-analytics"
import TotalSellingProduct from "./total-selling-product"
import { listDatas } from "services/order.service"

const DashboardSaas = props => {
  const [orders, setOrders] = useState([])
  const [avgPrice, setAvgPrice] = useState([])
  const [chartData, setChartData] = useState([])
  const [onWayOrders, setOnWayOrders] = useState([])
  const [revenue, setRevenue] = useState([])
  const [soldOrders, setSoldOrders] = useState([])
  const getDatas = async () => {
    let response = await listDatas(localStorage.getItem("email"))
    setAvgPrice(response.averagePrice)
    setOrders(response.allOrders)
    setChartData(response.chartData)
    setOnWayOrders(response.onWayOrders)
    setRevenue(response.revenue)
    setSoldOrders(response.soldOrders)
  }
  useEffect(() => {
    getDatas()
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Seller Dashboard" />

          <Row>
            {/* welcome card */}
            <TotalSellingProduct />

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                <MiniWidget
                  orders={orders}
                  avgPrice={avgPrice}
                  revenue={revenue}
                />
              </Row>
            </Col>
          </Row>

          <Row>
            <Earning />

            <SalesAnalytics chartData={chartData} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default DashboardSaas
