import { PlainBackground } from '../plain-background/plain-background.layout';

import { InnerBlockLayout } from './block.layout';
import { CenterBlockProps } from './center-block.types';

export const CenterBlockLayout = ({ children }: CenterBlockProps): JSX.Element => (
  <PlainBackground>
    <InnerBlockLayout>{children}</InnerBlockLayout>
  </PlainBackground>
);
