export const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 flex sm:block flex-col gap-10 items-center text-center md:text-left">
          <p className="uppercase font-bold">À propos de moi</p>
          <h2 className="py-2">Qui suis-je ?</h2>

          <p className="py-2 tracking-wide font-semibold text-gray-700">
            Salut, je suis <span className="font-bold">Samir 24 ans</span> et je
            programme depuis l'âge de 16 ans dans la{" "}
            <span className="font-bold">modification/création</span> de jeux
            vidéo en commençant avec du
            <span className="font-bold"> JS/C#</span> sur{" "}
            <span className="font-bold">Unity 3d</span> où j'ai appris que la{" "}
            <span className="font-bold">création</span> d'un jeu n'était pas
            aussi simple qu'il n'y paraît...
          </p>

          <p className="tracking-wide font-semibold text-gray-700">
            J'ai donc continué ma route sur la
            <span className="font-bold"> modification</span> de jeux vidéo avec
            le fameux <span className="font-bold">GTA V</span> et grâce au
            <span className="font-bold"> modding</span> j'ai pu vraiment
            apprendre ce qu'est la programmation informatique, la logique,
            l'algorithme sur le tas.
          </p>

          <p className="py-2 tracking-wide font-semibold text-gray-700">
            À commencer en <span className="font-bold">LUA</span> qui est un
            langage vraiment <span className="font-bold">simple</span> et
            <span className="font-bold"> dynamique </span>
            que je vous recommande (qui était d'ailleurs utilisé côté
            <span className="font-bold"> client/serveur</span>)
          </p>

          <p className="tracking-wide font-semibold text-gray-700">
            puis continué avec cette fois un nouveau domaine :
            <span className="font-bold"> Les interfaces clients</span> avec
            l'utilisation de langages web tels que
            <span className="font-bold"> HTML/CSS, Javascript </span>
            c'est à partir de là que j'ai pu découvrir ce nouveau monde qui à
            mes yeux ne m'avait jamais intéressé avant. Le
            <span className="font-bold"> Développement Web</span>.
          </p>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <img
            className="my-16 md:my-0 p-2 md:ml-32 rounded-full"
            src="/assets/me.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
