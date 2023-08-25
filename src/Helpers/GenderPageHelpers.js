import lingerie from '../images/femalepage/lingerie.jpeg'
import hoodie from '../images/femalepage/hoodie.jpg'
import weekend from '../images/femalepage/weekend.jpeg'
import sportsWear from '../images/femalepage/sportswear.jpg'

export default function GenderPageHelpers() {

    const FEMALE = 'female'
    function scrollFunction(direction, count, nextBtn, prevBtn, setCount, length) {

        switch (direction) {

            case "next": {
                if (count < length - 1) {
                    nextBtn.current.disabled = false
                    prevBtn.current.disabled = false
                    return setCount(c => c + 1)
                } else if (count === length - 1) {
                    nextBtn.current.disabled = true
                    return setCount(() => count)
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
                    return setCount(() => count)
                }
                return;
            }

            default:
                return direction
        }


    }


    const Links = [
        {
            title: 'shoppy design lingerie',
            url: '/shoppy/lingerie',
            image: lingerie,
            text: "it's the little thing's"
        },
        {
            title: 'winter wears',
            url: '/shoppy/winter',
            image: hoodie,
            text: "sweatshirts, hoodies and then some..."
        },
        {
            title: 'shoppy weekend collections',
            url: '/shoppy/collections',
            image: weekend,
            text: "just dropped heat"
        },
        {
            title: 'workout wears',
            url: '/shoppy/sportswear',
            image: sportsWear,
            text: "pump it up"
        },
    ]
    return {
        scrollFunction,
        Links
    }
}
