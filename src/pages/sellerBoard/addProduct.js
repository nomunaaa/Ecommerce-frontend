import React, { useState } from "react"
import {
  Container,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"
import { Link } from "react-router-dom"
import { InboxOutlined } from "@ant-design/icons"
import { message, Upload } from "antd"
import { createProduct } from "services/product.service"
const Dashboard = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const { Dragger } = Upload

  const props = {
    name: "photo",
    multiple: true,
    action: "http://localhost:4000/upload",
    onChange(info) {
      const { status } = info.file
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`)
        setImage(info.file.response)
        console.log(info, "info")
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files)
    },
  }
  const addProduct = async () => {
    const body = {
      name: name,
      description: description,
      image: image,
      price: price,
      email: localStorage.getItem("email"),
    }
    let response = await createProduct(body)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Create a product</h4>
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Basic Information</CardTitle>
                  <CardSubtitle className="mb-4">
                    Fill all information below
                  </CardSubtitle>

                  <Row>
                    <Col sm="6">
                      <div className="mb-3">
                        <Label htmlFor="productname">Product Name</Label>
                        <Input
                          type="text"
                          className="form-control"
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="manufacturername">Description</Label>
                        <Input
                          type="text"
                          className="form-control"
                          onChange={e => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          className="form-control"
                          onChange={e => setPrice(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="mb-3">
                        <Label htmlFor="productname">Images</Label>
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                          <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibit from uploading company data or other band
                            files
                          </p>
                        </Dragger>
                      </div>
                    </Col>
                  </Row>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      type="submit"
                      color="primary"
                      className="btn "
                      onClick={() => addProduct()}
                    >
                      Save Changes
                    </Button>
                    <Button type="submit" color="secondary" className=" ">
                      Cancel
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
