import React from "react";
import { Row, Col, Button, Icon, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
import "./index.less";
const { Text } = Typography;


type Props = {
  name: string;
  dateInit: string;
  dateEnd: string;
  id: string;
};

const CensusButton = (props: Props) => {
  const history = useHistory();

  return (
    <>
      <Button
        className = "button"
        onClick={() => history.push(`censusData/${props.id}`)}
      >
        <Row className = "RowCensusButton">
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
              marginTop: '1.1%',
              verticalAlign: 'middle',
              fontSize: '50px',
              color: '#FFA500',
              marginLeft: 'auto'
            }}
          />
        </Row>
      </Button>

      <br></br>
    </>
  );
};
export default CensusButton;
