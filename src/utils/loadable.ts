import Loadable from "react-loadable";
import Loading from "../components/Loading";

export default (component: any, loading = Loading) =>
  Loadable({
    loader: () => component,
    loading,
  });
