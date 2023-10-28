import SVGMorph from "../SVGMorph";
import {
  eye_l,
  eye_r,
  happy_eye_l,
  happy_eye_r,
  happy_smile,
  head,
  smile,
} from "./path";

const index = () => {
  return (
    <div className="w-[20vw] h-[20vw] flex items-center justify-center">
      <svg className="w-full">
        <path d={head} fill="white" />
        <SVGMorph paths={[smile, happy_smile, smile]} />
        <SVGMorph paths={[eye_l, happy_eye_l, eye_l]} />
        <SVGMorph paths={[eye_r, happy_eye_r, eye_r]} />
      </svg>
    </div>
  );
};

export default index;
