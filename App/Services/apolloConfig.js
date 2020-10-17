// import {
//   ApolloClient,
//   HttpLink,
//   ApolloLink,
//   InMemoryCache,
//   concat,
// } from '@apollo/client';
// import { gql } from '@apollo/client';
// import AsyncStorage from '@react-native-community/async-storage';
// import { onError } from '@apollo/client/link/error';
// import { cache } from '../utils/cache';
// // import createStore from "../Stores";
// // import AppDataActions from "../Stores/AppData/Actions";
// // const { store } = createStore();
// const httpLink = new HttpLink({ uri: '' });
// const getToken = async () => await AsyncStorage.getItem('token');

// const authMiddleware = new ApolloLink(async (operation, forward) => {
//   const token = await getToken();
//   token({ token });
//   console.log('token ' + token);
//   console.log('cashe ' + token().token);

//   operation.setContext({
//     headers: {
//       authorization: token || null,
//     },
//   });
//   // return {
//   //   headers: { authorization: token ? `Bearer ${token}` : '' }
//   // }
//   return forward(operation);
// });
// const link = ApolloLink.from([
//   onError(({ graphQLErrors, networkError, operation, response }) => {
//     console.log({ operation, response, networkError, graphQLErrors });
//     // console.log(store.dispatch(AppDataActions.selectedCat("morteza")));
//     // console.log(store.getState());

//     if (graphQLErrors) {
//       console.log('[graphQLErrors]', graphQLErrors);

//       graphQLErrors.map(({ message, extensions }) => {
//         console.log(
//           ` [GraphQL error]: Message: ${message}, code: ${extensions.code}`,
//         );
//         if (extensions.code === 'UNAUTHENTICATED') {
//           AsyncStorage.clear();
//         }
//       });
//     }
//     if (networkError) {
//       console.log(`[Network error]: ${networkError}`);
//     }
//   }),
//   httpLink,
// ]);
// export const client = new ApolloClient({
//   cache: cache,
//   link: concat(authMiddleware, link),
// });

// export const clientQuery = (parameter) =>
//   client
//     .query({
//       query: gql`
//         {
//           rates(currency: "USD") {
//             currency
//           }
//         }
//       `,
//     })
//     .then((result) => console.log(result))
//     .catch((e) => {
//       console.log('gql cashe' + e);
//     });
// export const client2 = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache(),
// });
