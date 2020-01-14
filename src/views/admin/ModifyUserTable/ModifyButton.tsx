import React from "react";
import { Row, Col, Button, Icon, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
const { Text } = Typography;


type Props = {
  id: string
  name: string;
  lastnames: string;
  sex: string;
  rol: string;
  colegiateBody: string;
};

const ModifyButton = (props: Props) => {
  const history = useHistory();

  return (
    <>
      <Button type="primary" onClick={() => 
        history.push(`/admin/modifyuser/${props.id}/${props.name}/${props.lastnames}/${props.sex}/${props.rol}/${props.colegiateBody}`)}>
          Modificar
      </Button>
    </>
  );
};
export default ModifyButton;
