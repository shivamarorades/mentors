import React from 'react';
import $ from 'jquery';
import { Sdata4 } from './Array';
let Content = () => {
    $('document').ready(function () {
        $('.hh').on('mouseenter', function () {
            $(this).css('background-color', 'white');
            $(this).css('color', 'green');
        })

        $('.hh').on('mouseleave', function () {
            $(this).css('background-color', '#81c784');
            $(this).css('color', 'white');
        })
        $('.hh').show(function () {
            $(this).css('background-color', '#81c784');
        })
    })

    let Content_para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.";
    let Content_props = (props) => {
        return (
            <>
                <div className="ring-1 ring-gray-200  h-96">
                    <div className="mt-20 mx-10 center-align ">
                        <i className="text-5xl  center material-icons">{props.icon}</i>

                        <div className="text-xl font-bold center-align text-gray-500 capitalize ">
                            {props.head}
                        </div>
                        <p className=" font-light text-sm mt-5 center-align ">
                            {props.para}
                        </p>
                    </div>
                </div>
            </>
        );
    };
    let Content_val = (val) => {
        return (
            <>
                <Content_props icon={val.icons} head={val.heading} para={val.paragraph} />
            </>
        );
    };
    return (
        <>
            <div className="row">
                <div className="mx-10">

                    <div className="col xl4 s12 rounded-lg green lighten-1" style={{ height: "67vh" }}><br /><br />
                        <div className="mx-5">
                            <h1 className="text-gray-50 text-4xl capitalize font-bold">why choose <br /> mentor ?</h1>
                            <p className="text-gray-50 text-lg my-5 leading-8">{Content_para}</p>
                            <a href="#" className=" hh  transition-all  duration-300 text-gray-50 capitalize text-sm  px-5 py-3  rounded-full"  >learn more</a>
                        </div>


                    </div>
                    <div className="col xl8 s12 my-14 flex justify-between">
                        {Sdata4.map(Content_val)}
                    </div>

                </div>
            </div>

        </>
    );
}
export default Content;