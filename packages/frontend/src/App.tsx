import { Route, Switch } from "wouter";
import "./App.css";
import Layout from "./Layout";
import Info from "./pages/Info";
import Mitigation from "./pages/Mitigation";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Info} />
        <Route path="/mitigation-strategies" component={Mitigation} />
      </Switch>
    </Layout>
  );
}

export default App;
