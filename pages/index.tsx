import type { NextPage } from 'next';
import HeadComponent from '../components/Head';
import { Container } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <HeadComponent title="Next App/Home">
      <Container>
        <h1>Chưa có cái méo gì cả !</h1>
      </Container>
    </HeadComponent>
  );
};

export default Home;
