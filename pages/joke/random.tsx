import React from 'react';
import { Card, Button } from 'react-bootstrap';
import jokeApi from '../../api/jokeApi';
import Link from 'next/link';
interface JokeDetails {
  category: any;
  icon_url: string;
  id: string;
  value: string;
}
interface Props {
  joke: JokeDetails;
}

const Joke = (props: Props) => {
  const { joke } = props;
  return (
    <div style={{ marginLeft: '150px' }}>
      <Card border="dark" style={{ width: '18rem' }} key={joke?.id}>
        <Card.Header>
          <img style={{ width: '60px' }} src={joke?.icon_url} />
        </Card.Header>
        <Card.Body>
          <Card.Title>The joke today is :</Card.Title>
          <Card.Text>{joke?.value}</Card.Text>
          <Link href="/">
            <a>
              <Button variant="dark">Back to Home</Button>
            </a>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export const getServerSideProps = async () => {
  const joke = await jokeApi.getAll();
  if (!joke) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      joke,
    },
  };
};

export default Joke;
