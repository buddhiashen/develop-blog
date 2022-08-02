import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Hunter Chang',
      }}
    >
      <style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
</style>
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;
