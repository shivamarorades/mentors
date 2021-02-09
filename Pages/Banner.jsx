import React from 'react';
import image from '../img/hero-bg.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';

let Banner=()=>{
  
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
      });
      let Outline=()=>{
        const track=document.getElementById('outline2');
        track.style.outline="none";
      }
    return(
        <>
        <div className="parallax-container   "style={{background:"rgba(0,0,0,0.4)"}}>
        <div className="row "><div className="mx-20">
              <div className="col xl12 s12 mt-40  ">
                <h4 className="capitalize text-white  font-extrabold tracking-wider text-5xl  left leading-7">learning today,<br/><br/>leading tomorrow</h4>
             <br/><br/>   <div className="text-2xl mt-16 text-gray-100 ">We are team of talanted designers making websites with Bootstrap</div> 
           <br/> <button onClick={Outline} id="outline2" className="btn bg-green-500 capitalize text-lg rounded-full btn-large waves-effect waves-light">get started</button>
           </div>
                </div>
               
           </div>
    
            <div className="parallax">
                <img src={image} />
            </div>
        </div>
        </>
    );
}
export default Banner;