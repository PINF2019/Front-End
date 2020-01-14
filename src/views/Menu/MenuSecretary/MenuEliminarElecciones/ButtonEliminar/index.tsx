import { Button, Icon, Row, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
const { Text } = Typography;

type Props = {
  name: string;
  id: string;
  href: string;
};

const ButtonEliminar = (props: Props) => {
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
            {props.name.length > 30
              ? props.name.substring(0, 30 - 3) + "..."
              : props.name}
          </Text>

          <Icon
            type="delete"
            style={{
              marginTop: "1.1%",
              verticalAlign: "middle",
              fontSize: "50px",
              color: "#FFA500",
              marginLeft: "auto"
            }}
            /*onClick={() => async (id: any, actions: any) => {
              try {
                const { data } = await useDeleteElectionMutation({ variables: { id } });
                if (data) {
                  console.log({ data, id });
                  history.replace(routes.);
                }
              } catch {
                const message = "No se pudo borrar el usuario";
                actions.setErrors({ id: message });
              }
            }}*/
          />
        </Row>
      </Button>

      <br></br>
    </>
  );
};
export default ButtonEliminar;
