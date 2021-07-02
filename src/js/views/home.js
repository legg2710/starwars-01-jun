import React from "react";
import { Personajes } from "../views/personajes";
import { Vehiculos } from "../views/vehiculos";
import { Planetas } from "../views/planetas";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<div className="personajespage">
            <Personajes />
        </div>
        <div className="vehiculospage">
            <Vehiculos />
        </div>
        <div className="planetaspage">
            <Planetas />
        </div>
	</div>
);
