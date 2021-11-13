import React from 'react';
import HeadComponent from '../../components/Head';
import { getListId } from '../../api/postApi';
import jokeApi from '../../api/jokeApi';
import styles from './_about.module.scss';
interface Props {}

const About = (props: Props) => {
  const getJoke = async () => {
    const response = await jokeApi.getAll();
    console.log(response, 'joke');
  };
  getJoke();
  return (
    <HeadComponent title="Next App/About">
      <h1 className={`${styles.theH1} class ${styles.the}`}>About</h1>
    </HeadComponent>
  );
};

export default About;
