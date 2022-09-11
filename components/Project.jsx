import { ProjectItems } from "./Project.items.component";

import todo from "../public/assets/projects/todo.jpg";


export const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="font-bold uppercase">Projets</p>
        <h2 className="pt-2 pb-5">Mes Créations</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItems title={"Todo List"} stack={"React JS"} img={todo} />
          <ProjectItems title={"Todo List"} stack={"React JS"} img={todo} />
          <ProjectItems title={"Todo List"} stack={"React JS"} img={todo} />
          <ProjectItems title={"Todo List"} stack={"React JS"} img={todo} />
          <ProjectItems title={"Todo List"} stack={"React JS"} img={todo} />
        </div>
      </div>
    </div>
  );
};
