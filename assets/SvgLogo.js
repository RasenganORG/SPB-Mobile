import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgLogo = (props) => {
  const size = props.customSize ? { width: props.customSize.width, height: props.customSize.height } : { width: 156, height: 72 }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size.width}
      height={size.height}
      viewBox="17.98 17.75 120.02 36.47"
      {...props}
    >
      <Path
        d="M45.23 29.088c-.45-.279-1.041-.484-1.766-.643l-2.622-.566c-3.112-.668-5.118-2.057-5.118-5.091 0-3.034 2.495-5.04 6.583-5.04 3.96 0 6.712 2.263 6.737 5.58h-3.06c-.102-1.646-1.234-2.854-3.728-2.854-2.237 0-3.42.823-3.42 2.314 0 1.131.823 1.851 2.623 2.237l2.442.514c2.62.545 4.48 1.625 5.165 3.549H45.23zm21.043-8.383h-5.426v8.383h-3.034v-8.383h-5.426V17.98h13.886v2.726zm15.176 8.383H78.23l-2.7-7.946h-.103l-2.7 7.946h-3.124l4.024-11.109h3.78l4.042 11.109zm5.211 0a13.795 13.795 0 01-.15-2.057c0-5.4 2.829-9.283 8.229-9.283 4.474 0 7.225 2.674 7.585 6.223h-3.085c-.258-1.929-1.672-3.446-4.5-3.446-3.678 0-5.143 2.88-5.143 6.506 0 .724.06 1.414.18 2.057H86.66zm15.857 0h-7.264v-2.674h7.303v1.723c0 .325-.013.642-.039.951zm7.804 0h-3.034V17.979h3.034v11.109zm8.795 0h-3.035V17.979h3.035v11.109z"
        fill="#f2e3c6"
      />
      <Path
        d="M65.546 53.99h8.931c3.523 0 5.734-1.902 5.734-5.193 0-2.469-1.285-3.729-2.725-4.346v-.103c1.157-.617 2.057-1.723 2.057-3.677 0-2.957-2.212-4.68-5.323-4.68h-8.674v18zm2.983-10.619v-4.706h5.305c1.749 0 2.649.849 2.649 2.237 0 1.646-1.054 2.469-2.829 2.469H68.53zm0 7.92v-5.297h5.511c2.057 0 3.086 1.054 3.086 2.648 0 1.62-1.132 2.649-3.086 2.649h-5.511zM91.763 54.222c4.294 0 7.226-2.443 7.226-6.917V35.991h-3.035v11.263c0 2.443-1.157 4.243-4.191 4.243-2.983 0-4.166-1.8-4.166-4.243V35.99H84.59v11.314c0 4.474 2.957 6.917 7.174 6.917zM104.469 53.99h2.958V40.852h.102l8.1 13.14h3.472v-18h-2.983v13.217h-.103l-8.1-13.217h-3.446v18zM124.883 53.99h13.115v-2.7h-10.106v-5.219h7.903v-2.726h-7.903v-4.628h10.106V35.99h-13.115v18zM17.977 54.105h3.008v-6.3h4.507c3.625 0 5.94-2.468 5.94-5.914 0-3.343-2.263-5.785-5.94-5.785h-7.515v18zm3.008-9.025v-6.274h3.992c2.083 0 3.369 1.105 3.369 3.085 0 2.083-1.209 3.189-3.369 3.189h-3.992zM35.953 54.105h13.114v-2.7H38.962v-5.22h7.902V43.46h-7.902V38.83h10.105v-2.726H35.953v18z"
        fill="#F26649"
      />
    </Svg>
  )
}

export default SvgLogo
