import React from 'react';
import { Card } from 'telus-thorium-enriched';

export const CardExample = () => {
    return (
      <Card>
        <h2>Hello World</h2>
        <p>This is the body.</p>
      </Card>
    );
};

export const BorderlessCardExample = () => {
  return (
    <Card className="card--no-border">
      <h2>Hello World</h2>
      <p>This is the body of a card with no border.</p>
    </Card>
  );
};
