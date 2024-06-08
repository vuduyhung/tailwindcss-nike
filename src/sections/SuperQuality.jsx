import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="mt-10
        font-palanquin text-4xl capitalize 
        font-bold lg:max-w-lg"
        >
          We provide you
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red "> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          viverra ac magna et dignissim. Cras maximus a ex vitae feugiat. Etiam
          malesuada nisi sed viverra ullamcorper. Nulla tempus tortor libero, a
          porttitor urna dignissim eu.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          usce et justo et odio tristique semper. Vestibulum eget convallis
          odio.
        </p>
        <div className="mt-11">
          <Button label="View detail" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoes"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
