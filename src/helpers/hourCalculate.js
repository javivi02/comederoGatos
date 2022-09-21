const hourCalculate = (horaActual, horaProximaString) => {

    // paso a Date desde String, y seteo la nueva fecha
    const temporal = horaProximaString.split(":").map(item=>parseInt(item))
    const tiempo = new Date()
    tiempo.setHours(temporal[0], temporal[1], temporal[2])

    // resto la hora actual con la hora pasada
    tiempo.setHours(tiempo.getHours() - horaActual.getHours(), tiempo.getMinutes() - horaActual.getMinutes(),
        tiempo.getSeconds() - horaActual.getSeconds())

    // formateo la hora para agregar un 0 mas en caso de ser necesario
    const hora = tiempo.getHours().toString().length < 2 ? `0${tiempo.getHours()}`: `${tiempo.getHours()}`
    const minutos = tiempo.getMinutes().toString().length < 2 ? `0${tiempo.getMinutes()}`: `${tiempo.getMinutes()}`
    const segundos = tiempo.getSeconds().toString().length < 2 ? `0${tiempo.getSeconds()}`: `${tiempo.getSeconds()}`

    return `${hora}:${minutos}:${segundos}`

}

export {hourCalculate}