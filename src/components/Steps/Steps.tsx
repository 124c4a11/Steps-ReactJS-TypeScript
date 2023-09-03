import { useState } from "react";
import { StyledSteps, Item, Button, Title } from "./Steps.styled";

interface StepsProps {
  steps: string[];
}

export function Steps({ steps }: StepsProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <StyledSteps>
        {steps.map((step, ndx) => {
          const isActive = activeItem === ndx;

          return (
            <Item key={ndx} $isActive={isActive}>
              <Button $isActive={isActive} onClick={() => setActiveItem(ndx)}>
                {ndx + 1}
              </Button>
              <Title $isActive={isActive}>{step}</Title>
            </Item>
          );
        })}
      </StyledSteps>
    </>
  );
}
