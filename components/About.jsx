export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 flex sm:block flex-col gap-10 items-center text-center md:text-left">
          <p className="uppercase font-bold">About me</p>
          <h2 className="pt-2 pb-5">Who am I?</h2>

          <p className="py-2 tracking-wide font-semibold text-gray-700">
            Hi, I'm <span className="font-bold">Samir, I'm 24 years old </span>
            and I've been programming since I was 16 years old in the
            <span className="font-bold"> modification/creation</span> of video
            games starting with
            <span className="font-bold"> JS/C#</span> on
            <span className="font-bold"> Unity 3d </span>
            where I learned that creating a game is not as simple as it seems.
          </p>

          <p className="tracking-wide font-semibold text-gray-700">
            So I continued my journey on the modification of video games with
            the famous GTA V and thanks to modding I was able to really learn
            what is computer programming, logic, the algorithm on scratch.
          </p>

          <p className="py-2 tracking-wide font-semibold text-gray-700">
            Starting with LUA which is a simple and dynamic language that I
            recommend (which was used on the client/server side).
          </p>

          <p className="tracking-wide font-semibold text-gray-700">
            then I continued with a new domain: <span className="font-bold">the client interfaces</span> with the
            use of languages such as <span className="font-bold">HTML/CSS, Javascript</span>, it is at this moment
            that I was able to discover this new world which for me had
            never interested me before. <span className="font-bold">The Web development</span>.
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
