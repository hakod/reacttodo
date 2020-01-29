import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [{title: 'firstlist', items: [{name:'clean', done: false},{name:'eat',done: false},{name:'sleep',done: false}]}],
      currentList: {title: 'firstlist', items: [{name:'clean', done: false},{name:'eat',done: false},{name:'sleep',done: false}]}
    };
  }
  upd() {
    let ind = this.state.lists.findIndex(x=>x.title===this.state.currentList.title);
    let old = JSON.parse(JSON.stringify(this.state.lists));
    old.splice(ind, 1, this.state.currentList)
    this.setState({lists: old});    
  }
  addToList() {
    this.setState({currentList: Object.assign({},this.state.currentList,{
      items: this.state.currentList.items.concat({name: '', done: false})
    })},()=>this.upd())
  }
  delFromList() {
    this.setState({currentList: Object.assign({},this.state.currentList,{
      items: this.state.currentList.items.slice(0,this.state.currentList.items.length-1)
    })},()=>this.upd())
  }
  giveName(name) {
    if (!this.state.currentList.items.some(i=>i.name===name)){
      this.setState({currentList: Object.assign({},this.state.currentList,{
        items: this.state.currentList.items.slice(0,this.state.currentList.items.length-1).concat({name: name, done: false})
      })},()=>this.upd())
    }
  }
  update(n,o) {
    if (!this.state.currentList.items.some(i=>i.name===n)){
      let arr = this.state.currentList.items.slice();
      let ind = arr.findIndex(a=>a.name===o);
      arr[ind].name = n;
      this.setState({currentList: Object.assign({},this.state.currentList,{
        items: arr
      })},()=>this.upd())
  }
  }
  toggle(name) {
    let arr = this.state.currentList.items.slice();
    let ind = arr.findIndex(a=>a.name===name);
    arr[ind].done = !arr[ind].done;
    this.setState({currentList: Object.assign({},this.state.currentList,{
      items: arr
    })},()=>this.upd())
  }
  addList(name) {
    if (this.state.lists.filter(x=>x.title===name).length === 0) {
    this.setState({
      lists: this.state.lists.concat({title: name, items: []})
    })
  }
  }
  chooseList(name) {
    this.setState({
      currentList: this.state.lists.filter(a=>a.title===name)[0]
    })
  }
  render () {
  return (
    <div className="App">
      <Search />
      <TodoList choose={this.chooseList.bind(this)} addList={this.addList.bind(this)} lists={this.state.lists}/>
      <List toggle={this.toggle.bind(this)} update={this.update.bind(this)} give={this.giveName.bind(this)} del={this.delFromList.bind(this)} add={this.addToList.bind(this)} list={this.state.currentList} />
    </div>
  );
  }
}

export default App;
