class Indecision extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOptions=this.handleAddOptions.bind(this);
        this.handleDeletaOption=this.handleDeletaOption.bind(this);
        //setting default value for options
        this.state={
            options:[]
        }
    }

    componentDidMount(){
        try{
        //get the value set down below
        const json=localStorage.getItem('options');
        //now get the real js array back
        const options=JSON.parse(json);

        //only set options if !=null
        if(options){
        //use setstate to set it
        //return an obj that updates options to the options arr
        this.setState(()=>({
            options:options
        }))
        }     
        }catch(error){
            //do nothing at all json data is invalid
            //fall back to empty []
        }
      
    }

    //saving array data to localstorage
    componentDidUpdate(previProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){
        console.log("unmount");
    }
    handlePick(){
        const random=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[random];
        alert (option);
    }

    handleDeleteOptions(){
        //old way of setState
        // this.setState(()=>{
        //     return{
        //         options:[]
        //     };
        // })

        //new way of setState
        this.setState(()=>({
            options:[]
        }))
    }

    //delete current option in the array and leave others alone
    handleDeletaOption(optionToRemove){
          this.setState((preState)=>({
              options:preState.options.filter((cur)=>{
                  return optionToRemove!==cur;
              })
          }))
    } 
        
    handleAddOptions(opt){
        if(!opt){
            return "Enter valid value to add item";
        }else if(this.state.options.indexOf(opt)>-1){
            return "This option already exists";
        }

        //old way of setState syntax
        // this.setState((preState)=>{
        //     return{
        //         options:preState.options.concat(opt)
        //     }
        // })

        this.setState((preState)=>({
            options:preState.options.concat(opt)
        }))
    }
      render(){
          const title="Indecision";
          const subtitle="Put your life in the hands of a computer";
          return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
            hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}            
            />
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeletaOption={this.handleDeletaOption}
            />
           
            <AddOption 
            handleAddOptions={this.handleAddOptions}
            />
            </div>
          );
      }
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

//stateless component dont use "this"
  const Options = (props)=>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length===0 && <p>Please add an option to get started!</p>}
        {props.options.map((cur)=>(
            <Option 
            key={cur} 
            optionText={cur}
            handleDeletaOption={props.handleDeletaOption}
            />))
        }        
        </div>
    );
  };
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

//stateless component
  const Option = (props) =>{
    return(
        <div>        
        Option: {props.optionText}
        <button 
        onClick={(event)=>{
            props.handleDeletaOption(props.optionText)
        }}
        >remove</button>
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

        // this.setState(()=>{
        //     return{
        //         error
        //     }
        // }) 
        
        this.setState(()=>({
            error:error
        }))

        //if no error-->clear input on UI
        if(!error){
            event.target.elements.option.value='';
            }
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
const appRoot=document.getElementById("app");
ReactDOM.render(<Indecision />, appRoot);

