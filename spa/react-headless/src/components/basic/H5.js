import React from 'react'

const defaultClass = ['h5']
const defaultStyle = {
	textAlign: 'center'
}

const H5 = ({ text, className, style }) => {
	return <h5 className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} />
}

export default H5
