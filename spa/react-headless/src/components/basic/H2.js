import React from 'react'

const defaultClass = ['h2']
const defaultStyle = {
	textAlign: 'center'
}

const H2 = ({ text, className, style }) => {
	return <h2 className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} />
}

export default H2
