export const formateDate = (date, config) => {
    const defaultOptions = {daty: "numeric", month:"short", year: "numeric"}
    const options = config ? config : defaultOptions

    return new Date(date).toLocaleDateString("en-US", options)

}