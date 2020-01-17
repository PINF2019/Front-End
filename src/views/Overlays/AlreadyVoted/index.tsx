import { Alert } from "antd"
import React from "react"

const AlreadyVoted = () => {
  return(
          <div>

          <Alert
            message="Ya has votado"
            description="Lo siento, tu voto ya ha sido registrado anteriormente"
            type="error"
            
          />
          </div>)
}

export default AlreadyVoted