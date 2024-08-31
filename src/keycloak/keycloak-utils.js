// import { useKeycloak } from '@react-keycloak/web';
// import { Navigate } from 'react-router-dom';

// // Function to get the roles of the logged-in user
export const getUserRoles = (keycloak) => {

    if (keycloak && keycloak.tokenParsed) {
      // Parse the token
      const token = keycloak.tokenParsed;
      
      // Log token to see its structure (optional)
      console.log('Token:', token);
  
      // Retrieve roles from resource_access for a specific client (e.g., TaskHub)
      if (token.resource_access && token.resource_access.TaskHub) {
        const roles = token.resource_access.TaskHub.roles;
        console.log("User Roles:", roles); // Log the roles
        return roles;
      }
    }
  
    return [];
};

// // Function to retrieve the token from Keycloak
// export const getToken = () => {
//   const { keycloak } = useKeycloak();
//   return keycloak.token;
// };

// // Function to check if the user is logged in
// export const isLoggedIn = () => {
//   const { keycloak } = useKeycloak();
//   return keycloak.authenticated;
// };

// Component to protect routes (only allows access if the user is logged in)
// export const ProtectedRoute = ({ children }) => {
//   const { keycloak } = useKeycloak();

//   if (!keycloak.authenticated) {
//     // Redirect to login page if not authenticated
//     return <Navigate to="/login" />;
//   }

//   return children; // Render the child components if authenticated
// };

// Component to protect routes with role-based access
// export const RoleProtectedRoute = ({ roles, children }) => {
//   const { keycloak } = useKeycloak();
//   const userRoles = keycloak.tokenParsed?.realm_access?.roles || [];

//   // Check if the user is logged in and has any of the required roles
//   const hasRequiredRole = roles.some(role => userRoles.includes(role));

//   if (!keycloak.authenticated || !hasRequiredRole) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

