import React, { Component } from 'react';
import './App.css';

class App extends Component {

 constructor(props) {
   super(props);
   this.state={
     prenom : 'Francis',
     nom : 'Hustere',
     date : '12 Juin 2019',
     comm :'Salut salut tas deux minutes'
   }
 }
  render() {
    return (
      <div>
        <header>Facebook Lite</header>
        <button
          type="button"
          onClick = {()=>{this.setState({prenom:'Jeanne',nom:'de Montchenu',date:'29/99/1999',comm:'Comment est votre blanquette ?'})}}
        >
        Jeanne
        </button>
        <button
          type="button"
          onClick = {()=>{this.setState({prenom:'Martine',nom:'Aubry',date:'29/99/1999',comm:'Ca va être tout noir'})}}
        >
        Martine
        </button>
        <button
          type="button"
          onClick = {()=>{this.setState({prenom:'Claude',nom:'François',date:'29/99/1999',comm:'Il est au moins minuit dix'})}}
        >
          Claude
          </button>
      
      <Profile prenom ={this.state.prenom} nom={this.state.nom} date={this.state.date} comm={this.state.comm}/>
      
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
        <h3>{this.props.comm}</h3>
      </div>
    )
  }
}
export default App;
