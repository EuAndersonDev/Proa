import styles from './DevModePanel.module.css';

function DevModePanel({ currentPage, selectedProductId, usersCount, isLogged, onResetSession }) {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <aside className={styles.panel}>
      <strong>Modo de Desenvolvimento</strong>
      <span>NODE_ENV: {process.env.NODE_ENV}</span>
      <span>Página atual: {currentPage}</span>
      <span>Produto selecionado: {selectedProductId ?? 'nenhum'}</span>
      <span>Usuários em sessão: {usersCount}</span>
      <span>Status login: {isLogged ? 'logado' : 'deslogado'}</span>
      <button type="button" onClick={onResetSession}>
        Limpar sessionStorage
      </button>
    </aside>
  );
}

export default DevModePanel;
