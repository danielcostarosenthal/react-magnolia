import React from 'react'

const defaultClass = ['h4']
const defaultStyle = {
	textAlign: 'center'
}

const H4 = ({ text, className, style }) => {
	return <h4 className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} />
}

export default H4
