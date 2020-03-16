import React from "react";
import './Intro.css';


export default function Intro() {
  return (
    <div id="intro">
        <div className="video">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/4euEVkkLVYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   className="video-gris"></iframe>
       </div>
       <div className="quemsomos">
            <p className="descricao">O <strong>GRIS Espaço Solidário – Casa Maria de Lourdes</strong> é um espaço  sem fins lucrativos situada no bairro da Várzea no Recife. Ela fornece apoio psicopedagógicos a crianças e famílias da comunidade Vila Arraes e entorno. Fundada há um ano por Joice Paixão e Cristina Zidanes, a instituição inicialmente funcionava como um centro de redistribuição de doações para a comunidade, mas o projeto evoluiu e passou a oferecer diversas atividades gratuitas para as famílias da comunidade, incluindo o acompanhamento pedagógico de crianças de 5 a 15 anos e o acompanhamento psicológico tanto das crianças como das famílias. O espaço ainda oferece atividades de reforço escolar, atendimentos terapêuticos, aulas de dança, audiovisual, atendimento psicopedagógico, arte e ludicidade, aulas de inglês e musicalidade. São atendidas um total de 60 crianças e 50 famílias, também atuando por meio de bazar solidário e arrecadação e distribuição de cestas básicas.</p>
       </div>
    </div>
  );
}