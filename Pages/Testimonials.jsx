import React from 'react';
import {About1_val} from './About';
import {Mydata4,Mydata5} from './Array';
import M from 'materialize-css/dist/js/materialize.min.js';
let Testimonials=()=>{
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, {});
      });
    
    let Testimonial_props=(props)=>{
        return(
    <div className="xl4 s12 col hover">
        <div className="card ring-1 ring-gray-200">
    <div className="">
    <img src={props.imag} className="materialboxed cursor-pointer" />
    </div>
    <div className="card-content mt-4 center">
        <h1 className="text-xl capitalize font-bold text-gray-600">
            {props.heading}
        </h1>
        <h1 className="text-xs italic ">
            {props.caption}
        </h1>
        <br/>
        <p className="text-gray-400  text-sm italic">{props.para}</p>
        <div className="text-gray-400 text-lg flex justify-around mx-24 mt-5">
            <i className="fa fa-twitter"/>
            <i className="fa fa-facebook"/>
            <i className="fa fa-instagram"/>
            <i className="fa fa-linkedin"/>
        </div>
    </div>
    </div>
    </div>
        );
    }
    let Testimonial_val=(val)=>{
        return(
            <>
            <Testimonial_props imag={val.imag} heading={val.heading} caption={val.caption} para={val.para} />
            </>
        );
    };
    return(
        <>
        {Mydata4.map(About1_val)}
        <div className="row">
            <div className="mx-20">
            {Mydata5.map(Testimonial_val)}
            </div>
        </div>
        </>
    );
}
export default Testimonials;