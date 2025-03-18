

const sendMessage = (flavors: string[] ) => {
    const message = `Olá, tudo bem? Gostaria de umas trufas de. ${flavors.join(', ')}`

    const response = window.location.href = `https://api.whatsapp.com/send?phone=555198066299&text=${message}`
}

export default sendMessage
