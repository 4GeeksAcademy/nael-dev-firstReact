import React from "react";
import { Card, Nav, Jumbotron,Foot } from "./Card";
//include images into your bundle

const infoCard = [
	{
		title: "Naruto",
		img: 'https://www.lacasadeel.net/wp-content/uploads/2017/12/Naruto.png',
		text: 'Es la historia de Naruto Uzumaki, un ninja adolescente que sueña con ser el Hokage, el líder de su aldea. La serie se desarrolla en dos partes: la preadolescencia y la adolescencia de Naruto. ',
		buttonText:'Mas información',
		link:'https://es.wikipedia.org/wiki/Naruto'
	},
	{
		title: "Seven Deadly Sins",
		img: 'https://gritdaily.com/wp-content/uploads/2020/06/netmarble_seven-deadly-sins-grand-cross.jpg',
		text:'Los Siete Pecados Capitales (Nanatsu no Taizai) es una serie de anime que trata de un grupo de caballeros que se hacen llamar los "siete pecados capitales". Estos caballeros protegen Britannia de la opresión y buscan la redención por sus pecados',
		buttonText:'Mas información',
		link:'https://es.wikipedia.org/wiki/Nanatsu_no_Taizai'
	},
	{
		title: "Chainsaw Man",
		img: 'https://i.blogs.es/d250c6/chainsaw-man/1366_2000.jpeg',
		text:'Cuenta la historia de Denji, un adolescente que se transforma en un híbrido humano-demonio para cazar demonios',
		buttonText:'Mas información',
		link:'https://es.wikipedia.org/wiki/Chainsaw_Man'
	},
	{
		title: "Attack on titan",
		img: 'https://phantom-marca-mx.unidadeditorial.es/fbc666c4672aec420a5926c6876217d4/resize/720/f/webp/mx/assets/multimedia/imagenes/2023/11/05/16991427016479.jpg',
		text:'Es una historia sobre la lucha de la humanidad por sobrevivir a los titanes, criaturas humanoides que se alimentan de humanos. ',
		buttonText:'Mas información',
		link:'https://es.wikipedia.org/wiki/Shingeki_no_Kyojin'
	}
]


//create your first component
const Home = () => {



	return (
		<>
			<Nav />
			<Jumbotron />
			<div className="card-container d-flex flex-wrap justify-content-center mx-5">
                {infoCard.map((element, index) => (
                    <Card 
                        key={index}
                        imagen={element.img}
                        title={element.title}
                        text={element.text}
						buttonText={element.buttonText}
						link={element.link}
                    />
                ))}
            </div>
			<Foot/>

		</>
	);
};

export default Home;