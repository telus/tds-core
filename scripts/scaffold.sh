#!/bin/sh

# Usage: yarn scaffold -- <component-name>

COMPONENT="$1"

mkdir src/components/$COMPONENT
pushd src/components/$COMPONENT

mkdir __tests__
touch __tests__/$COMPONENT.spec.jsx

touch $COMPONENT.jsx

{
printf "import React from 'react'\n"
printf "import PropTypes from 'prop-types'\n"

printf "import safeRest from '../../safeRest'\n\n"

printf "import styles from './%s.modules.scss'\n\n" "$COMPONENT"

printf "const %s = ({ ...rest }) => (\n" "$COMPONENT"
printf "\t<div {...safeRest(rest)} />\n"
printf ")\n\n"

printf "%s.propTypes = {\n\n}\n\n" "$COMPONENT"

printf "%s.defaultProps = {\n\n}\n\n" "$COMPONENT"

printf "export default %s" "$COMPONENT"

} > $COMPONENT.jsx

touch $COMPONENT.md

{
printf "\`\`\`\n"
printf "<%s> %s </%s>\n" "$COMPONENT" "$COMPONENT" "$COMPONENT"
printf "\`\`\`\n"
} > $COMPONENT.md

touch $COMPONENT.modules.scss
