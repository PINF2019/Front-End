import React, { useEffect, useState } from 'react'
import { Transfer } from 'antd'

const Selector = () => {
  const [targetKeys, setTargetKeys] = useState<string[]>([])
  const [monckData, setMockData] = useState<any[]>([])

  useEffect(() => {
    const innerTargetKeys = []
    const mockData = []
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      }
      if (data.chosen) {
        innerTargetKeys.push(data.key)
      }
      mockData.push(data)
    }
    setMockData(mockData)
    setTargetKeys(innerTargetKeys)
  }, [])

  const filterOption = (inputValue: any, option: any) =>
    option.description.indexOf(inputValue) > -1
  return (
    <Transfer
      showSearch
      filterOption={filterOption}
      onChange={() => setTargetKeys(prevTargetKeys => prevTargetKeys)}
      targetKeys={targetKeys}
      dataSource={monckData}
    />
  )
}

export default Selector
