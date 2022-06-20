import { GiTowTruck } from "react-icons/gi";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
    return (
        <>
        <div className="relative flex flex-row w-screen h-screen bg-[url('./src/assets/images/login_background.png')] bg-center bg-inherit bg-auto bg-no-repeat ">
            <div className="absolute right-0 top-0 h-screen w-2/5 bg-slate-200 rounded-tl-3xl rounded-bl-3xl shadow-2xl px-8 py-16 flex flex-col items-center justify-between">
                <div className="text-green-500 items-center justify-center flex flex-col text-2xl">
                      <GiTowTruck size={42} className=''/>
                      <p className='font-bold'>Controla Guincho</p>
                </div>
                    
                <div className="w-2/3">
                    <form action="login">
                        <Input label={"Login"} id={"login"} placeholder={"Seu Login"} type={"name"}/>       
                        <Input label={"Senha"} id={"password"} placeholder={"Sua Senha"} type={"password"}/>    
                        <Button onClick={() => {}} label={"Fazer Login"} style={"bg-green-500 text-white w-full mt-4"}/>
                    </form>
                </div>
                <p className="text-blue-900 text-sm font-light justify-center items-center align-center">V: 1.0.5 - 2022</p>

            </div>
        </div>
        </>
    );
}