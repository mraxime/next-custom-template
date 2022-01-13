import { createContext, FC, useContext, useMemo, useState } from 'react'

type DisclosureContext = {
	isOpen: boolean
	toggle: () => void
	open: () => void
	close: () => void
}

const Context = createContext<DisclosureContext | undefined>(undefined!)

const useDisclosureContext = () => {
	const context = useContext(Context)
	if (context === undefined) {
		throw new Error(
			'useDisclosureContext must be used within a DisclosureProvider'
		)
	}

	return context
}

const DisclosureProvider: FC = ({ children }) => {
	const [state, setState] = useState<boolean>(false)

	const toggle = () => setState((value) => !value)
	const open = () => setState(true)
	const close = () => setState(false)

	const value = useMemo(() => ({ isOpen: state, toggle, open, close }), [state])

	return <Context.Provider value={value}>{children}</Context.Provider>
}

export { DisclosureProvider, useDisclosureContext }
