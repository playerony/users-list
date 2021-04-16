import { RecordProps } from './record.types';
import { StyledWrapper, StyledName, StyledUsername } from './record.styles';

export const Record = ({ user }: RecordProps): JSX.Element => (
  <StyledWrapper>
    {user.id}.<StyledName>{user.name}</StyledName>
    <StyledUsername>@{user.username}</StyledUsername>
  </StyledWrapper>
);
