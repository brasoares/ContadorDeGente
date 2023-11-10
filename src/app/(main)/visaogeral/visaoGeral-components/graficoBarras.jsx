export default function GraficoBarras(props) {
  return (
    <div className="flex-col justify-center mx-4 outline outline-slate-100 outline-offset-8 rounded">
      <div className="flex justify-between">
        <div className="mb-4">{props.nome}</div>
        <div>
          <p>...</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-full" src={props.imagem} />
      </div>
    </div>
  );
}
