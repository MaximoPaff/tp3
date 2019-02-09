import React, { Component } from 'react';
import './App.css';

class App extends Component {

 constructor(props) {
   super(props);
   this.state={
     prenom : 'Francis',
     nom : 'Hustere',
     date : '12 Juin 2019'
   }
 }
  render() {
    return (
      <div>
        <header>Facebook Lite</header>
        <button
          type="button"
          onClick = {()=>{this.setState({prenom:'Jeanne',nom:'de Montchenu',date:'29/99/1999'})}}
        >
        Jeanne
        </button>
        <button
          type="button"
          onClick = {()=>{this.setState({prenom:'Martine',nom:'Aubry',date:'29/99/1999'})}}
        >
        Martine
        </button>
        <button
          type="button"
          onClick = {()=>{this.setState({prenom:'Claude',nom:'François',date:'29/99/1999'})}}
        >
          Claude
          </button>
      
      <Profile prenom ={this.state.prenom} nom={this.state.nom} date={this.state.date} />
      
      </div>
    );
  }
}

class Profile extends React.Component{
  render()
  {
    return( 
      <div>
        <img class="profile" src={this.props.profile} />
        <br/>
        <h1>{this.props.prenom}<br/>{this.props.nom}<br/>{this.props.date}</h1>
      </div>
    )
  }
}
export default App;
