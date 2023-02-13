import React from 'react'

const defaultClass = ['h1']
const defaultStyle = {
	textAlign: 'center'
}

const H1 = ({ text, className, style }) => {
	return <h1 className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} />
}

export default H1
