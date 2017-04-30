const calculeCoordinate = (sizeWrapper, sizeContainer, clientDirection, offsetContainer, sizeBar) => {
        return ((sizeWrapper - sizeContainer) * (clientDirection - offsetContainer)) / (sizeContainer - sizeBar)
    },
    getXCoordinates = (element, wrapperObj, container, bars) => {
        const sizeWrapper = wrapperObj.scrollWidth,
            sizeBar = bars.horizontal.size,
            sizeContainer = container.scrollWidth,
            offsetContainer = container.elm.offsetLeft,
            clientDirection = element.clientX

        return calculeCoordinate(sizeWrapper, sizeContainer, clientDirection, offsetContainer, sizeBar)
    },
    getYCoordinates = (element, wrapperObj, container, bars) => {
        const sizeWrapper = wrapperObj.scrollHeight,
            sizeBar = bars.vertical.size,
            sizeContainer = container.scrollHeight,
            offsetContainer = container.elm.offsetTop,
            clientDirection = element.clientY
        return calculeCoordinate(sizeWrapper, sizeContainer, clientDirection, offsetContainer, sizeBar)
    },
    getCoordinates = (element, wrapperObj, container, bars, axis) => {
        if (axis === 'X') {
            return getXCoordinates(element, wrapperObj, container, bars)
        }

        if (axis === 'Y') {
            return getYCoordinates(element, wrapperObj, container, bars)
        }

        throw new Error(`${axis} is a invalid axis (X, Y)`)
    }

export default getCoordinates
