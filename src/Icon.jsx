import React from "react"

function Icon(props) {
    return (
        <div className="hover:scale-110  duration-150">
            <a target="_blank" href={props.address}>
                <img className="h-12 w-12 object-cover" src={props.icon} />
            </a>
        </div>
    )
}
export default Icon