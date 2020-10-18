import React, { useState } from 'react'
import styled from 'styled-components'
const greenMarker = require('../MainMap/FMM_icon_no_border.png')
const Marker = ((props) => {
    const [clicked, setClicked] = useState(props.clicked)

    const hoverStyle = {
        position: 'absolute',
        zIndex: props.$hover ? 2 : 1,
        top: (clicked === true || props.$hover) ? -45 : -30,
        left: (clicked === true || props.$hover) ? -23 : -15,
    }

    const hoverHeight = {
        height: (clicked === true || props.$hover) ? '45px' : '30px',
        // zIndex: props.$hover ? 10 : 1

    }

    const _onClick = ((event) => {
        (clicked === true) ? setClicked(false) : setClicked(true)
    })

    return (
        <div style={hoverStyle} lat={props.lat} lng={props.lng}>
            <img style={hoverHeight} key={props.id + Date.now()} src={greenMarker} />
        </div>
    )
})

export default Marker;