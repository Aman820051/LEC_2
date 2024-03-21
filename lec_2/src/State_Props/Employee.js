import React from 'react'
class Employee extends React.Component
{
    constructor()
    {
        super();
        this.state = {Data : "RAVI"};
    }
    updateEmployee()
    {
        this.setState ({Data : this.props.name})
    }
    render()
    {
        return <div>
            <h1>Employee : {this.state.Data}</h1>
            <button onClick={()=>this.updateEmployee(this.setState.Data)}>Set Employee</button>
        </div>
    }
}
export default Employee