const { failOnError } = require("../config.json");
const gamedig = require("gamedig");

/**
 * @param {string} ip
 */
async function getMcServer(ip) {
  const mcapi = await gamedig.query({ type: "minecraft", host: `${ip}` }).catch(() => {
    if (failOnError) throw new Error("Sunucuya erişilemedi!");
  });

  if (!mcapi) return undefined;

  return {
    ip: ip,
    name: mcapi.name,
    map: mcapi.map,
    password: mcapi.password ?? "Free",
    maxPlayers: mcapi.maxplayers ?? "0",
    minPlayers: mcapi.maxplayers - mcapi.maxplayers ?? "0",
    nowPlayers: mcapi.players.length ?? "0",
    players: mcapi.players,
    bots: mcapi.bots,
    connect: mcapi.connect,
    ping: mcapi.ping,
    raw: mcapi.raw,
    favicon: `https://media.discordapp.net/attachments/1097986792713617499/1149689612751622245/0b44e1e8-6444-45d5-a003-e063f514412a.jpg?width=1327&height=663`,
  };
}

module.exports = { getMcServer };
