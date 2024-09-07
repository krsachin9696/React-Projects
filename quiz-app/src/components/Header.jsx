import logoImage from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoImage} alt='Quiz Header'/>
            <h1>Quizzzer</h1>
        </header>
    )
}