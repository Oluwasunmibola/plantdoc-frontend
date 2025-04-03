import React from "react";

const PlantButton = ({buttonName}) => {
    return (
            <button className="bg-green-600 h-12 w-40 rounded-2xl mt-5 text-white hover:bg-green-900 transition ease-in-out delay-150 hover:-translate-y-5">
                {buttonName}
            </button>
    )
}

export default PlantButton;