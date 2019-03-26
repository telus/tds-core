import React from 'react'
import SVGIcon from '../SVGIcon'

const SpeakerPhone = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
      <defs>
        <path
          id="speakerphone-a"
          d="M7.673,15.7405 C7.804,15.7405 7.92,15.7495 8.049,15.7505 L8.481,18.7705 C8.495,18.8665 8.53,18.9545 8.585,19.0315 L10.425,21.6325 L7.393,21.6325 C7.201,21.6325 7.036,21.4895 7.008,21.2995 L6.214,15.7405 L7.673,15.7405 Z M4.133,7.0885 L7.079,7.0885 L7.079,14.5535 L5.529,14.5535 L4.133,14.5535 C2.509,14.5535 1.188,13.2315 1.188,11.6075 L1.188,10.0335 C1.188,8.4095 2.509,7.0885 4.133,7.0885 L4.133,7.0885 Z M8.679,14.5745 C8.641,14.5665 8.604,14.5535 8.563,14.5535 L8.267,14.5535 L8.267,7.0755 C18.025,6.9405 21.562,3.5915 22.487,2.4295 C22.684,2.5275 22.811,2.7295 22.811,2.9545 L22.811,18.6855 C22.811,18.9105 22.684,19.1135 22.487,19.2105 C21.575,18.0655 18.123,14.7975 8.679,14.5745 L8.679,14.5745 Z M22.226,1.1795 C22.019,1.1795 21.823,1.2915 21.715,1.4705 C21.687,1.5145 18.871,5.9005 7.673,5.9005 L4.133,5.9005 C1.854,5.9005 1.13686838e-13,7.7545 1.13686838e-13,10.0335 L1.13686838e-13,11.6075 C1.13686838e-13,13.8865 1.854,15.7405 4.133,15.7405 L5.014,15.7405 L5.832,21.4665 C5.943,22.2385 6.614,22.8205 7.393,22.8205 L10.642,22.8205 C10.868,22.8205 11.086,22.7515 11.273,22.6185 C11.758,22.2695 11.872,21.5915 11.525,21.1035 L9.636,18.4595 L9.254,15.7795 C19.091,16.1725 21.689,20.1265 21.714,20.1665 C21.819,20.3465 22.016,20.4605 22.226,20.4605 C23.204,20.4605 24,19.6645 24,18.6855 L24,2.9545 C24,1.9755 23.204,1.1795 22.226,1.1795 L22.226,1.1795 Z"
        />
      </defs>
      <use
        fill="#4B286D"
        fillRule="evenodd"
        transform="translate(0 -1)"
        xlinkHref="#speakerphone-a"
      />
    </svg>
  </SVGIcon>
)

SpeakerPhone.displayName = 'DecorativeIcon'

export default SpeakerPhone
