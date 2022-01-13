import type { ParsedUrlQueryInput } from 'node:querystring'
import type { UrlObject } from 'node:url'

interface RouteUrlObject extends Pick<UrlObject, 'pathname' | 'query'> {
	pathname: string
}

export const Routes = {
	// ===========================================================================
	// GENERAL
	// ===========================================================================
	HomePage: (query?: ParsedUrlQueryInput): RouteUrlObject => ({
		pathname: '/',
		query,
	}),
	Page404: (query?: ParsedUrlQueryInput): RouteUrlObject => ({
		pathname: '/404',
		query,
	}),
}
