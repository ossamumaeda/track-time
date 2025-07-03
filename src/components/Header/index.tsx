import { HeaderContainer } from "./style";
import { Timer, Scroll } from "phosphor-react";
import logoApp from '../../assets/logoApp.svg';
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logoApp} alt="" />
            <nav>
                <NavLink to="/">
                    <Timer size={24} alt="timer"/>
                </NavLink>
                <NavLink to="/history">
                    <Scroll size={24} alt="history"/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}