import React from "react";

// h-[30vh] w-[40vh] rounded-full ml-10 shadow-2xl
const features = ({image, title, description, reverse = false}) => {
    return (
        <div  className={`flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse mx-20" : "md:flex-row"
          } gap-10 my-10 items-center`}>
            <img src={image} alt={title} className="h-[30vh] w-[40vh] rounded-full mx-auto shadow-md shadow-green-200"/>
            <div className="my-4">
                <h3 className="font-bold text-2xl text-green-600 text-center">{title}</h3>
                <p className="text-balance text-black text-opacity-80 text-xl text-center">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default features;