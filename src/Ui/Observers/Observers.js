


const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
}


export const observeSingle = (styles) => {
    const observer = new IntersectionObserver((elements) => {
        if (elements[0].isIntersecting) {
            styles.forEach(style => elements[0].target.classList.remove(style))
            observer.unobserve(elements[0].target)
        } else if (!elements[0].isIntersecting) {
            styles.forEach(style => elements[0].target.classList.add(style))
        }
    }, options)

    return {
        observer: observer
    }
}



export const observeMultiple = ({styles, offObserver}) => {
    const observer = new IntersectionObserver((elements) => {
        elements.forEach(el => {
            if (el.isIntersecting) {
                styles.forEach(style => {
                    el.target.classList.remove(style)
                });
                if (offObserver) {
                    observer.unobserve(el.target)
                }
            } else if (!el.isIntersecting) {
                styles.forEach(style => {
                    el.target.classList.add(style)
                });
            }
        })
    }, options)
    return {
        observer: observer
    }
}

