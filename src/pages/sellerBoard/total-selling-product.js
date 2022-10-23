import React, { useEffect, useState } from "react"
import { Col, Card, CardBody, Table } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { highestEarn } from "services/order.service"

const TotalSellngProduct = props => {
  const [earner, setEarner] = useState({})
  const getHighestEarner = async () => {
    let response = await highestEarn(localStorage.getItem("email"))
    setEarner(response?.earner[0])
  }
  useEffect(() => {
    getHighestEarner()
  }, [])
  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <div className="clearfix">
              <h4 className="card-title mb-4">Top Ordering product</h4>
            </div>

            <div className="text-muted text-center">
              <p className="mb-2">{earner?._id}</p>
              <h4>{earner?.earn}₮</h4>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default TotalSellngProduct
