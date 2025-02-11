import React, {HTMLAttributes} from 'react';
import styled from 'styled-components';

import {themeColors} from '../../../util/constants';

import CardBase from './CardBase';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  img?: string;
}

const CardTitle = styled.h1`
  color: ${themeColors.baseTextColor};
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
`;

const Card: React.FC<Props> = (props: Props) => {
  const {title, children, img, ...restProps} = props;

  return (
    <CardBase {...restProps}>
      {img ? <img src={img} style={{maxWidth: '100%', padding: '1rem'}} alt={title || ''} /> : null}
      {title ? <CardTitle>{title}</CardTitle> : null}
      {children}
    </CardBase>
  );
};

export default Card;
