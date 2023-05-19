import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Juno`;
    },[title])
}
export default useTitle;