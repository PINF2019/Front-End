import { useUsersQuery } from '@Generated/hooks'
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

//const {data} = useUsersQuery();

/*
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
  
  return (
    
  <Table bordered pagination={false} columns={columns} dataSource={data} />);
}
  props: any
  searchInput: any
}
*/

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
    title: 'Acción',
    key: 'modify',
    render: (text: React.ReactNode, record: any) => (
      <ModifyButton 
      id={record.id} 
      name ={record.name} 
      lastnames={record.lastnames}
      sex={record.sex}
      rol={record.rol}
      colegiateBody={record.colegiateBody}
      />
    ),
  },
];

/*
const datas = [
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
  
];
*/

const ModifyUserTable = () => {
  /*console.log("data", useUsersQuery());
  const data = useUsersQuery();*/
  const { data, loading, error } = useUsersQuery()
// Las variables entre llaves son las cosas que podemos obtener de la query
  if (loading) { //Loading es un booleano que comprueba si se está realizando la query
    return <div>Loading...</div>
  }

  if (data) { //Data contiene los datos que hemos solicitado y se puede mapear
	//A la estructura que queramos. En este caso es un map. Nota: index,
  //Tal y como indica es el índice que lo recorre
  const firstNames = data.users.map((user, index) => (user.firstName))
  const ids = data.users.map((user, index) => (user.id))
  const nifs = data.users.map((user, index) => (user.dni))
  const lastnames = data.users.map((user, index) => (user.lastName))
  const sexes = data.users.map((user, index) => (user.genre))
  const roles = data.users.map((user, index) => (user.roles))
  const colegiateBodys = data.users.map((user, index) => (user.colegiateBody))
  
  let array = new Array(data.users.length)
  for (let i=0; i<data.users.length; i++){
    //let rol = ''
    //roles[i].forEach(element => rol = rol + element || ' ')
    array[i] = {key: i, nif: nifs[i], name: firstNames[i], id: ids[i], lastnames: lastnames[i], sex: sexes[i], rol: roles[i][0], colegiateBody: colegiateBodys[i]}
  }
  
  
    return (
      /*<div>
        {data.users.map((user, index) => (
          <div key={index}>{user.firstName}</div>
        ))}
      </div>*/
      
      <Table bordered pagination={false} columns={columns} dataSource={array} />
    )
  }

//En caso de que ninguno de los otros ifs funcione, se devolvería la variable de error
  return <div>{JSON.stringify(error)}</div>
}


export default ModifyUserTable


