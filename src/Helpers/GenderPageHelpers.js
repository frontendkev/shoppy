import lingerie from '../images/femalepage/lingerie.jpeg'
import hoodie from '../images/femalepage/hoodie.jpg'
import weekend from '../images/femalepage/weekend.jpeg'
import sportsWear from '../images/femalepage/sportswear.jpg'
import gift from '../images/malepage/gift.jpeg';
import layer from '../images/malepage/layer.png'
import obey from '../images/malepage/obey.jpeg'
import sole from '../images/malepage/sole.png'

export default function GenderPageHelpers() {
    const MALE = 'male'
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

    function updateGender (gender) {
        switch (gender) {
            case FEMALE : {
                return {
                    link : [
                        {
                            title : 'shoppy design lingerie',
                            url : '/shoppy/female/lingerie',
                            image : lingerie,
                            text : "it's the little thing's"
                        },
                        {
                            title : 'winter wears',
                            url : '/shoppy/female/winter',
                            image : hoodie,
                            text : "sweatshirts, hoodies and then some..."
                        },
                        {
                            title : 'shoppy weekend collections',
                            url : '/shoppy/female/collections',
                            image : weekend,
                            text : "just dropped heat"
                        },
                        {
                            title : 'workout wears',
                            url : '/shoppy/female/sportswear',
                            image : sportsWear,
                            text : "pump it up"
                        },
                    ]
                }
            }
            case MALE : {
                return {
                    link : [
                        {
                            title : 'gifts for them/you',
                            url : '/shoppy/male/collections',
                            image : gift,
                            text : "it's the little thing's"
                        },
                        {
                            title : "layer up",
                            url : '/shoppy/male/shirt',
                            image : layer,
                            text : "check'em out"
                        },
                        {
                            title : 'new in:obey',
                            url : '/shoppy/male/sweatshirt',
                            image : obey,
                            text : "streetwear steez"
                        },
                        {
                            title : 'sole season',
                            url : '/shoppy/male/shoes',
                            image : sole,
                            text : "stride with pride"
                        },
                    ]
                }
            }
            default: {
                return gender
            }
        }
    }
    return {
        scrollFunction,
        updateGender
    }
}
