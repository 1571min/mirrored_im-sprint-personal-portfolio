// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Title = (props) => {
  return (
    <Link to="/home">
      <h1 className="title">LEE's portfolio</h1>
    </Link>
  );
};
