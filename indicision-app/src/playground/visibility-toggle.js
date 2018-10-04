// let message="";
// let btnMessage="Show details";

// const display =() =>{
//     if(message.length==""){
//         btnMessage="Hide details";
//         message="Hello";
//     }else{
//         btnMessage="Show details";
//         message="";
//     }   
//    render();
// };

// const render= ()=>{
//     const temp=(
//         <div>
//         <h1>Visibility</h1>
//         <button onClick={display}>{btnMessage}</button>
//         <p>{message}</p>
//         </div>
//     );
//     ReactDOM.render(temp,appRoot);
// };




// const show=()=>{
//     visibility=!visibility;
//     render();
// };

// let visibility = false;
// const render=()=>{
//     const temp = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={show}>
//             {visibility? "Hide details": "Show details"}
//             </button>
//             {visibility && (
//                 <div>
//                 <p>Here are some details</p>
//                 </div>
//             )}            
//         </div>
//     );
//     ReactDOM.render(temp,appRoot);
// };

// const appRoot=document.getElementById("app");

// render();

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
        this.state={
             visible:false             
        }
    }

   handleToggle(){
       this.setState((preState)=>{
           return{
                visible:!preState.visible
           }
       })
   }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                {this.state.visible?"Hide detail": "Show details"}
                </button>
                {this.state.visible &&(
                    <div>
                        <p>Here are some info</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));