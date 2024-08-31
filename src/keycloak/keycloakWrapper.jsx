// KeycloakWrapper.jsx
// import React, { useEffect, useState } from 'react';
// import { useKeycloak } from '@react-keycloak/web';
// import App from '../App';

// const KeycloakWrapper = () => {
//   const { keycloak, initialized } = useKeycloak();
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     if (initialized) {
//       setIsInitialized(true);
//     }
//   }, [initialized]);

//   if (!isInitialized) {
//     return <div>Loading Keycloak...</div>;
//   }

//   if (!keycloak.authenticated) {
//     return <div>Please log in</div>;
//   }

//   return <App />;
// };

// export default KeycloakWrapper;
