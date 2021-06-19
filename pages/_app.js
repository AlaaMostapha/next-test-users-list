import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store";
function MyApp({ Component, props }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
