import React from 'react'

const defaultClass = ['link']
const defaultStyle = {
	color: 'inherit',
	textDecoration: 'none'
}

const Link = ({ text, href, target, className, style }) => {
	return <a className={className ? className : defaultClass} style={style ? style : defaultStyle} dangerouslySetInnerHTML={{ __html: text }} href={href} target={target ? target : '_blank'} />
}

export default Link
