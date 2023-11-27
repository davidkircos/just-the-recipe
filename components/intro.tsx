import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Just The Recipe
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        No articles or stories, just recipes by{" "}
        <a
          href="https://davidkircos.com"
          target="_blank"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          David
        </a>{" "}
        and{" "}
        <a
          href="https://explorer-directory.nationalgeographic.org/caroline-anne-quanbeck"
          target="_blank"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Caroline
        </a>
        {"."}
      </h4>
    </section>
  );
};

export default Intro;
