import React, { useEffect, useState } from "react";
import { Transfer } from "antd";

const Selector = () => {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [monckData, setMockData] = useState<any[]>([]);

  useEffect(() => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    setMockData(mockData);
    setTargetKeys(targetKeys);
  }, []);

  const filterOption = (inputValue: any, option: any) =>
    option.description.indexOf(inputValue) > -1;
  return (
    <Transfer
      showSearch
      filterOption={filterOption}
      onChange={targetKeys => setTargetKeys(targetKeys)}
      targetKeys={targetKeys}
      dataSource={monckData}
      onSearch={(dir: any, value: any) => {
        console.log("search:", dir, value);
      }}
      //render={item => item.title}
    />
  );
};

export default Selector;
