import { useState } from 'react'

const useDisclosure = (initialOpen = false) => {
	const [state, setState] = useState<boolean>(initialOpen)

	const toggle = () => setState((value) => !value)
	const open = () => setState(true)
	const close = () => setState(false)

	return { isOpen: state, toggle, open, close }
}

export default useDisclosure
