/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import copy from 'clipboard-copy'
import MdContentCopy from 'react-icons/lib/md/content-copy'
import ToolbarButton from 'react-styleguidist/lib/rsg-components/ToolbarButton'
import Styled from 'react-styleguidist/lib/rsg-components/Styled'

export const styles = ({ space, fontFamily, fontSize }) => ({
  pathline: {
    fontFamily: fontFamily.monospace,
    fontSize: fontSize.small,
    color: '#54595F',
  },
  copyButton: {
    marginLeft: space[0],
  },
})

export function PathlineRenderer({ classes, children }) {
  /* eslint-disable */
  return (
    <div className={classes.pathline}>
      {children}
      <ToolbarButton
        small
        className={classes.copyButton}
        onClick={() => copy(children)}
        title="Copy to clipboard"
      >
        <MdContentCopy />
      </ToolbarButton>
    </div>
  )
  /* eslint-enable */
}

PathlineRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}

export default Styled(styles)(PathlineRenderer)
