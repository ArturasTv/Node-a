import { type MouseEvent, useState } from "react";
import Button, { type ButtonProps } from "./button";
import ConfettiExplosion from "react-confetti-explosion";

function ExplodingButton({ onClick, children, ...props }: ButtonProps) {
    const [isExploding, setIsExploding] = useState(false);

    const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setIsExploding(true);
        onClick?.(event);
    };

    return (
        <Button onClick={handleClick} {...props}>
            {children}
            {isExploding && <ConfettiExplosion onComplete={() => setIsExploding(false)} className="absolute" />}
        </Button>
    );
}

export default ExplodingButton;
