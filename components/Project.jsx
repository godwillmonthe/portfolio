import { ProjectItems } from "./Project.items.component";

import todo from "../public/assets/projects/todo.jpg";
import paint from "../public/assets/projects/paint.jpg";
import gta_marker from "../public/assets/projects/gta_marker.png";
import gta_gravity from "../public/assets/projects/gta_gravity.png";
import gta_console from "../public/assets/projects/gta_console.png";



export const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="font-bold uppercase">Projets</p>
        <h2 className="pt-2 pb-5">Mes réalisation web</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItems
            title={"Todo List"}
            stack={"React JS"}
            img={todo}
            textAbout={"Tester le projet"}
            link={"https://supercoolninja.github.io/todo-list/"}
          />
          <ProjectItems
            title={"Paint App"}
            stack={"HTML/CSS/JS"}
            img={paint}
            textAbout={"Tester le projet"}
            link={"https://supercoolninja.github.io/Paint-Web-App/"}
          />
        </div>

        <h2 className="pt-32 pb-5">Mes réalisation jeux-vidéo</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItems
            title={"GTA V Marker"}
            stack={"CPP"}
            img={gta_marker}
            textAbout={"En savoir plus"}
            link={"https://www.gta5-mods.com/scripts/gta_marker"}
          />
          <ProjectItems
            title={"GTA V Gravity"}
            stack={"CPP"}
            img={gta_gravity}
            textAbout={"En savoir plus"}
            link={"https://www.gta5-mods.com/scripts/ngravitygun-v1"}
          />

          <ProjectItems
            title={"GTA V Console"}
            stack={"CPP"}
            img={gta_console}
            textAbout={"En savoir plus"}
            link={"https://fr.gta5-mods.com/tools/gta_console"}
          />
        </div>
      </div>
    </div>
  );
};
