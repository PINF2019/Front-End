import React from "react";
import { Row, Col, Button, Icon, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
const { Text } = Typography;


type Props = {
  name: string;
  dateInit: string;
  dateEnd: string;
  id: string;
};

const ElectionButton = (props: Props) => {
  const history = useHistory();

  return (
    <>
      <Button
        //href={props.url}
        style={{
          backgroundColor: "#F0F0F0",
          marginTop: "2%",
          minWidth: "32%",
          minHeight: "63px",
          borderRadius: "12px",
          boxShadow: "0px 3px 3px grey"
        }}
        onClick={() => history.push(`votacion/${props.id}`)}
      >
        <Row
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignContent: "space-between"
          }}
        >
          <Text strong style={{ marginTop: "auto", marginBottom: "auto" }}>
            {props.name}
          </Text>

          <Text style={{ textAlign: "center", margin: "auto" }}>
            {props.dateInit} {"-"}
            {props.dateEnd}
          </Text>

          <Icon
            type="caret-right"
            style={{
              marginTop: "1.1%",
              verticalAlign: "middle",
              fontSize: "50px",
              color: "#FFA500",
              marginLeft: "auto"
            }}
          />
        </Row>
      </Button>

      <br></br>
    </>
  );
};
export default ElectionButton;
