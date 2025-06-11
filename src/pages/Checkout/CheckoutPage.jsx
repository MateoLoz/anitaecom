import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/checkout.css';

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'El email es requerido';
    if (!formData.address) newErrors.address = 'La dirección es requerida';
    if (!formData.postalCode) newErrors.postalCode = 'El código postal es requerido';
    if (!formData.city) newErrors.city = 'La ciudad es requerida';
    if (!formData.phone) newErrors.phone = 'El teléfono es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      // Aquí iría la lógica para enviar los datos al backend
      console.log('Datos de checkout:', formData);
      
      // Simulamos el envío exitoso
      alert('¡Pedido realizado exitosamente!');
      navigate('/'); // Redirigir al home
    } catch (error) {
      console.error('Error al procesar el pedido:', error);
      alert('Error al procesar el pedido. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
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

        <button type="submit" className="submit-btn">Completar Pedido</button>
      </form>
    </div>
  );
};
