export default function Cameras(props) {
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="flex justify-start items-center ml-8">
            <img className="w-12 h-10 rounded-lg" src={props.thumb} />
            <p className="pl-4">{props.nome}</p>
            </div>
            <p className="pr-4">{props.status}</p>
        </div>
    )
    }

// tentando implementar .map...
/*export default function Cameras(props) {
    return (
        <div className="flex justify-around items-center mt-4">
            <div className="flex justify-start items-center ml-4">
            {props.thumb.map((item, index) => (
                <img key={index} className="w-12 h-10 rounded-lg" src={item} />
            ))}
            <p className="pl-4">{props.nome}</p>
            </div>
            <p>{props.status}</p>
        </div>
    )
    }
*/