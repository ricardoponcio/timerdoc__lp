import './about.css';

export function About() {

    return (<>
        <div id={'sobre'} className='about'>
            <p className='title'>Sobre</p>
            <div className='about-ps'>
                <p>O TimerDoc surgiu de uma necessidade de controlar prazos de documentos de uma consultoria. Nossa ideia foi implementar uma solução Web para este problema, com todos os benefícios que um sistema em nuvem pode ter.</p>
                <p>Além da necessidade, utilizamos da possibilidade de upload de arquivos para criar um histórico de entregas para cada documento com os recursos disponíveis em qualquer lugar do mundo. O armazenamento é seguro e somente quem você permitir poderá ter acesso a eles, mantendo confidencialidade e o comodismo ao mesmo tempo.</p>
                <p>Você também receberá alertas para seus documentos individualmente e a respeito de cada entrega a ser realizada, aliado ao esquema de permissões baseados em perfis que permite controlar quem irá gerenciar de fato cada documento e cada entrega.</p>
            </div>
        </div>
    </>);
}