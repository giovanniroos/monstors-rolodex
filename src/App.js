import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
      });
      setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const searchStringValue = event.target.value.toLocaleLowerCase();
    setSearchString(searchStringValue);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box'></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );  
}

export default App;

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchString: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     }));
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchString};
//     });
//   };

//   render(){
//     const {monsters, searchString} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//       });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} 
//         placeholder='Search Monsters' className='search-box'></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );  
//   }
// }



