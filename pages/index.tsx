import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';



type IndexProps = {
  posts: PostType[];
};


export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
</style>
      <h1>How are you fellas! 🤚 </h1>
      <h1>Hello 👋 I'm Buddhi Ashen - curious fullstack student & Python noob based in Colombo, Sri-Lanka. This is my platform 
        that i share my works, how i manage to solve problem when i am doing coding  and programming and many more....
      </h1>
      <p><a href="https://buddhi-ashen.github.io/buddhiashen/" target='_blank'>My portfolio</a></p>
      <p>i build this blog using a next js boilerplate template with:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Next.js</li>
        <li className="mt-2">Typescript</li>
        <li className="mt-2">MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>

      <a
        href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
        className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
      >
        Get the source code!
      </a>

      <br /><br />
      <p>enjoy the Blog while reading it and dont forget to share it, </p>
      <p>contact me : 
        <li>buddhiashen.info@gmail.com</li>
        <li>https://twitter.com/buddhiashen4</li>
        <li>https://www.facebook.com/buddhi.ashen.9</li>
        <li>https://buddhi-ashen.github.io/buddhiashen/</li>
      </p>
      <br />
<hr />
<br />
<h1>My dev blog</h1>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
        
      ))}
      <br />
      <hr />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
