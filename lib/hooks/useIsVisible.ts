"use client"
import {RefObject, useEffect, useState} from "react";

export function useIsVisible(ref: RefObject<Element>) {
    const [isIntersecting, setIntersecting] = useState(false);

    if(ref.current === null) {
        return false;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}