import React from 'react'

const Headline = ({ text, className }) => <h1 className={className} dangerouslySetInnerHTML={{ __html: text }} />

export default Headline
