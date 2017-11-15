import { ApolloClient } from "apollo-client";
import { Component } from "react";
import { createHttpLink } from "apollo-link-http";
import { getDataFromTree, ApolloProvider } from "react-apollo";
import getDisplayName from "react-display-name";
import Head from "next/head";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-fetch";

const ssrMode = !process.browser;

let apolloClient;
const createApolloClient = (initialState = {}) => {
  const link = createHttpLink({
    uri: process.env.GRAPHQL_URI || "http://localhost:3000/graphql",
    fetch: fetch,
    opts: {
      credentials: "same-origin"
    }
  });

  const cache = new InMemoryCache().restore(initialState);

  return new ApolloClient({ cache, link, ssrMode });
};

export default ComposedComponent =>
  class WithData extends Component {
    static displayName = `WithData(${getDisplayName(ComposedComponent)})`;

    static async getInitialProps(context) {
      const initialProps = {
        composedComponentProps: {
          url: {
            query: context.query,
            pathname: context.pathname
          }
        }
      };

      if (ComposedComponent.getInitialProps)
        Object.assign(
          initialProps.composedComponentProps,
          await ComposedComponent.getInitialProps(context)
        );

      if (ssrMode) {
        const apolloClient = createApolloClient();

        try {
          await getDataFromTree(
            <ApolloProvider client={apolloClient}>
              <ComposedComponent {...initialProps.composedComponentProps} />
            </ApolloProvider>
          );
        } catch (error) {
          console.log(error);
        }

        Head.rewind();

        initialProps.initialState = apolloClient.queryManager.dataStore
          .getCache()
          .extract();
      }

      return initialProps;
    }

    constructor(props) {
      super(props);
      if (ssrMode)
        this.apolloClient = createApolloClient(this.props.initialState);
      else {
        if (!apolloClient)
          apolloClient = createApolloClient(this.props.initialState);
        this.apolloClient = apolloClient;
      }
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <ComposedComponent {...this.props.composedComponentProps} />
        </ApolloProvider>
      );
    }
  };
