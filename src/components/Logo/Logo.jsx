import { Tilt } from "react-tilt";
import brain from "../../assets/brain.svg"

const Logo = () => {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            45,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <div className="flex justify-center content-center border-spacing-3 border-slate-500">
      <Tilt options={defaultOptions} style={{ height: 150, width: 150 }} className="flex justify-center items-center m-2 bg-blue-500 rounded shadow-xl">
        <img src={brain} alt="logo" className="p-2"/>
      </Tilt>
    </div>
  )
}

export default Logo;