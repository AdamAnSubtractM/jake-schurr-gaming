import React from "react"

const TwitchEmbed = ({ mountNode, ...props }) => {
  const embedUrl = "https://embed.twitch.tv/embed/v1.js"

  React.useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("src", embedUrl)
    script.addEventListener(
      "load",
      () => new window.Twitch.Embed(mountNode, { ...props })
    )
    document.body.appendChild(script)
  }, [mountNode, props])

  return <div id={mountNode}></div>
}

export default TwitchEmbed
