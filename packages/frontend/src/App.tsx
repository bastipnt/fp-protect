import { Route, Switch } from "wouter";
import "./App.css";
import Layout from "./Layout";
import Info from "./pages/Info";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Info} />
      </Switch>
    </Layout>
  );
}

export default App;
