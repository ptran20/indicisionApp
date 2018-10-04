// let count =0;
// const addOne=()=>{
//     count++
//     renderCounter();
// };
// const minusOne=()=>{
//     count--;
//     renderCounter();
// };
// const reset=() => {
//     count=0;
//     renderCounter();
// };
// const renderCounter = ()=>{
//     const template3=(
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>        
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template3,appRoot);
// };

// renderCounter();

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        //initialize default value for count=0
        this.state={
            count:0
        };
    }

    componentDidMount(){
        const stringCount=localStorage.getItem('count');
        const count=parseInt(stringCount);

        //only change count when it is a #
        if(!isNaN(count)){
            this.setState(()=>({count}))
        }       
     //no else, because if it false-->return default   
    }

    //save the count when it changes
    //give access to the new count values
    componentDidUpdate(preProp, preState){
        if(preState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne(){
        this.setState((previousState)=>{
            return{
                count:previousState.count+1
            }
         });
        }
    handleMinusOne(){
        this.setState((previousState)=>{
            return{
                count:previousState.count-1                
            }            
        });
    }

    handleReset(){
        this.setState(()=>{
            return{
                count:0
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );        
    }
}
//initial default props pass in, will use this default propr
//if value pass in/provided, will use that value
// Counter.defaultProps={
//     countDefault: 0
// }
// ReactDOM.render(<Counter countDefault={-10}/>, document.getElementById("app"));

ReactDOM.render(<Counter/>,document.getElementById("app"));



















