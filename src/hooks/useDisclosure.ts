import { useState, useCallback } from 'react'

interface UseDisclosureProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    toggle: () => void
}

export const useDisclosure = (
    initialState: boolean = false
): UseDisclosureProps => {
    const [isOpen, setIsOpen] = useState(initialState)

    const onOpen = useCallback(() => setIsOpen(true), [])
    const onClose = useCallback(() => setIsOpen(false), [])
    const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

    return { isOpen, onOpen, onClose, toggle }
}
