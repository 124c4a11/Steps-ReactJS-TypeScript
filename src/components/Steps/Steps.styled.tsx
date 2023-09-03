import { css, styled } from "styled-components";

interface ActiveElement {
  $isActive: boolean;
}

const gap = "5px";
const duration = 0.25;

export const StyledSteps = styled.div`
  display: flex;
  gap: ${gap};
`;

export const Item = styled.span<ActiveElement>`
  display: flex;
  align-items: center;
  transition: flex-grow ${`${duration}s`};

  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: #b9b9b9;
    transition: margin-left 0s ${`${duration}s`};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      flex-grow: 1;

      &::after {
        margin-left: ${gap};
      }
    `}
`;

export const Button = styled.button<ActiveElement>`
  padding: 2px 8px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  transition: background-color ${`${duration}s`};
  cursor: pointer;

  &:hover {
    ${({ $isActive }) =>
      !$isActive &&
      css`
        background-color: #dedede;
      `}
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: gold;
    `}
`;

export const Title = styled.span<ActiveElement>`
  overflow: hidden;
  max-width: 0;
  white-space: nowrap;
  transition: max-width ${`${duration - 0.05}s`},
    margin-left ${`${duration}s`} 0s;

  ${({ $isActive }) =>
    $isActive &&
    css`
      max-width: 100%;
      margin-left: ${gap};
      transition: max-width 2s ${`${duration}s`};
    `}
`;
