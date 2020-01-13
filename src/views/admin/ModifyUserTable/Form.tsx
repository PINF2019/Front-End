import { useLogInMutation } from '@Generated/hooks'
import { setAuthToken } from '@Utils/auth'
import { Table, Divider, Tag, Input, Button, Icon} from 'antd'
import { Formik, Field } from 'formik'
import { Form} from 'formik-antd'
import React from 'react'
import { useHistory, BrowserRouter as Router, Route, Link} from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'
import Highlighter from 'react-highlight-words';
import ReactDOM from 'react-dom'
import ModifyUser from '../ModifyUser'
import ModifyButton from '../ModifyUserTable/ModifyButton'

class ModifyUserTable extends React.Component{
  
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters } : {setSelectedKeys:any, selectedKeys:any, confirm:any, clearFilters:any}) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Buscar
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: { toLowerCase: () => any; }, record: { [x: string]: { toString: () => { toLowerCase: () => { includes: (arg0: any) => any; }; }; }; }) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text: { toString: () => string; }) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys: any[], confirm: () => any, dataIndex: any) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters: () => any) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render(){
  
  const columns = [
    {
      title: 'NIF/NIE',
      dataIndex: 'nif',
      key: 'nif',
      ...this.getColumnSearchProps('nif'),
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastnames',
      key: 'lastnames',
    },
    {
      title: 'Sexo',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: 'Rol',
      dataIndex: 'rol',
      key: 'rol',
    },
    {
      title: '',
      key: 'modify',
      render: (text: React.ReactNode, record: any) => (
        <ModifyButton 
      nif={record.nif} 
      name ={record.name} 
      lastnames={record.lastnames}
      sex={record.sex}
      rol={record.rol}
      />
      ),
    },
  ];
  
  return <Table bordered pagination={false} columns={columns} dataSource={data} />;
}
  props: any
  searchInput: any
}

/*
const columns = [
  {
    title: 'NIF/NIE',
    dataIndex: 'nif',
    key: 'nif',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellidos',
    dataIndex: 'lastnames',
    key: 'lastnames',
  },
  {
    title: 'Sexo',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Rol',
    dataIndex: 'rol',
    key: 'rol',
  },
  {
    title: '',
    key: 'modify',
    render: (text: React.ReactNode, record: any) => (
      <ModifyButton 
      nif={record.nif} 
      name ={record.name} 
      lastnames={record.lastnames}
      sex={record.sex}
      rol={record.rol}
      />
    ),
  },
];
*/
const data = [
  {
    key: '1',
    nif: '99999999R',
    name: 'Claudia',
    lastnames: 'Soriano Roldán',
    sex: 'Femenino',
    rol: 'Administrador',
  },
  {
    key: '2',
    nif: '00000000R',
    name: 'Carmen del Mar',
    lastnames: 'Ruiz de Celis',
    sex: 'Femenino',
    rol: 'Secretario',
  },
];/*
const ModifyUserTable = () => {
  const history = useHistory();
  return(
    <Table bordered pagination={false} columns={columns} dataSource={data} />
  )
}
*/

export default ModifyUserTable


