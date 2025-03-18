

const phone = import.meta.env.VITE_WHATSAPP_NUMBER





const sendMessage = (sabores: string[]) => {
    const favors = ['Morango', 'Maracujá', 'Brigadeiro']
    const message = `Olá, tudo bem? Gostaria de saber mais sobre os produtos. ${favors.join(', ')}`

    const response = window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
    console.log(response)
}

export default sendMessage
