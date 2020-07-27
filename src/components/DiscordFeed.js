import React from "react"

const DiscordFeed = ({
  width = 350,
  height = 500,
  allowtransparency = true,
}) => {
  return (
    <iframe
      src="https://discordapp.com/widget?id=711726809103990815&theme=dark"
      width={width}
      height={height}
      allowtransparency={allowtransparency}
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  )
}

export default DiscordFeed
