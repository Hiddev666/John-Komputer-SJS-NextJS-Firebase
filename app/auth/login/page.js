import LoginForm from "./components/LoginForm"

const Login = () => {

    return (
        <div className="w-full h-screen flex justify-center items-center font-sans">
            <div className="bg-[url(/background-hero.svg)] bg-cover bg-right w-1/3 h-screen"></div>
            <div className="w-2/3 flex justify-center items-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
