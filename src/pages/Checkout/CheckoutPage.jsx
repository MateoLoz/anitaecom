import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/checkout.css';
import { CartContext } from '../../context/CartContext';
import { useCart } from '../../Cart/hook/useCart';
import axios from 'axios';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const {cart,finalprice} = useCart()
  const [formData, setFormData] = useState({
    email: '',
    provincia: '',
    direccion:'',
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    if (value.trim() === '') {
      switch (name) {
        case 'email':
          newErrors.email = 'El email es requerido';
          break;
        case 'direccion':
          newErrors.direccion = 'La dirección es requerida';
          break;
         case 'provincia':
          newErrors.provincia = 'La provincia es requerida';
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
    if (!formData.direccion) {
      newErrors.direccion = 'La dirección es requerida';
      hasErrors = true;
    }
     if (!formData.provincia) {
      newErrors.direccion = 'La provincia es requerida';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemsCart = cart.map(({id, ...resto})=> resto)
    const checkout = {
      carrito: {
        items:itemsCart,
        total:finalprice.toString(),
        provincia:formData.provincia,
        email:formData.email,
        direccion:formData.direccion
      }
    }
   console.log(checkout)
    let res = await axios.post('https://kamalionica-back.onrender.com/api/pedidos',checkout)
    console.log(res)
    // Validar el formulario
    if (!validateForm()) {
      toast.error('¡Error! Por favor, completa todos los campos requeridos');
      return;
    }
   
    if(res.status == 200) {
    // Simular el proceso de pago
    setTimeout(() => {
      // Vaciar el carrito
      clearCart();
      
      // Mostrar alerta de éxito
      toast.success('¡Pedido realizado exitosamente!');
      
      // Redirigir a la página de productos
      navigate('/products');
    }, 1000);
  }
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
          </div>
          <div className="form-section">
             <h2>Provincia</h2>
            <div className="form-group">
              <label htmlFor="provincia">Provincia</label>
              <input
                type="text"
                id="provincia"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                required
              />
              {errors.provincia && <span className="error">{errors.provincia}</span>}
            </div>

            <h2>Dirección de Envío</h2>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
              {errors.direccion && <span className="error">{errors.direccion}</span>}
            </div>

          </div>

          <div className="form-section">
            <h2>Métodos</h2>
            <div className="form-group">
              <label>Método de Envío</label>
              <select
                name="shippingMethod"
              >
                <option value="standard">Estándar</option>
                <option value="express">Express</option>
              </select>
            </div>
            <div className="form-group">
              <label>Método de Pago</label>
              <select
                name="paymentMethod"
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
