---
title: Titled Text
template: layout-blocks.jade
---

## Titled Text

A Block Titled Text is a block that is composed of a section title and an array of titled text sections.

---

<div id="titledTextBlockExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.BlockTitledTextExample />,
    document.getElementById('titledTextBlockExample')
  );
</script>

```javascript
import React from 'react';
import BlockTitledText from 'telus-thorium-enriched/lib/blocks/BlockTitledText';

const BlockTitledTextExample = () => {
  const props = {
    title: 'Titled Text is Awesome',
    content: [
      {
        title: 'Gérez les coûts',
        content: 'La solution Collaboration en nuage de TELUS comporte de faibles coûts initiaux et un tarif mensuel par utilisateur prévisible pour votre abonnement. La comptabilité est ainsi simplifiée et vous libérez du capital que vous pouvez investir dans votre entreprise.'
      },
      {
        title: 'Actualisez votre équipement technologique',
        content: 'L’infonuagique réduit le risque et simplifie la gestion, ce qui vous permet d’intensifier vos activités en déployant le service auprès de divers utilisateurs et dans plusieurs espaces de travail, et votre solution demeure toujours à jour.'
      }
    ]
  };

  return (
    <BlockTitledText {...props} />
  );
};

export default BlockTitledTextExample;

```

## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `title` | section title | `string` |  <p style='color: red'>required</p> |
| `content` | array of objects which have a title and content | `object` | <p style='color: red'>required</p>  |
| `titleHeadingClass` | TDS heading class for title | `string` | "heading-1"  |
