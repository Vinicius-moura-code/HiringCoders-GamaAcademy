import React, {Component} from 'react';
import api from '../../services/api';


export default class Main extends Component {

  componentDidMount() {
    this.loadPoke();
  }

  loadPoke = async () => {
    const response = await api.get('/?offset=410&limit=21');

    console.log(response.data.results);
  }

  render(){
    return <h1>srrs</h1>
  }
}