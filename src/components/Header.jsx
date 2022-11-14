import Logo from "../assets/Troll Face.svg";

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="logo" />
            <h1>Meme Generator</h1>
            <h2>React Course - Project 3</h2>
        </header>
    )
}