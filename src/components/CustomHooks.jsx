const { useEffect } = require('react')

export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title
    }, [title])
}