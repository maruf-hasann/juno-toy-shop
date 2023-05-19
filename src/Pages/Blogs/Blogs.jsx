import React from 'react';
import useTitle from '../../CustomHook/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
      <div className="my_container space-y-5">
        <div>
          <h3 className="font-semibold text-2xl mb-7">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="font-semibold font-gray-500">
            A refresh token just helps you re-validate a user without them
            having to re-enter their login credentials multiple times. The
            access token is re-issued, provided the refresh token is a valid one
            requesting permission to access confidential resources.<br></br> The
            authentication server sends the access token and the refresh token
            to the client. The client stores the tokens in local storage or as a
            HTTP-only and secure cookie. The client sends the access token with
            each request to access protected resources.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-7">
            Compare SQL and NoSQL databases?
          </h3>
          <p className="font-semibold font-gray-500">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-7">
            What is express js? What is Nest JS (google it)?
          </h3>
          <p className="font-semibold font-gray-500">
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web and mobile
            applications. and NestJS is a progressive Node. js framework for
            building efficient, reliable, and scalable server-side applications
          </p>
        </div>{" "}
        <div>
          <h3 className="font-semibold text-2xl mb-7">
            What is MongoDB aggregate and how does it work (google it)?
          </h3>
          <p className="font-semibold font-gray-500">
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
      </div>
    );
};

export default Blogs;