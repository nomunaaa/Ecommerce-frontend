import PropTypes from "prop-types"
import React from "react"
import { Col, Card, CardBody } from "reactstrap"

const MiniWidget = ({ revenue, avgPrice, orders }) => {
  return (
    <React.Fragment>
      <Col sm="4">
        <Card>
          <CardBody>
            <div className="d-flex align-items-center mb-3">
              <h5 className="font-size-14 mb-0">Orders</h5>
            </div>
            <div className="text-muted mt-4">
              <h4>
                {orders && orders[0]?.allOrders}
                <i className="mdi mdi-chevron-up ms-1 text-success" />
              </h4>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <div className="d-flex align-items-center mb-3">
              <h5 className="font-size-14 mb-0">Revenue</h5>
            </div>
            <div className="text-muted mt-4">
              <h4>
                {revenue[0]?.revenue}₮{" "}
                <i className="mdi mdi-chevron-up ms-1 text-success" />
              </h4>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <CardBody>
            <div className="d-flex align-items-center mb-3">
              <h5 className="font-size-14 mb-0">Average Price</h5>
            </div>
            <div className="text-muted mt-4">
              <h4>
                {avgPrice[0]?.avgPrice}₮
                <i className="mdi mdi-chevron-up ms-1 text-success" />
              </h4>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

MiniWidget.propTypes = {
  reports: PropTypes.array,
}

export default MiniWidget
