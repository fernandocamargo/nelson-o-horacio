import React from "react";
import { Provider as StateManager } from "react-redux";
import { PersistGate as StatePersistence } from "redux-persist/integration/react";

import store, { persistor } from "store";
import theme from "theme";
import { App, Notifications, Theming } from "components";
import { Loader } from "components/widgets";

export default () => (
  <StateManager store={store}>
    <StatePersistence persistor={persistor} loading={<Loader />}>
      <Theming theme={theme}>
        <Notifications>
          <App />
        </Notifications>
      </Theming>
    </StatePersistence>
  </StateManager>
);
