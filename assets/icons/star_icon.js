import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon(props) {
  return (
    <Svg
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.38 6.372a.965.965 0 00.268-1.03 1.035 1.035 0 00-.852-.683l-3.559-.492a.464.464 0 01-.35-.243L8.295.854a1.054 1.054 0 00-.945-.56c-.404 0-.766.214-.945.56l-1.592 3.07a.464.464 0 01-.35.243l-3.56.493c-.4.055-.726.317-.85.683a.965.965 0 00.266 1.03l2.575 2.39a.43.43 0 01.134.393l-.607 3.375a.95.95 0 00.23.814c.313.356.861.464 1.3.245l3.182-1.594a.498.498 0 01.434 0l3.183 1.594a1.086 1.086 0 001.3-.245.95.95 0 00.23-.814l-.609-3.375a.43.43 0 01.135-.393l2.575-2.391z"
        fill="#473144"
      />
    </Svg>
  )
}

export default StarIcon
