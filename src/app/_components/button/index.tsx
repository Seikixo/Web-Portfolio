'use client';

import { useMemo, ReactNode } from "react";
import classNames from "classnames";
import { cn } from "@/utils/cn";

function Button (props: Props) {

    const className = useMemo<string>(() => {
        const buttonType = props.buttonType ?? "primary";
        return cn(classNames({
            "bg-primary-container text-on-primary-fixed border-4 border-black px-10 py-6 text-2xl font-headline font-black uppercase tracking-widest neo-shadow neo-shadow-hover neo-shadow-active": buttonType === "primary",
            "bg-black text-white border-4 border-black px-12 py-5 font-headline font-black uppercase text-xl neo-shadow-hover neo-shadow-active": buttonType === "black",
            "bg-white text-black border-4 border-black px-12 py-5 font-headline font-black uppercase text-xl neo-shadow-hover neo-shadow-active": buttonType === "white",
        }, props.className)) 
        
    }, [props.className, props.buttonType])

    return (
        <button className={className}>
            {props.children}
        </button>
    );
}

type ButtonType = 'primary' | 'black' | 'white';
export type Props = {
    className?: string;
    buttonType?: ButtonType;
    children?: ReactNode;
}

export default Button