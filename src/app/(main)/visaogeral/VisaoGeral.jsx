"use client";

import EstatisticaGeral from "@/app/(main)/visaogeral/visaoGeral-components/estatisticaGeral";
import GraficoBarras from "@/app/(main)/visaogeral/visaoGeral-components/graficoBarras";
import PlotlyChart from "@/app/(main)/visaogeral/visaoGeral-components/graficoBarrasDinamico";
import Cameras from "@/app/(main)/visaogeral/visaoGeral-components/camera";

// vetores gráfico geral
var vetorXGeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var vetorYGeral = [
  5, 8, 150, 168, 180, 185, 177, 5, 8, 150, 168, 180, 185, 177,
];

// variaveis estatísticas
var mediaMensal = "7.6K";
var mediaSemanal = "1.8K";
var mediaDiaria = "230";
var periodoTrafego = "19h20";

// vetores grafico por local
var vetorXLocal = [19, 35, 28, 37, 48];
var vetorYLocal = ["4o andar", "3o andar", "2o andar", "1o andar", "Entrada"];

// vetores grafico dias semana
var vetorXDias = [5, 8, 150, 168, 180, 185, 177];
var vetorYDias = [
  "Domingo",
  "Sábado",
  "Sexta",
  "Quinta",
  "Quarta",
  "Terça",
  "Segunda",
];

export default function VisaoGeral() {
  return (
    <div
      id="conteudo"
      className="relative z-7 mt-14 w-full pt-4 pl-80 pr-[60px]"
    >
      <div outline outline-slate-100 outline-offset-8 rounded>
        <PlotlyChart
          nome={"TOTAL DIÁRIO - últimos 14 dias"}
          vetorX={vetorXGeral}
          vetorY={vetorYGeral}
          orientacao={"v"}
        />
      </div>
      <div className="flex justify-around items-center mb-12">
        <EstatisticaGeral
          numero={mediaMensal}
          nome={"Média mensal"}
        ></EstatisticaGeral>
        <EstatisticaGeral
          numero={mediaSemanal}
          nome={"Média semanal"}
        ></EstatisticaGeral>
        <EstatisticaGeral
          numero={mediaDiaria}
          nome={"Média diária"}
        ></EstatisticaGeral>
        <EstatisticaGeral
          numero={periodoTrafego}
          nome={"Período de maior tráfego"}
        ></EstatisticaGeral>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <PlotlyChart
          nome={"Por Local"}
          vetorX={vetorXLocal}
          vetorY={vetorYLocal}
          orientacao={"h"}
        />
        <PlotlyChart
          nome={"Por Dia da Semana"}
          vetorX={vetorXDias}
          vetorY={vetorYDias}
          orientacao={"h"}
        />
        <GraficoBarras
          nome={"Analítico"}
          imagem={"/graficos/grafico_analitico.png"}
        ></GraficoBarras>
        <div className="outline outline-slate-100 outline-offset-8 rounded mx-4">
          <div className="flex justify-between">
            <p className="mb-4">Câmeras</p>
            <p>...</p>
          </div>
          <div className="flex-col">
            <Cameras
              thumb={"/thumb_camera.jpg"}
              nome={"Câmera 1 - Entrada Mackenzie"}
              status={"ATIVA"}
            ></Cameras>
            <Cameras
              thumb={"/thumb_camera.jpg"}
              nome={"Câmera 2 - Primeiro andar"}
              status={"ATIVA"}
            ></Cameras>
            <Cameras
              thumb={"/thumb_camera.jpg"}
              nome={"Câmera 3 - Segundo andar"}
              status={"DESLIGADA"}
            ></Cameras>
            <Cameras
              thumb={"/thumb_camera.jpg"}
              nome={"Câmera 4 - Terceiro andar"}
              status={"ATIVA"}
            ></Cameras>
          </div>
        </div>
      </div>
    </div>
  );
}

//tentando implementar .map....
/*
                    <Cameras
                    thumb={[
                        "/thumb_camera.jpg",
                        "/thumb_camera.jpg",
                        "/thumb_camera.jpg",
                        "/thumb_camera.jpg"]}
                    nome={[
                        "Câmera 1 - Entrada Térreo",
                        "Câmera 2 - Primeiro andar",
                        "Câmera 3 - Segundo andar",
                        "Câmera 4 - Terceiro andar"]}
                    status={[
                        "ATIVA",
                        "ATIVA",
                        "MANUTENÇÃO",
                        "ATIVA"]}></Cameras>
*/
