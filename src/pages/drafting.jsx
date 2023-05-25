import React from "react";
import Navbar from "../components/navbar";

export default function Drafting(){



    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-[95%] h-[93%] grid grid-cols-3 mx-auto border rounded-xl shadow-lg">
                    <div className="col-span-1 bg-red-300 m-3 rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}