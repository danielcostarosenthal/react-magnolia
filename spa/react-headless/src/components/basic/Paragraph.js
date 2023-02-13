import React from 'react'

const defaultClass = ['p']
const defaultStyle = {
	textAlign: 'left'
}

const Paragraph = ({ text, className, style }) => {
	return <p className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} />
}

export default Paragraph
