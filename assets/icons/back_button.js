import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackButton(props) {
  return (
    <Svg
      width={34}
      height={21}
      viewBox="0 0 34 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M32.382 9.035H5.002L11.536 2.5A1.465 1.465 0 109.463.43L.429 9.464a1.465 1.465 0 000 2.072l9.035 9.035c.286.286.66.429 1.036.429a1.464 1.464 0 001.036-2.501l-6.534-6.534h27.38a1.465 1.465 0 000-2.93z"
        fill="#473144"
      />
    </Svg>
  )
}

export default BackButton
