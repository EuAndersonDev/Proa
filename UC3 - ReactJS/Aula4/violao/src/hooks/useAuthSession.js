import { useCallback, useState } from 'react';

function loadUsers() {
  const stored = sessionStorage.getItem('users');
  return stored ? JSON.parse(stored) : [];
}

function loadCurrentUser() {
  const stored = sessionStorage.getItem('currentUser');
  return stored ? JSON.parse(stored) : null;
}

export default function useAuthSession() {
  const [users, setUsers] = useState(loadUsers);
  const [currentUser, setCurrentUser] = useState(loadCurrentUser);

  const register = useCallback(
    ({ name, email, password }) => {
      const normalizedEmail = email.trim().toLowerCase();
      const normalizedName = name.trim();
      const normalizedPassword = password;

      if (users.some((u) => u.email === normalizedEmail)) {
        return { success: false, message: 'Esse e-mail já está cadastrado.' };
      }

      const newUser = {
        id: Date.now(),
        name: normalizedName,
        email: normalizedEmail,
        password: normalizedPassword,
      };

      const nextUsers = [...users, newUser];
      setUsers(nextUsers);
      sessionStorage.setItem('users', JSON.stringify(nextUsers));

      return { success: true, message: 'Cadastro realizado com sucesso!' };
    },
    [users]
  );

  const login = useCallback(
    ({ email, password }) => {
      const normalizedEmail = email.trim().toLowerCase();
      const foundUser = users.find(
        (u) => u.email === normalizedEmail && u.password === password
      );

      if (!foundUser) return { success: false, message: 'E-mail ou senha inválidos.' };

      const safeUser = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
      setCurrentUser(safeUser);
      sessionStorage.setItem('currentUser', JSON.stringify(safeUser));

      return { success: true, message: `Bem-vindo, ${safeUser.name}!` };
    },
    [users]
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
  }, []);

  const resetSession = useCallback(() => {
    setUsers([]);
    setCurrentUser(null);
    sessionStorage.removeItem('users');
    sessionStorage.removeItem('currentUser');
  }, []);

  return {
    usersCount: users.length,
    isLogged: Boolean(currentUser),
    currentUser,
    register,
    login,
    logout,
    resetSession,
  };
}

