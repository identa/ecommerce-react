import React, { useState, useEffect, useRef } from 'react'

function LazyImage({src, alt}) {
    const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

    const [imageSrc, setImageSrc] = useState(placeHolder)
    const imageRef = useRef(null)
    
      const handleIntersection = (entries, observer) => {
        entries.map((entry) => {
            if(entry.isIntersecting) {
                setImageSrc(src)
                observer.unobserve(imageRef.current)
            }
        })
    }

    useEffect(() => {
        let observer
        if(IntersectionObserver){
            observer = new IntersectionObserver(handleIntersection, {
                threshold:0.01,
                rootMargin:"75%"
            })
            observer.observe(imageRef.current)
        } else {
            setImageSrc(src)
        }
        return () => {
            if(observer && observer.unobserve) {
                observer.unobserve(imageRef.current)
            }
        }
    }, [src, imageSrc, imageRef])
    return (
        <img className="img-fluid w-100" src={imageSrc} alt={alt} ref={imageRef}/>
    )
}

export default LazyImage
