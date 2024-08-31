import { useState, useEffect } from 'react';
import { TaskList } from './TaskList';
import keycloakInstance from '../keycloak/keycloak';

export const Home = () => {
  const [roles, setRoles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (keycloakInstance && keycloakInstance.isAuthenticated()) {
      const rolesFromToken = keycloakInstance.getUserRoles(); // Use the custom method
      keycloakInstance.setUserRoles(rolesFromToken);
      setRoles(rolesFromToken);
      if (rolesFromToken.includes('admin')) {
        setIsAdmin(true);
      }
      console.log(rolesFromToken);

      // Get user's name from Keycloak
      const name = keycloakInstance.getInstance().tokenParsed?.preferred_username || 'User';
      setUserName(name);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="w-64 h-64 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full text-center py-4 bg-white bg-opacity-50 shadow-md">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome, {userName}!</h1>
        </div>
        <div className="mt-8 w-full flex justify-around items-center">
          <TaskList />
        </div>
      </div>
    </div>
  );
};