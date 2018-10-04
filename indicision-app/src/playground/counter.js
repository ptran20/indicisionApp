class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleMinus=this.handleMinus.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:0
        }
    }
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const counts=parseInt(stringCount);
        if(!isNaN(counts)){
          this.setState(()=>({count:counts}))
    }
}
    componentDidUpdate(preProps, pState){
        if(pState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAdd(){
        this.setState((preState)=>{
            return{
                count:preState.count+1
            }            
        })
    }
    handleMinus(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }           
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count:0
            }            
        })
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            
            </div>
        );
    }

}

ReactDOM.render(<Counter />, document.getElementById("app"));