import React,{useState} from 'react'
import '../styles/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "John Doe",
            enrollmentNo: "12345678",
            age: 34
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => {
            return {age: prevState.age + 1}
        });
    }

    render(){
        const {name, enrollmentNo, age} = this.state;
        return(
            <div>
                <h1>Hello, my name is {name}</h1>
                <p>I am {age} year old  old and my enrollment no is {enrollmentNo} </p>
                <button onClick={this.handleClick}> Increse age</button>
            </div>
        );
    }
}

export default App;
