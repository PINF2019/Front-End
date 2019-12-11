import React from 'react'
import { Button, Typography } from 'antd'
//import { useElectionNameQuery } from '@Generated/hooks'
import routes from '@Routes'
import ElectionButton from './election'

const { Title } = Typography

const data = {
  election: [
    { name: 'four', dateInit: new Date(), dateEnd: new Date() },
    { name: 'two', dateInit: new Date(), dateEnd: new Date() }
  ]
}

const ElectionView = () => {
  //https://es.reactjs.org/docs/lists-and-keys.html
  // <Header />
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <>
      <Title level={2}>Elecciones pendientes</Title>,
      {data.election.map((election, index) => (
        <ElectionButton
          name={election.name}
          dateInit={election.dateInit}
          dateEnd={election.dateEnd}
          key={index}
        />
      ))}
    </>
  )
  // }

  //return <div>{JSON.stringify(error)}</div>
}

export default ElectionView
