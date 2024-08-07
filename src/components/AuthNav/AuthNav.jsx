import { Wrapper, Link } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link> {}
      <Link to="/login">Log In</Link> {}
    </Wrapper>
  );
};
