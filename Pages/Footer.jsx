import React from 'react';
import {links,link2,listData} from './Array';
import $ from 'jquery';
let Footer=()=>{
$(document).ready(()=>{
    $('button').css('outline','none');
})
    let Footer_props=(props)=>{


        let Footer_props2=(props)=>{
            return(
                <>
              <li type="none"className="my-4"><a href="#"className="text-sm text-gray-500 capitalize tracking-wide hover:text-green-400 transition-all duration-300 leading-7 ">{props.list}</a></li>
         </>
            );
        };
        let Footer_val2=(val)=>{
            return(
                <>
                <Footer_props2 list={val.list}  />
                </>
            );
        }
        return(
            <>
             <div className="block">
             <h1 className="text-lg font-medium  text-black">{props.heading}</h1>
             {listData.map(Footer_val2)}
            </div> 
            </>
        );
    };
    let Footer_val=(val)=>{
        return(
            <>
            <Footer_props heading={val.link1}/>
            </>
        );
    }
    return(
        <>
        <footer className="">
            <div className="bg-gray-50">
            <br/><br/>
        <div className="row ">
            <div className="mx-20">
            <div className="col xl3 s12">
            <h1 className="text-3xl text-gray-700 capitalize tracking-widest">Mentor
                    </h1>
                    <h1 className="text-sm text-gray-500 leading-6 "><br/>
                    A108 Adam Street<br/>
New York, NY 535022<br/>
United States
                    </h1><br/>
                    <div className="row">
                        <div className="col s4">
                            <label className="font-semibold capitalize text-sm flex  text-black">phone: <span className="mx-3 text-gray-700 font-medium">8178911616</span></label>

<label className="font-semibold  text-sm flex text-black">Email:<span className="font-medium text-gray-600 mx-3">info@example.com</span></label>
                        </div>
                    </div>
                    </div>
                    <div className="col xl4 s12">
                    <div className="flex justify-between capitalize">

                    {links.map(Footer_val)}
                    {link2.map(Footer_val)}
                 </div>
             
                </div>
            <div className="col xl4 right s12">
            <h1 className="text-lg font-medium tracking-widest left capitalize  text-black">join our newsletter</h1>
          <br/><br/>  <p className="right">Tamen quem nulla quae legam multos aute sint culpa legam noster magnz
</p><br/><br/><br/>
<div class="row flex items-center">
    <div class="input-field col s6">
      <input  id="first_name2" type="text" class="validate"/>

      <label  for="first_name2">Search here</label>
      
    </div>
    <div className="col s5">
    <button className="btn bg-green-500 rounded-full waves-effect waves-light" >search</button>
    </div>
  </div>
 </div>
            </div>
        </div>
        <div className="bg-gray-200 h-20">        <div className="row bg-gray-200 h-24 flex items-center">
            <div className="mx-20"><div className="col xl5">
                <h1 className="capitalize text-gray-500 leading-6">© Copyright <b>Mentor</b>. All Rights Reserved
Designed by<a href="#"className="text-green-300 tracking-wide">BootstrapMade</a>
</h1></div>
<div className="col xl6 ">
    <div className="flex right">
    <a href="#" className="bg-green-500 text-white  hover:bg-blue-400 transition-all duration-500 text-lg mx-2 p-2  w-10 center h-10 rounded-full shadow-lg "><i  className="fa fa-twitter "/></a>
    <a href="#" className="bg-green-500 text-white hover:bg-blue-500 transition-all duration-500  text-lg mx-2 p-2 w-10 center h-10 rounded-full shadow-lg "><i  className="fa fa-facebook"/></a>
    <a href="#" className="bg-green-500 text-white hover:bg-pink-500 transition-all duration-500  text-lg mx-2 p-2 rounded-full w-10 center h-10 shadow-lg "><i  className="fa fa-instagram"/></a>
    <a href="#" className="bg-green-500 text-white hover:bg-blue-300 transition-all duration-500  text-lg mx-2 p-2 rounded-full w-10 center h-10 shadow-lg "><i  className="fa fa-skype"/></a>
    <a href="#" className="bg-green-500 text-white hover:bg-blue-900 transition-all duration-500  text-lg mx-2 p-2 rounded-full w-10 center h-10 shadow-lg  "><i  className="fa fa-linkedin"/></a>
    </div>
</div>
            </div>
        </div>
        </div>

        </div>
        </footer>
        </>
    );
}
export default Footer;