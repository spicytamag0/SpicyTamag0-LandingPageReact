import React from "react";


import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";


let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://articles-img.sftcdn.net/t_article_cover_xl/auto-mapping-folder/sites/2/2010/07/Videogame-Glitches-Animated-Gifs.jpg"
							cardTitle="Super Mario"
							cardDescription="Mario (マリオ?) es un personaje ficticio creado por el diseñador de videojuegos japonés Shigeru Miyamoto, mascota de la compañía Nintendo y el protagonista de la franquicia de videojuegos homónima."
							buttonUrl="https://es.wikipedia.org/wiki/Mario_(personaje)"
							buttonLabel="Go to HERE WE GOOOOO"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2018/07/04/E5A23D89-99C8-427B-900B-B00F4D4FD5FB/58.jpg?crop=1905,1080,x0,y0&width=1000&height=567&optimize=high&format=webply"
							cardTitle="Tingle"
							cardDescription="Tingle es un personaje de ficción de la serie de videojuegos de Nintendo, The Legend of Zelda y que actualmente participa en su propia serie de videojuegos de Tingle."
							buttonUrl="https://es.wikipedia.org/wiki/Tingle"
							buttonLabel="Go to Hyrule Kingdom"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.blogs.es/4d4a4b/rabbids/450_1000.jpeg"
							cardTitle="Rabbids"
							cardDescription="Los Rabbids (conocidos en Francia como Lapins crétins, lit. conejos idiotas) son personajes ficticios, una especie de conejos antropomórficos, que aparecen por primera vez en el videojuego Rayman Rabbing Rabbids"
							buttonUrl="https://es.wikipedia.org/wiki/Rabbid"
							buttonLabel="Go to AHHHHHHHhhhhhHhhHh"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/05/ashley-graham-resident-evil-4.jpg?tf=3840x"
							cardTitle="Ashley Graham"
							cardDescription="Ashley Graham (アシュリー・グラハム Ashurī Gurahamu?) es un personaje de la serie de videojuegos de survival horror Resident Evil creada por la compañía japonesa Capcom."
							buttonUrl="https://es.wikipedia.org/wiki/Ashley_Graham_(Resident_Evil)"
							buttonLabel="Go to LEOOON HEEELP"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Creado con mucho curaçao - SpicyTamg0 {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
