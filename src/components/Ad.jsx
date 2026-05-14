import { useState, useEffect } from "react";

const adSrcArray = [
    {
        id: 0,
        src: "/imgs/ad1.png"
    },
    {
        id: 1,
        src: "/imgs/ad2.png"
    },
    {
        id: 2,
        src: "/imgs/ad3.png"
    },
    {
        id: 3,
        src: "/imgs/ad4.png"
    }
]

function Ad({starterIndex = 0}) {
    const [adSrcID, setAdSrcID] = useState(starterIndex);
    
    useEffect(() => {
        const intervalID = setInterval(
            () => {
                setAdSrcID(count => (count + 1) % (adSrcArray.length));
            },
            20 * 1000);
        return (
            () => {
                if (intervalID) {
                    clearInterval(intervalID);
                }
            }
        )
    })
    
    const adSrc = adSrcArray.find((element) => element.id === adSrcID).src;
    return (
        <img key={adSrcID} src={adSrc} className="ad-img mx-auto" />
    )
}

export default Ad