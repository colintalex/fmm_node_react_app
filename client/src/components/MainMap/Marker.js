import React, { useState } from 'react'
import styled from 'styled-components'
const Marker = ((props) => {
    const [clicked, setClicked] = useState(props.clicked)

    const hoverStyle = {
        position: 'absolute',
        zIndex: props.$hover ? 3 : props.zIndex,
        top: (clicked === true || props.$hover) ? -45 : -30,
        left: (clicked === true || props.$hover) ? -23 : -15,
    }

    const hoverHeight = {
        height: (clicked === true || props.$hover) ? '45px' : '30px',
        // zIndex: props.$hover ? 10 : 1

    }

    return (
        <div style={hoverStyle} lat={props.lat} lng={props.lng}>
            <img style={hoverHeight} alt={props.id} src={props.img} />
        </div>
    )
})

export default Marker;