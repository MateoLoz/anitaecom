let config = {};

if(import.meta.env.MODE == 'production'){
    config.apiKey = import.meta.env.VITE_PUBLIC_KEY
    config.access = import.meta.env.VITE_PUBLIC_ACCESS_TOKEN
}else {
    config.apiKey = "APP_USR-1b5ff9d8-c22b-4707-a7db-7a5d2eb9ab24"
    config.access = "APP_USR-7319964715803830-040416-90c456d8acc18b137efd57045c9058cf-1079493839"
}


export const credencials = {
     key: config.apiKey,
    access_token:config.access
}


