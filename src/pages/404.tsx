import React from 'react';

import { Button, NotFoundImage } from '../components/';
import { Layout } from '../containers/';
import { useRandomPage } from '../queries/useRandomPage';

const NotFoundPage: React.FC = () => {
  const randomPage = useRandomPage();

  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>
        Ops! Seems like you&apos;re lost! <br />
        Feel free to check some of this links out.
      </p>
      <hr />
      <div className="centered">
        <Button>Homepage</Button>
        <Button anchorTo={randomPage}>Visit a random page</Button>
      </div>
      <NotFoundImage />
    </Layout>
  );
};

export default NotFoundPage;
