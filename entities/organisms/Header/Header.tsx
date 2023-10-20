import {Inner, Root, HeaderLogo} from "./styles";
import {HTMLAttributes} from "react";
import amLogo from "../../assets/am.svg";
import Image from "next/image";
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