import React from "react";
import { Result, Icon, Button, Pagination, Row } from "antd";
import { isAuthTokenExpired } from "@Utils/auth";
import { Redirect } from "react-router";
import routes from "@Routes";
import { MenuVotacionSimple } from "@Views";
const NotFound = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.success} />;
  }
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: "100vh" }}
    >
      <Row style={{ marginTop: "-200px" }}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" href="/pickrole">Back Home</Button>}
        />
      </Row>
    </Row>
  );
};
export default NotFound;
