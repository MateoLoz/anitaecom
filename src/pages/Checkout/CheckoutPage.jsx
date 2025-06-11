import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/checkout.css';
import { CartContext } from '../../context/CartContext';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    phone: '',
    shippingMethod: 'standard',
    paymentMethod: 'card',
  });
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    if (value.trim() === '') {
      switch (name) {
        case 'email':
          newErrors.email = 'El email es requerido';
          break;
        case 'address':
          newErrors.address = 'La dirección es requerida';
          break;
        case 'postalCode':
          newErrors.postalCode = 'El código postal es requerido';
          break;
        case 'city':
          newErrors.city = 'La ciudad es requerida';
          break;
        case 'phone':
          newErrors.phone = 'El teléfono es requerido';
          break;
      }
    } else {
      delete newErrors[name];
    }
    
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    let hasErrors = false;
    
    // Validar cada campo
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
      hasErrors = true;
    }
    if (!formData.address) {
      newErrors.address = 'La dirección es requerida';
      hasErrors = true;
    }
    if (!formData.postalCode) {
      newErrors.postalCode = 'El código postal es requerido';
      hasErrors = true;
    }
    if (!formData.city) {
      newErrors.city = 'La ciudad es requerida';
      hasErrors = true;
    }
    if (!formData.phone) {
      newErrors.phone = 'El teléfono es requerido';
      hasErrors = true;
    }

    // Actualizar los errores en el estado
    setErrors(newErrors);
    
    // Si hay errores, mostrar la alerta y devolver false
    if (hasErrors) {
      toast.error('¡Error! Por favor, completa todos los campos requeridos');
      return false;
    }
    
    // Si no hay errores, devolver true
    return true;
  };

  const { clearCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar el formulario
    if (!validateForm()) {
      toast.error('¡Error! Por favor, completa todos los campos requeridos');
      return;
    }

    // Simular el proceso de pago
    setTimeout(() => {
      // Vaciar el carrito
      clearCart();
      
      // Mostrar alerta de éxito
      toast.success('¡Pedido realizado exitosamente!');
      
      // Redirigir a la página de productos
      navigate('/products');
    }, 1000);
  };


  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-sections">
          <div className="form-section">
            <h2>Información Personal</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-section">
            <h2>Dirección de Envío</h2>
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Código Postal</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
              {errors.postalCode && <span className="error">{errors.postalCode}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="city">Ciudad</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
          </div>
          <div className="form-section">
            <h2>Contacto</h2>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
          <div className="form-section">
            <h2>Métodos</h2>
            <div className="form-group">
              <label>Método de Envío</label>
              <select
                name="shippingMethod"
                value={formData.shippingMethod}
                onChange={handleChange}
              >
                <option value="standard">Estándar</option>
                <option value="express">Express</option>
              </select>
            </div>
            <div className="form-group">
              <label>Método de Pago</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="card">Tarjeta de Crédito</option>
                <option value="transfer">Transferencia Bancaria</option>
                <option value="cash">Efectivo contra entrega</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-btn" onClick={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}>Completar Pedido</button>
      </form>
    </div>
  );
};
