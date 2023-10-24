import {Inner, Root, HeaderLogo, headerHeight} from "./styles";
import {HTMLAttributes} from "react";
import amLogo from "../../assets/am.svg";
import {sizes} from "../../design-tokens/dimensions";
import Link from "next/link";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Header({children, ...rest}: HeaderProps) {
    return <Root {...rest}>
        <Inner>
            <Link href="/">
                <HeaderLogo src={amLogo} alt="AM logo" height={sizes.s32.raw} />
            </Link>
        </Inner>
    </Root>
}

Header.height = headerHeight;