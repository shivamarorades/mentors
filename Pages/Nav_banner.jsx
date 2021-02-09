import React from 'react';
import Sdata from './Array';
let Nav_banner = () => {
    let Nav_banner_props = (props) => {
        return (
            <>
                <a href="#" className="text-gray-900  px-4 capitalize  text-normal hover:text-green-400  transition-all duration-200 tracking-wide">{props.list}</a>
            </>
        );
    };
    let Nav_banner_val = (val) => {
        return (
            <>
                <Nav_banner_props list={val.lists} />
            </>
        );
    }
    return (
        <>
            <div className="navbar-fixed ">

                <nav className="  flex  items-center justify-between white">
                    <div className="text-green-400 ml-10 font-bold text-3xl uppercase tracking-wide">
                        mentor
    </div>
                    <div className="flex items-center mr-10 ">
                        {Sdata.map(Nav_banner_val)}
                        <a type="button" href="#" className="rounded-full bg-green-400 right hover:bg-green-500 text-white capitalize text-sm px-5 py-3">get started</a>

                    </div>

                </nav>
            </div>
        </>

    );
}
export default Nav_banner;