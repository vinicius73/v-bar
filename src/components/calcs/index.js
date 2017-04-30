import getCoordinates from './get-coordinates'

const canShowBar = (wrapperValue, containerValue) => {
        return (wrapperValue - containerValue) > 24 && (wrapperValue - containerValue) !== 0
    },
    calculeSizeValue = (containerValue, wrapperValue) => (containerValue / wrapperValue) * containerValue,
    getHorizontalSize = (wrapperObj, container) => {
        return canShowBar(wrapperObj.scrollWidth, container.scrollWidth)
      ? calculeSizeValue(container.scrollWidth, wrapperObj.scrollWidth)
      : 0
    },
    getVerticalSize = (wrapperObj, container) => {
        return canShowBar(wrapperObj.scrollHeight, container.scrollHeight)
        ? calculeSizeValue(container.scrollHeight, wrapperObj.scrollHeight)
        : 0
    }

export { getHorizontalSize, getVerticalSize, getCoordinates }
