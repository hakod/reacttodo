import React from 'react';
import './App.css';
import List from './components/List';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      lists: [{title: 'firstlist', items: [{name:'clean', done: false},{name:'eat',done: false},{name:'sleep',done: false}]}],
      currentList: {title: 'firstlist', items: [{name:'clean', done: false},{name:'eat',done: false},{name:'sleep',done: false}]}
    };
  }
  upd() {
    if (!this.state.searching) {
    let ind = this.state.lists.findIndex(x=>x.title===this.state.currentList.title);
    let old = JSON.parse(JSON.stringify(this.state.lists));
    old.splice(ind, 1, this.state.currentList)
    this.setState({lists: old});
    }    
  }
  addToList() {
    if (this.state.currentList.items.length === 0 || this.state.currentList.items[this.state.currentList.items.length-1].name!==''){
    this.setState({currentList: Object.assign({},this.state.currentList,{
      items: this.state.currentList.items.concat({name: '', done: false})
    })},()=>this.upd())
  }
  }
  delFromList() {
    this.setState({currentList: Object.assign({},this.state.currentList,{
      items: this.state.currentList.items.slice(0,this.state.currentList.items.length-1)
    })},()=>this.upd())
  }
  giveName(name) {
    if (!this.state.lists.some(x=>x.items.some(i=>i.name===name))){//.items.some(i=>i.name===name)){
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
    if (name.length > 0 && this.state.lists.filter(x=>x.title===name).length === 0) {
    this.setState({
      lists: this.state.lists.concat({title: name, items: []})
    })
  }
  }
  chooseList(name) {
    this.setState({
      currentList: this.state.lists.filter(a=>a.title===name)[0],
      searching: false
    })
  }
  search(n) {
    let arr = [];
    var re = new RegExp("^" + n);
    this.state.lists.forEach(x=>{
      x.items.filter(i=>i.name.match(re)).forEach(item=>arr.push(item))
    })
    let list = {title: 'search', items:arr}
    console.log(arr)
    this.setState({searching: true, currentList: list})
  }
  render () {
  return (
    <div className="App">
      <TodoList current={this.state.currentList} searching={this.state.searching} search={this.search.bind(this)} choose={this.chooseList.bind(this)} addList={this.addList.bind(this)} lists={this.state.lists}/>
      <List searching={this.state.searching} toggle={this.toggle.bind(this)} update={this.update.bind(this)} give={this.giveName.bind(this)} del={this.delFromList.bind(this)} add={this.addToList.bind(this)} list={this.state.currentList} />
    </div>
  );
  }
}

export default App;
