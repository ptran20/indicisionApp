class Indecision extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOptions=this.handleAddOptions.bind(this);
        //set up empty array 
        // this.state={
        //     options:[]
        // }

        //using default props
        this.state={
            options:props.optDefault
        }
    }
    handlePick(){
        const random=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[random];
        alert (option);
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            };
        })
    }

    handleAddOptions(opt){
        if(!opt){
            return "Enter valid value to add item";
        }else if(this.state.options.indexOf(opt)>-1){
            return "This option already exists";
        }
        this.setState((preState)=>{
            return{
                options:preState.options.concat(opt)
            }
        })
    }
      render(){
          const title="Indecision";
          const subtitle="Put your life in the hands of a computer";
          return(
            <div>
            <Header subtitle={subtitle}/>
            <Action 
            hasOption={this.state.options.length>0}
            handlePick={this.handlePick}            
            />
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            />
           
            <AddOption 
            handleAddOptions={this.handleAddOptions}
            />
            </div>
          );
      }
  }

  Indecision.defaultProps={
      optDefault:[]
  }
  const Header=(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    );
  }
//   class Header extends React.Component{
//       render(){
//           return(
//               <div>
//               <h1>{this.props.title}</h1>
//               <h2>{this.props.subtitle}</h2>
//               </div>
//           );
//       }
//   }

//default props-must delete title={title} in <header /> indecision class
Header.defaultProps={
    title:"some default"
}



  const Options = (props)=>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((cur)=><Option key={cur} optionText={cur}/>)}
        
        </div>
    )
  }
//   class Options extends React.Component{
//       render(){
//           return(
//               <div>
//               <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//               {this.props.options.map((cur)=><Option key={cur} optionText={cur}/>)}
              
//               </div>
//           )
//       }
//   }

  const Option = (props) =>{
    return(
        <div>
        Option: {props.optionText}
        </div>
      );
  }
//   class Option extends React.Component{
//       render(){
//           return(
//             <div>
//             Option: {this.props.optionText}
//             </div>
//           );
//       }
//   }

  const Action =(props) =>{
    return(
        <div>
        <button 
        disabled ={!props.hasOption}
        onClick={props.handlePick}
        >
        What should I do?
        </button>
        </div>
    )
  }
//   class Action extends React.Component{
//       render(){
//           return(
//               <div>
//               <button 
//               disabled ={!this.props.hasOption}
//               onClick={this.props.handlePick}
//               >What should I do?</button>
//               </div>
//           )
//       }
//   }

  class AddOption extends React.Component{
      constructor(props){
          super(props);
          this.handleAddOptions=this.handleAddOptions.bind(this);
          this.state={
              error:undefined             
          } 
      }

      handleAddOptions(event){
        event.preventDefault();
        const opt=event.target.elements.option.value.trim();
       
        const error =this.props.handleAddOptions(opt);

        this.setState(()=>{
            return{
                error
            }
        })        
      }

      render(){
          return(
              <div>
              {this.state.error&&<p>{this.state.error}</p>}
              <form onSubmit={this.handleAddOptions}>
              <input type="text" name ="option"></input>
              <button>Add Option</button>
              </form>
              
              </div>
          )
      }
  }

  //Stateless Component
// const User= (props)=>{
//     return(
//         <div>
//         <p>Name:{props.name} </p>
//         <p>Age: {props.age}</p>
//         </div>
//     )
// }
// const appRoot=document.getElementById("app");
// ReactDOM.render(<User name="Mel" age={26} />, appRoot);

const appRoot=document.getElementById("app");

//set up default value of options []
// ReactDOM.render(<Indecision optDefault={["opt1", "opt2"]}/>, appRoot);

// ReactDOM.render(<Indecision />, appRoot);