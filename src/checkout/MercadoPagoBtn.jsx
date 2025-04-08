import { credencials } from '../const/credentials';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { usePreference } from '../hooks/usePreference';
const {key} = credencials
initMercadoPago(key,{locale:"es-AR"});


export const MercadoPagoBtn = () => {
    const {preference} = usePreference()
return <Wallet initialization={{preferenceId:preference}} />
}
