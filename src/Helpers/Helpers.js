export default function Helpers() {

    function scrollFunction(direction, count, nextBtn, prevBtn, setCount, length) {

        switch (direction) {

            case "next": {
                if (count < length - 1) {
                    nextBtn.current.disabled = false
                    prevBtn.current.disabled = false
                    return setCount(c => c + 1)
                } else if (count === length - 1) {
                    nextBtn.current.disabled = true
                    return setCount(c => count)
                }
                return;

            }

            case "prev": {
                if (count > 0) {
                    prevBtn.current.disabled = false
                    nextBtn.current.disabled = false
                    return setCount(c => c - 1)
                } else if (count === 0) {
                    prevBtn.current.disabled = true
                    return setCount(c => count)
                }
                return;
            }

            default:
                return direction
        }


    }

    return {
        scrollFunction
    }
}