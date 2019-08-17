module.exports.run = (client, message, args) => {

  // Excluir a mensagem do comando.
    message.delete()

    // Mensagem de ping + .then(msg => { msg.delete(10000) }) para excluir a mensagem depois de 10 segundos.

    message.channel.send(`:point_right: Ping: **${parseInt(client.ping)}**ms`).then(msg => {
      msg.delete(10000)
      })
}