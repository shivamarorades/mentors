import React from 'react';
import {Sdata3} from './Array';
let Numbers=()=>{
    let Numbers_props=(props)=>{
        return(
            <>
            <div className="col xl3 center  ">
                
            <h3 className="text-green-500 font-bold text-5xl">{props.No}</h3>
            <br/>
            <li className="text-black font-semibold capitalize" type="none">{props.numm}</li>
            <br/><br/>
            </div>
            </>
        );
    };
    let Numbers_val=(val)=>{
        return(
<>
<Numbers_props No={val.number} numm={val.num} />
</>

        );
    };
    return(
        <>
        <div className="row bg-gray-100 mt-10 "><br/><br/>
            {Sdata3.map(Numbers_val)}
            </div>
      
        </>
    );
}
export default Numbers