import { animateScroll as scroll } from "react-scroll";
import Scroll from "../../assets/scroll.svg";

function ScrollToTop() {
  function scrollToTop() {
    scroll.scrollToTop();
  }
  return (
    <a
      onClick={scrollToTop}
      className="flex cursor-pointer bg-blue-200 hover:bg-blue-700 border-l-amber-100 rounded-lg w-36 p-5 mb-5"
    >
      To the top!!!
      <Scroll />
    </a>
  );
}

export default ScrollToTop;
