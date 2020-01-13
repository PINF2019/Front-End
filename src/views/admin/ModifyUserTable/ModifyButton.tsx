import React from "react";
import { Row, Col, Button, Icon, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
const { Text } = Typography;


type Props = {
  nif: string;
  name: string;
  lastnames: string;
  sex: string;
  rol: string;
};

const ModifyButton = (props: Props) => {
  const history = useHistory();

  return (
    <>
      <Button onClick={() => 
        history.push(`/admin/modifyuser/${props.nif}/${props.name}/${props.lastnames}/${props.sex}/${props.rol}`)}>
          Modificar
      </Button>
    </>
  );
};
export default ModifyButton;
