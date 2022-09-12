export const About = ({ t }) => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 flex sm:block flex-col gap-10 items-center text-center md:text-left">
          <p className="uppercase font-bold">{t("about:about_me")}</p>
          <h2 className="pt-2 pb-5">{t("about:who")}</h2>

          <p className="py-2 tracking-wide font-semibold text-gray-700">
            {t("about:me")}
            <span className="font-bold"> Samir, {t("about:years")} </span>
            {t("about:do")}
            <span className="font-bold"> modification/creation </span>
            {t("about:games")}
            <span className="font-bold"> JS/C#</span> {t("about:on")}
            <span className="font-bold"> Unity 3d </span>
            {t("about:learned")}
          </p>

          <p className="tracking-wide font-semibold text-gray-700">
            {t("about:first_section")}
          </p>

          <p className="py-2 tracking-wide font-semibold text-gray-700">
            {t("about:second_section")}
          </p>

          <p className="tracking-wide font-semibold text-gray-700">
            {t("about:domaine")}
            <span className="font-bold"> {t("about:interfaces")} </span>
            {t("about:langages")}
            <span className="font-bold"> HTML/CSS, Javascript </span>,
            {t("about:new")}
            <span className="font-bold">{t("about:web")}</span>.
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
