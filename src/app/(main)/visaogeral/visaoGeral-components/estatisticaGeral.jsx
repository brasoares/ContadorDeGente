export default function EstatisticaGeral(props) {
    return (
    <div className='grid justify-items-center'>
        <p className="font-extrabold text-black">{props.numero}</p>
        <p className='font-bold text-sm' class="estatistica-texto">{props.nome}</p>
    </div>
    )
    }