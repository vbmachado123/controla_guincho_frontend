import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { TextMultipleStyle } from "../components/TextMultipleStyle";
import imageAsset  from "../assets/images/login_background.png";
import { Feedback } from "../components/Feedback";

export function ItemDetails() {
    return (
         <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto overflow-x-hidden bg-slate-100 ">
          
            <div className="col-span-6 items-center justify-center w-full h-screen mt-24">
                        <div className="relative flex flex-row justify-between  px-24"> 
                            <div className="flex flex-row items-center text-green-500 hover:text-green-600 transition-all ease-linear">
                                <MdKeyboardBackspace className="" size={22}/>
                                <a href="/list/attendance" className="item-center font-medium text-lg ml-2">Voltar</a>
                            </div>
                            <Button onClick={() => {}} label={"Exportar"} style={"bg-green-500 text-white"} /> 
                          
                        </div>

                        <div className="mt-8 mx-24 overflow-y-scroll px-8 py-8 bg-white shadow-xl rounded-3xl flex flex-col mb-16">
                            
                            <div className="flex flex-row justify-between">
                                <TextMultipleStyle title={"Cliente"} content={" Jorge Alves"}/>
                                <TextMultipleStyle title={"Veículo"} content={" Jorge Alves"}/>
                                <TextMultipleStyle title={"Valor"} content={" Jorge Alves"}/>
                            </div>
                            <div className="py-8">

                                <TextMultipleStyle title={"Origem"} content={"Atendimento: Reboque.me (KOVI)"}/>
                            </div>

                                <div className="flex flex-col">
                                   
                                    <hr/>
                                     
                                     <h4 className="text-green-500 font-bold text-lg pt-8 pb-4">Endereços</h4>   

                                    <div className="flex flex-row justify-between">
                                        <TextMultipleStyle title={"Saída"} content={"Av Paulista 2253"}/>
                                        <TextMultipleStyle title={"Retirada"} content={"Consolação 123"}/>
                                        <TextMultipleStyle title={"Entrega"} content={"Rua Eng. Borges 2253"}/>
                                    </div>
                                </div>

                                <hr className="mt-8"/>

                            <h4 className="text-green-500 font-bold text-lg pt-8 pb-4">Fotos</h4>   

                            <div className="flex flex-row overflow-x-scroll scroll-smooth w-full">
                                <Image title={"Retirada"} path={imageAsset}/>
                                <Image title={"Entrega"} path={imageAsset}/>
                                <Image title={"Entrega"} path={imageAsset}/>
                            </div>
                        </div>        
            </div>
                <Header currentPage={"atendimento"}/>
                <Feedback/>
        </div>
    );
}