import React from 'react'

import Dependent, { StyledDependentSVG } from '../../Dependent'

const Settings = props => (
  <Dependent {...props}>
    <StyledDependentSVG width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M14.068 23H9.934a.96.96 0 01-.952-.844l-.357-2.53a8.034 8.034 0 01-1.403-.832l-2.34.959a.966.966 0 01-1.192-.438L1.63 15.677c-.235-.44-.135-.966.233-1.263l1.984-1.584a8.833 8.833 0 01-.045-.83c0-.252.016-.52.047-.83L1.866 9.59a.997.997 0 01-.233-1.269l2.063-3.644a.946.946 0 011.184-.43l2.345.96a8.243 8.243 0 011.401-.832l.357-2.54A.96.96 0 019.935 1h4.134a.96.96 0 01.952.844l.356 2.531c.486.224.956.501 1.403.832l2.34-.958a.963.963 0 011.192.437l2.06 3.638c.236.44.135.966-.233 1.263l-1.984 1.583c.024.244.047.528.047.83 0 .302-.022.586-.047.83l1.982 1.582c.37.3.47.826.241 1.255l-2.072 3.657a.949.949 0 01-1.183.43l-2.346-.96c-.468.34-.93.614-1.401.832l-.356 2.539a.96.96 0 01-.952.835m-6.73-5.234c.095 0 .19.032.27.095a7.043 7.043 0 001.627.965.454.454 0 01.271.356l.39 2.77 4.15.048.449-2.819a.45.45 0 01.271-.356 7.344 7.344 0 001.63-.967.44.44 0 01.433-.059l2.545 1.045 2.118-3.652c.014-.026.01-.067-.013-.086l-2.156-1.724a.456.456 0 01-.166-.414c.033-.276.068-.607.068-.968 0-.36-.035-.692-.068-.968a.456.456 0 01.166-.414l2.159-1.725c.021-.017.024-.057.006-.093l-2.04-3.608-2.618 1.01a.434.434 0 01-.437-.061 7.014 7.014 0 00-1.627-.965.45.45 0 01-.271-.356l-.39-2.77L9.956 2l-.45 2.82a.453.453 0 01-.27.356 7.311 7.311 0 00-1.63.967.436.436 0 01-.433.06L4.626 5.156 2.508 8.809l2.169 1.809a.456.456 0 01.166.414 8.235 8.235 0 00-.068.968c0 .28.022.587.068.968a.456.456 0 01-.166.414l-2.159 1.725c-.02.017-.025.058-.006.094l2.04 3.608 2.619-1.01a.43.43 0 01.166-.033M12 17c-2.48 0-4.5-2.02-4.5-4.5S9.52 8 12 8c2.482 0 4.5 2.02 4.5 4.5S14.482 17 12 17m0-8c-1.93 0-3.5 1.57-3.5 3.5S10.07 16 12 16s3.5-1.57 3.5-3.5S13.93 9 12 9"
        fillRule="evenodd"
      />
    </StyledDependentSVG>
  </Dependent>
)

Settings.displayName = 'Dependent'

export default Settings
