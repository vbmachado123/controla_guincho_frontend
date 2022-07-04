import { useState } from "react";
import { GiTowTruck } from "react-icons/gi";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/auth";

export function Login() {
    
    const history = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');    
    
    const { signIn } = useAuth();

    return (
        <>
        <div className="relative flex flex-row w-screen h-screen bg-[url('./src/assets/images/login_background.png')] bg-center bg-inherit bg-auto bg-no-repeat ">
            <div className="absolute right-0 top-0 h-screen w-2/5 bg-slate-200 rounded-tl-3xl rounded-bl-3xl shadow-2xl px-8 py-16 flex flex-col items-center justify-between">
                <div className="text-green-500 items-center justify-center flex flex-col text-2xl">
                      <GiTowTruck size={42} className=''/>
                      <p className='font-bold'>Controla Guincho</p>
                </div>
                    
                <div className="w-2/3">
                    <form onSubmit={() => signIn(email, password)}>
                        <div className='flex flex-col py-1'>
                            <label className='text-blue-900 text-sm' htmlFor='login'>Login</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="w-full bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y" 
                                type='name' placeholder='Seu Login' id='login'/>
                        </div>
                        <div className='flex flex-col py-1'>
                            <label className='text-blue-900 text-sm' htmlFor='password'>Senha</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="w-full bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y" 
                                type='password' placeholder='***********' id='password'/>
                        </div>
                       
                       <button type='submit' className={`btn mr-3 bg-green-500 text-white w-full mt-4 rounded-2xl px-6 py-3  font-normal drop-shadow-lg hover:bg-green-600 hover:shadow-2xl transition-all translate-x-0 animate-none`}>
                            {'Fazer Login'.toUpperCase()}
                        </button>
                        {/* <Button type='submit' onClick={() => {}} label={"Fazer Login"} style={"bg-green-500 text-white w-full mt-4"}/> */}
                    </form>
                </div>
                <p className="text-blue-900 text-sm font-light justify-center items-center align-center">V: 1.0.5 - 2022</p>

            </div>
        </div>
        </>
    );
}
