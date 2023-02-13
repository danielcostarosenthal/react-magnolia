import React from 'react'

const defaultClass = ['h3']
const defaultStyle = {
	textAlign: 'center'
}

const H3 = ({ text, className, style }) => {
	return <h3 className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} />
}

export default H3
