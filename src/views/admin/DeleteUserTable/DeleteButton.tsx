import React from "react";
import { Row, Col, Button, Icon, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useDeleteUserMutation } from '@Generated/hooks'
import routes from '@Routes'


type Props = {
  id: string;
};

const DeleteButton = (props: Props) => {
  const [deleteUser] = useDeleteUserMutation()
  const history = useHistory()

  return (
    <>
      <Button type="primary" onClick={() => async (id: any, actions: any) => {
        try {
          const { data } = await deleteUser({ variables: { id } })
          if (data) {
            console.log({ data, id })
            history.replace(routes.deleteusertable)
          }
        } catch {
          const message = 'No se pudo borrar el usuario'
          actions.setErrors({ id: message })
        }
      }}>
          Eliminar
      </Button>
    </>
  );
};
export default DeleteButton;
