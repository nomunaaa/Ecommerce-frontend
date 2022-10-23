import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

const SalesAnalytics = props => {
  const data = props.chartData
  const series = [data[0]?.chartData, data[1]?.chartData, data[2]?.chartData]
  const options = {
    labels: [data[0]?._id, data[0]?._id, data[0]?._id],
    colors: ["#556ee6", "#34c38f", "#f46a6a"],
    legend: { show: !1 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  }

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Order Analytics</h4>

            <div>
              <div id="donut-chart">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="donut"
                  height={260}
                  className="apex-charts"
                />
              </div>
            </div>

            <div className="text-center text-muted">
              <Row>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-primary me-1" />{" "}
                      {data[0]?._id}
                    </p>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-success me-1" />{" "}
                      {data[1]?._id}
                    </p>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="mdi mdi-circle text-danger me-1" />{" "}
                      {data[2]?._id}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default SalesAnalytics
