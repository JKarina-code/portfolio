import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { info } from "../constants";
import { PersonCanvas } from "./canvas";
export const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {info.firstName} {info.lastName}
            </span>
            👋
          </h1>
          <br />
          <Typewriter
            options={{
              strings: [
                "Front End Developer",
                "Back End Developer",
                " I love programming",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
            }}
          />
        </div>
        <PersonCanvas />
      </div>
    </section>
  );
};
