import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap items-center 
    max-xl:flex-col-reverse max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2
          className="mt-10
          font-palanquin text-4xl capitalize 
          font-bold lg:max-w-lg"
        >
          <span className="text-coral-red ">Special </span>
          Offer
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View detail" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
