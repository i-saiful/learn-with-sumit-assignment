import { OutlineButton } from "./Button";
import FigmaIcon from "./icons/FigmaIcon";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Building digital <br />
            products & brands.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This free and open-source landing page template was built using the
            utility classes from{" "}
            <a href="#" className="hover:underline">
              Tailwind CSS
            </a>{" "}
            and based on the components from the Flowbite Library and the Blocks
            System.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <OutlineButton>
              <GithubIcon /> View on GitHub
            </OutlineButton>

            <OutlineButton>
              <FigmaIcon /> Get Figma file
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
