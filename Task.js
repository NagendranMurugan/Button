
    // function ask(question, yes, no) {
    //     if (confirm(question)) yes();
    //     else no();
    //   }
      
    //   ask(
    //     "Do you agree?",
    //     function() { alert("You agreed."); },
    //     function() { alert("You canceled the execution."); }
    //   );
      
    

    const Task = () =>{

        const handleClick = () =>{
            console.log('hello, naga');
        }

        const handleClickOnace=(name) =>{
            console.log('hello' + name);
        }

        return(
            <div className="task">
              
              <div>
               <button onClick={handleClick}> click </button>
               <br>
               </br><button onclick={()=> {
                handleClickOnace('naga')
               }}>click me Onace</button>
            </div>
            </div>
        )
        };

        export default Task;








