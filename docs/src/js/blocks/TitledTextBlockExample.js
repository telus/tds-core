import React from 'react';
import {TitledTextBlock} from 'telus-thorium-enriched/blocks';

const TitledTextBlockExample = () => {
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
    <TitledTextBlock {...props} />
  );
};

export default TitledTextBlockExample;
