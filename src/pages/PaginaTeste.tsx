import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
export function PaginaTeste() {
    const [estados, setEstados] = useState<any>([])
    useEffect(() => {
        async function dados() {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

            setEstados(response.data.map(estado => ({nome: estado.nome, id: estado.id})))
        }

        dados()
    }, [])
    return (
        <div className="flex flex-col w-screen h-screen">
            <div className='items-center flex flex-col mt-20'>
                <h4 className='text-green-500 font-bold'>Pagina teste</h4>
                <ul>
                    {estados.map(estado => {
                        return <li key={estado.id}>{estado.nome}</li>
                    })}
                </ul>
            </div>
        </div>
        
        
    );
}