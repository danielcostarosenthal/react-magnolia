import Image from './components/Image'
import Paragraph from './components/Paragraph'
import Headline from './components/Headline'
import Basic from './pages/Basic'
import List from './components/List'

const config = {
	componentMappings: {
		'react-module:pages/basic': Basic,

		'spa-lm:components/image': Image,
		'spa-lm:components/paragraph': Paragraph,
		'spa-lm:components/headline': Headline,
		'spa-lm:components/list': List
	}
}

export default config
