import React from 'react'

const defaultClass = ['img']
const defaultStyle = {
	width: '100%',
	height: 'auto',
	objectFit: 'cover'
}

const Image = ({ image, alt, className, style }) => {
	return <img className={className ? className : defaultClass} style={style ? style : defaultStyle} src={process.env.REACT_APP_MGNL_DAM_RAW + image['@link']} alt={alt} />
}

export default Image
