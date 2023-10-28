import SVGMorph from "../SVGMorph";
import { shape1, shape1_morphed, shape2, shape2_morphed } from "./path";
const index = () => {
  return (
    <div className="w-[15vw] h-[15vw] flex items-center justify-center">
      <svg
        className="w-full"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144 178"
      >
        <SVGMorph paths={[shape1, shape1_morphed, shape1]} />
        <SVGMorph paths={[shape2, shape2_morphed, shape2]} />
      </svg>
    </div>
  );
};

export default index;
