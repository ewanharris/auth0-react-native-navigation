import React from 'react';
import {Auth0Provider} from 'react-native-auth0';

import config from './auth0-configuration';
import {Home} from './Home';

const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Home />
    </Auth0Provider>
  );
};
export default App;
