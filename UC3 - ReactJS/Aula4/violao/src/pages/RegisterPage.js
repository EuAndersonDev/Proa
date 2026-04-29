import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

function RegisterPage({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = onRegister(formData);
    setFeedback(result.message);

    if (result.success) {
      setFormData({ name: '', email: '', password: '' });
      setTimeout(() => navigate('/login'), 700);
    }
  };

  return (
    <section className={styles.authPage}>
      <h1>Register</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="register-name">Nome</label>
        <input
          id="register-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="register-email">E-mail</label>
        <input
          id="register-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="register-password">Senha</label>
        <input
          id="register-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>

      {feedback ? <p className={styles.feedback}>{feedback}</p> : null}
    </section>
  );
}

export default RegisterPage;
