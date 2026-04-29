import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = onLogin(formData);
    setFeedback(result.message);
  };

  return (
    <section className={styles.authPage}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="login-email">E-mail</label>
        <input
          id="login-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="login-password">Senha</label>
        <input
          id="login-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      {feedback ? <p className={styles.feedback}>{feedback}</p> : null}

      <p>
        Ainda não tem cadastro?{' '}
        <Link className={styles.linkBtn} to="/register">
          Criar conta
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
