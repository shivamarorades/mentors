import React from 'react'

let Pops_props2 = (props) => {
    return (
        <>
            <div className="row">
                <div className="mx-24">
                    <div className="xl6 s12">
                        <div className="flex items-center mb-2 ml-1 ">
                            <h2 className=" text-gray-500 font-semibold wide uppercase ">{props.about1}</h2>
                            
                            <h3 className=" mx-2 w-24 wide  font-semibold bg-green-500"style={{height:"1px"}}></h3>
                        </div>
                        <h1 className="text-grey-200 tracking-wider font-bold uppercase  left text-4xl">{props.about2}</h1>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}
export default Pops_props2;