import quizLogo from '../assets/quiz-logo.png'

function Header(params) {
    return (
        <>
            <header>
                <img src={quizLogo} alt="Quiz Logo" />
                <h1 >reactquiz</h1>
            </header>
        </>
    )
}

export default Header