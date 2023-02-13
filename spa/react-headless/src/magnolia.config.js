import Basic from './pages/Basic'
import H1 from './components/basic/H1'
import H2 from './components/basic/H2'
import H3 from './components/basic/H3'
import H4 from './components/basic/H4'
import H5 from './components/basic/H5'
import Image from './components/basic/Image'
import Link from './components/basic/Link'
import List from './components/List'
import Paragraph from './components/basic/Paragraph'
import Header from './components/Header'

const config = {
	componentMappings: {
		'react-module:pages/basic': Basic,
		'spa-lm:components/basic/h1': H1,
		'spa-lm:components/basic/h2': H2,
		'spa-lm:components/basic/h3': H3,
		'spa-lm:components/basic/h4': H4,
		'spa-lm:components/basic/h5': H5,
		'spa-lm:components/basic/image': Image,
		'spa-lm:components/basic/link': Link,
		'spa-lm:components/list': List,
		'spa-lm:components/basic/paragraph': Paragraph,
		'spa-lm:components/header': Header
	}
}

export default config
