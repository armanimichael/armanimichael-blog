import React from 'react';

import { PostPreview } from '../';

interface Props {
  edges: any;
}

interface PostData {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      date: string;
      category: string;
      excerpt: string;
    };
  };
}

const PostsList: React.FC<Props> = ({ edges }) => {
  const posts: JSX.Element[] = [];

  edges.forEach((post: PostData) => {
    const { id } = post.node;
    const { title, slug, date, category, excerpt } = post.node.frontmatter;

    posts.push(
      <PostPreview
        key={id}
        title={title}
        path={'/blog' + slug}
        date={date}
        category={category}
        excerpt={excerpt}
      />
    );
  });

  return <>{posts}</>;
};

export default PostsList;
