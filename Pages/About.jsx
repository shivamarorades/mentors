import React from 'react';
import image from '../img/about.jpg';
import $ from 'jquery';
import { Sdata2, Mydata } from './Array';
import Pops_props2 from './Pops_props2';

let About = () => {
    $('document').ready(function(){
        $('.wide').css("letter-spacing", "4px"); 
    })    
    var smallContent = [
        'Voluptatem dignissimos provident quasi  corporis voluptates sit assumenda.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'Duis aute irure dolor in reprehenderit in voluptate',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    ];
    
    let About_props = (props) => {
        return (
            <>
                <li className="text-lg text-gray-600 leading-8">{props.para_list}</li>
            </>

        );
    };
    let About_val = (val) => {
        return (
            <>
                <About_props para_list={val.para_lists} />
            </>

        );
    };
    
    return (
        <>
            <section className="mt-20">
              
                {Mydata.map(About1_val)}
              
                              
                <div className="row mb-5">
                    <div className="mx-20">
                        <div className="col xl6 s12">
                            <p className="text-gray-800  text-2xl font-medium">{smallContent[0]}</p>
                            <p className="text-gray-800  text-lg mt-3">{smallContent[3]+smallContent[4]}</p>
                            {Sdata2.map(About_val)}<br />
                            <p className="text-lg text-gray-800 ">{smallContent[1]+smallContent[2]}</p>
                            <br />
                            <a type="button" href="#" className="rounded-full bg-green-500  hover:bg-green-600 text-white capitalize  px-6 py-2">learn more</a>
                        </div>
                        <div className="col xl6 s12">
                            <img src={image} className="responsive-img" />
                        </div>
                    </div>

                </div>


            </section>
        </>

    );
}
let About1_val = (val) => {
    return (
        <>
            <Pops_props2 about1={val.About1} about2={val.About2} />
        </>
    );
};
export default About;
export {About1_val};