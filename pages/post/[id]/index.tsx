import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import postApi, { getListId } from '../../../api/postApi';
import HeadComponent from '../../../components/Head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PostDetails {
  id: any;
  title: string;
  body: string;
  userId: any;
}
interface Props {
  postDetails: PostDetails;
}

const PostDetails = (props: Props) => {
  const { postDetails } = props;
  const router = useRouter();
  console.log(router, 'router');
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <HeadComponent title={`Next App/Post Details${postDetails?.id}`}>
      <Container>
        <Card style={{ width: '18rem' }} key={postDetails?.id}>
          <Card.Body>
            <Card.Title>{postDetails?.title}</Card.Title>
            <Card.Text>{postDetails?.body}</Card.Text>
            <Link href="/post">
              <a>
                <Button variant="dark">Back to Post</Button>
              </a>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </HeadComponent>
  );
};

export const getStaticPaths = async () => {
  const paths = await getListId({ _limit: 4 });
  return { paths, fallback: true };
};

interface ParamsProps {
  params: {
    id: string;
  };
}
export const getStaticProps = async ({ params }: ParamsProps) => {
  const postDetails = await postApi.get(params?.id);
  return {
    props: {
      postDetails,
    },
    revalidate: 1,
  };
};

export default PostDetails;
