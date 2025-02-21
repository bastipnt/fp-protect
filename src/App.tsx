import { Route, Switch } from "wouter";
import "./App.css";
import Layout from "./Layout";
import Info from "./pages/Info";
import Mitigation from "./pages/Mitigation";
import Testing from "./pages/Testing";
import Provider from "./providers";

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Info} />
          <Route path="/mitigation-strategies" component={Mitigation} />
          <Route path="/test" component={Testing} />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
