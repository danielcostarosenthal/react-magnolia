import { EventEmitter } from 'events'

export const events = new EventEmitter()

const { REACT_APP_MGNL_IS_PREVIEW, REACT_APP_MGNL_BASE_AUTHOR, REACT_APP_MGNL_BASE_PUBLIC, REACT_APP_MGNL_HOST, REACT_APP_MGNL_LANGUAGES, REACT_APP_MGNL_APP_BASE } = process.env

export const getAPIBase = () => `${REACT_APP_MGNL_HOST}${REACT_APP_MGNL_IS_PREVIEW ? REACT_APP_MGNL_BASE_AUTHOR : REACT_APP_MGNL_BASE_PUBLIC}`

export const getLanguages = () => REACT_APP_MGNL_LANGUAGES.split(' ')

export const removeCurrentLanguage = (string, currentLanguage) => string.replace(new RegExp(`/${currentLanguage}($|/)`), '/')

export const getCurrentLanguage = () => {
	const languages = getLanguages()
	const currentLanguage = languages.find((language) => new RegExp(`/${language}($|/)`).test(window.location.pathname))
	return currentLanguage || languages[0]
}

export const changeLanguage = (newLanguage) => {
	const { origin, pathname, search } = window.location
	const nodeName = REACT_APP_MGNL_APP_BASE
	const languages = getLanguages()
	let path = removeCurrentLanguage(pathname, getCurrentLanguage())

	if (languages[0] !== newLanguage) {
		path = path.indexOf(nodeName) > -1 ? path.replace(new RegExp(nodeName), `/${newLanguage}${nodeName}`) : `/${newLanguage}${path}`
	}

	window.location.href = `${origin}${path}${search}`
}

export const getRouterBasename = () => {
	const nodeName = REACT_APP_MGNL_APP_BASE
	const { pathname } = window.location

	if (pathname.indexOf(nodeName) > -1) {
		return pathname.replace(new RegExp(`${nodeName}.*`), '') + nodeName
	}

	return getCurrentLanguage() === getLanguages()[0] ? '/' : `/${getCurrentLanguage()}`
}

export const getVersion = (path) => new URLSearchParams(path).get('mgnlVersion')
