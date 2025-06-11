import React from 'react';

export const Payment = ({ onPaymentSuccess, onPaymentError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      // Aquí iría la lógica de integración con Mercado Pago o el sistema de pago que uses
      // Por ahora, simulamos un pago exitoso
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulamos un delay
      onPaymentSuccess();
    } catch (error) {
      console.error('Error en el pago:', error);
      onPaymentError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>{isLoading ? 'Procesando...' : 'Confirmar Pago'}</h2>
      <button 
        onClick={handlePayment} 
        className="payment-button"
        disabled={isLoading}
      >
        {isLoading ? 'Procesando...' : 'Confirmar Pago'}
      </button>
    </div>
  );
};
