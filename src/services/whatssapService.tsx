

const sendMessage = async (favors: {}) => {
    const response = await fetch('https://api.whatsapp.com/send?phone=5511999999999&text=Olá, tudo bem?')
    console.log(response)
    return response.json()
}

export default sendMessage
