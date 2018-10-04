console.log('app.js is running!');

//JSX-Javascript XML

//object 
// var user={
//     name:'Mel Mel',
//     age:19,
//     // location: 'VA'
// };

// //the return of this function will be shown in the expression
// function getLocation(loc){
//     if(loc){
//         return <p>Location: {loc}</p>;
//     }
// }
// //Variable 
// var userName="Phuong Tran";
// var userAge=29;
// var userLocation="Virginia";

// var template2 =(
//     <div>
//         <h1>{user.name? user.name:"anoymous"}</h1>
//         {(user.age && user.age>=18) && <p>{user.age}</p>}
        
//         {getLocation(user.location)}
//     </div>
// );

// //only render the subtitle if it exist
// //render new <p></p> if options exist
const app={
    title: "Indecision App",
    subtitle: "put your hands in the other hand",
    options:[]
};

const formSubmit=(event)=>{
    event.preventDefault();
    //get input from UI
    const option= event.target.elements.option.value;
    
    //check if has input, add to array
    if(option){
        app.options.push(option);
        event.target.elements.option.value="";
        event.target.elements.option.focus();
        renderForm();
    }
};

const reset=()=>{
    
    if(app.options.length>0){
        app.options=[];
        renderForm();
    }
};

const decision = ()=>{
    const random=Math.floor(Math.random()*app.options.length);
    const opt=app.options[random];
    alert(opt);
};
const appRoot=document.getElementById("app");

const renderForm=()=>{
    const template=(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle&&<p>Subtitle: {app.subtitle}</p>}
            <p>{app.options.length>0? "Here are some options":"No options"}</p>
            
            <button disabled={app.options.length===0} onClick={decision}>Which to choose</button>
            <button onClick={reset}>Remove All</button>
            <ol>
           {
               app.options.map((current)=>{                  
                   return<li key={current}>{current}</li>
                       
               })
           }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>    
            </form>
        </div>    
    );
    ReactDOM.render(template,appRoot);
};
renderForm();



