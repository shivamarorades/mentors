import React from 'react';
import  Pops_props2  from './Pops_props2';
import { Mydata2, Mydata3 } from './Array';

let Card = () => {
    let Card_props = (props) => {
        var para = "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.";

        return (
            <>
                <div class="col s12 xl4 ">
                    <div class="card large   ring-gray-200 ring-1">
                        <div class="card-image ">
                            <img src={props.courses} />
                            <div className="flex justify-between mx-5 items-center">
                                <a href="#" className="my-2 bg-green-500 text-gray-50 text-lg capitalize px-3 py-1">{props.btn}</a>
                                <h3 className="text-xl  tracking-widest font-semibold text-grey-400">{props.price}</h3>
                            </div>
                        </div>

                        <div class="card-content ">
                            <h1 className=" font-bold  text-gray-800 text-2xl capitalize tracking-wide mb-3">{props.heading}</h1>

                            <p className=" text-sm text-grey-200 ">{para}</p>
                            <hr className="mt-4" />
                            <div className="flex justify-around mt-3">

                                <img src={props.imag} className="rounded-full responsive-img" width="18%" />
                                <div className="flex items-center ">
                                    <p className="text-gray-600 tracking-normal  text-lg capitalize">
                                        {props.caption}
                                    </p>
                                </div>

                                <div className="text-xl flex items-center">
                                    <i className="fa fa-user text-gray-500 mx-3">{" "}{props.icon1}</i>
                                    <i className="fa fa-heart text-gray-500">{" "}{props.icon2}</i>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    };
    let Card_val2 = (val) => {
        return (
            <>
                <Card_props btn={val.btns} courses={val.course} price={val.prices} heading={val.heads} imag={val.img} caption={val.captions} icon1={val.icon1} icon2={val.icon2} />
            </>
        );
    };
    let Card_val = (val) => {
        return (
            <>
                <Pops_props2 about1={val.course1} about2={val.course2} />
            </>
        );
    };
    return (
        <><br/><br/><br/><br/><br/>
            {Mydata2.map(Card_val)}
            
            <div class="row">
                <div className="mx-20">
                    {Mydata3.map(Card_val2)}
                </div>
            </div><br/><br/><br/><br/><br/>
        </>
    );
}
export default Card;