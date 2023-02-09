import React, { useState, useEffect } from 'react'
import config from '../magnolia.config'
import { getAPIBase, getCurrentLanguage, getLanguages, getVersion, removeCurrentLanguage } from './AppHelpers'
import { EditablePage, EditorContextHelper } from '@magnolia/react-editor'

const PageLoader = ({ pathname }) => {
	const [pageData, setPageData] = useState({})
	const { content, init, templateAnnotations } = pageData

	const getPagePath = () => {
		const languages = getLanguages()
		const currentLanguage = getCurrentLanguage()
		let path = `${pathname}${pathname.replace(new RegExp('.*' + pathname + '|.html', 'g'), '')}`

		if (currentLanguage !== languages[0]) {
			path = removeCurrentLanguage(path, currentLanguage)
			path += `?lang=${currentLanguage}`
		}

		return path
	}

	const loadPage = async () => {
		if (pageData.pathname === pathname) return

		const apiBase = getAPIBase()
		const pagePath = getPagePath()
		const config = { headers: {} }
		const isPersonalizationPage = sessionStorage.getItem(`personalized_${pathname.replace(/\//g, '_')}`)
		const params = new URLSearchParams(window.location.search)
		const version = getVersion(window.location.href)

		if (version) {
			params.append('version', version)
		}

		if (params.get('mgnlPreviewAsVisitor') !== 'true' && EditorContextHelper.inIframe()) {
			params.append('variants', 'all')
		}

		const queryString = params.toString()
		const ageHeader = sessionStorage.getItem('mgnlAgeHeader')

		if (isPersonalizationPage && ageHeader && !EditorContextHelper.inIframe()) {
			config.headers['X-Mgnl-Age'] = ageHeader
		}

		let fullContentPath = `${apiBase}${process.env.REACT_APP_MGNL_API_PAGES}${pagePath}`

		if (queryString) {
			fullContentPath += fullContentPath.includes('?') ? '&' : '?'
			fullContentPath += queryString
		}

		const pageResponse = await fetch(fullContentPath, config)
		const pageJson = await pageResponse.json()
		const templateId = pageJson['mgnl:template']

		let templateJson = {}

		if (window.location.search.includes('mgnlPreview')) {
			const templateResponse = await fetch(`${apiBase}${process.env.REACT_APP_MGNL_API_TEMPLATES}${pagePath}`)
			templateJson = await templateResponse.json()
		}

		setPageData({
			init: true,
			content: pageJson,
			templateAnnotations: templateJson,
			pathname: pathname
		})
	}

	useEffect(() => {
		loadPage()
	}, [pathname])

	if (init) {
		return <EditablePage templateAnnotations={templateAnnotations || {}} content={content} config={config} />
	}
}

export default PageLoader
