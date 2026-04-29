import { useMemo } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import DevModePanel from './components/DevModePanel/DevModePanel';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import useAuthSession from './hooks/useAuthSession';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import styles from './App.module.css';

function createProducts(assetsBase) {
  return Array.from({ length: 8 }).map((_, index) => ({
    id: index + 1,
    name: `Violão Yamaha C70 II Clássico #${index + 1}`,
    price: `R$ ${(1299 + index * 50).toFixed(2).replace('.', ',')}`,
    image: `${assetsBase}/guitarrinha.jpg`,
    description:
      'Instrumento com excelente timbre para estudos e apresentações, acabamento natural e ótima tocabilidade.',
  }));
}

function ProductDetailRoute({ products, onBackToProducts }) {
  const { productId } = useParams();
  const id = Number(productId);
  const product = products.find((p) => p.id === id);
  return <ProductDetailPage product={product} onBackToProducts={onBackToProducts} />;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const assetsBase = `${process.env.PUBLIC_URL}/assets`;

  const products = useMemo(() => createProducts(assetsBase), [assetsBase]);
  const { currentUser, usersCount, isLogged, login, logout, register, resetSession } =
    useAuthSession();

  const selectedProductId = (() => {
    const match = /^\/produtos\/(\d+)$/.exec(location.pathname);
    return match ? Number(match[1]) : null;
  })();

  const openProduct = (id) => navigate(`/produtos/${id}`);

  return (
    <div
      className={styles.page}
      style={{ backgroundImage: `url('${assetsBase}/guitarra_fundo_body.jpg')` }}
    >
      <Navbar assetsBase={assetsBase} currentUser={currentUser} onLogout={logout} />

      <main className={styles.content}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                assetsBase={assetsBase}
                products={products.slice(0, 4)}
                onOpenProduct={openProduct}
              />
            }
          />
          <Route path="/sobre" element={<AboutPage assetsBase={assetsBase} />} />
          <Route
            path="/produtos"
            element={<ProductsPage products={products} onOpenProduct={openProduct} />}
          />
          <Route
            path="/produtos/:productId"
            element={
              <ProductDetailRoute
                products={products}
                onBackToProducts={() => navigate('/produtos')}
              />
            }
          />
          <Route path="/login" element={<LoginPage onLogin={login} />} />
          <Route path="/register" element={<RegisterPage onRegister={register} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <DevModePanel
        currentPage={location.pathname}
        selectedProductId={selectedProductId}
        usersCount={usersCount}
        isLogged={isLogged}
        onResetSession={() => {
          resetSession();
          navigate('/');
        }}
      />

      <Footer assetsBase={assetsBase} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

