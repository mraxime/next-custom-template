const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
	const isAndroid = () => Boolean(/android/i.test(userAgent))
	const isIos = () => Boolean(/iphone|ipad|ipod/i.test(userAgent))
	const isOpera = () => Boolean(/opera mini/i.test(userAgent))
	const isWindows = () => Boolean(/iemobile/i.test(userAgent))
	const isSSR = () => Boolean(/ssr/i.test(userAgent))
	const isMobile = () =>
		Boolean(isAndroid() || isIos() || isOpera() || isWindows())
	const isDesktop = () => Boolean(!isMobile() && !isSSR())

	return {
		isMobile,
		isDesktop,
		isAndroid,
		isIos,
		isSSR,
	}
}

export const useDevice = () => {
	const userAgent =
		typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
	return getMobileDetect(userAgent)
}
