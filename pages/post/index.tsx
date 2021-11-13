import React from 'react';
import HeadComponent from '../../components/Head';
import postApi from '../../api/postApi';
import { Card, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PostProps {
  id: any;
  title: string;
  body: string;
  userId: any;
}
interface Props {
  postData?: PostProps[];
}

const Post = (props: Props) => {
  const { postData } = props;
  const router = useRouter();
  const goToDetails = (id: string) => {
    router.push(`/post/${id}`);
  };
  return (
    <HeadComponent title={`Next App/Post`}>
      <Container>
        {postData?.map((post: PostProps) => (
          <Card.Body key={post?.id}>
            <Card.Title>
              {post?.id}--{post?.title}
            </Card.Title>
            <Card.Text>{post?.body}</Card.Text>
            <div
              onClick={() => {
                goToDetails(post?.id);
              }}
            >
              <span className="viewDetails">View details</span>
            </div>
          </Card.Body>
        ))}
      </Container>
    </HeadComponent>
  );
};

export const getStaticProps = async () => {
  const postData = await postApi.getAll({ _limit: 10 });
  return {
    props: {
      postData: postData,
    },
  };
};

export default Post;
