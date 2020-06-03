import React from 'react'
import  {Greet,MyGreet} from './ModuleB'


class ModuleA extends React.Component{

   

    render()
    {
    
      let cm=new MyGreet();

      console.log(cm.show())
        return(
            <div>Hi
            <Greet></Greet>
           
            </div>

          
        )
    }
}
export default ModuleA;