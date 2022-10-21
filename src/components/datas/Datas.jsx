import { useEffect, useState } from "react"
import { manageJson } from "../../helpers/manage-json"

const LoadDatas = (props) => {

    const {data} = props

    const [guilds, setGuilds] = useState([])

    useEffect(() => {
        if (!data) return
        const newGuilds = manageJson(data)
        setGuilds(newGuilds)
    }, [data])

    if (guilds.length !== 3)return <p>Importez votre fichier json</p>

    return (
        <div className="container">
            <div className="Basic Datas">
            <h1>Siege Datas</h1>
            <p>GuildNames : {guilds.map(elem => elem.guildName).join(" vs ")}  </p>
            <p>Members : {guilds.map(elem => elem.memberCount).join(" - ")} </p>
            <p>Score : {guilds.map(elem => elem.score).join(" - ")} </p>
            <p>Score per min :{guilds.map(elem => elem.scoreIncrement).join(" - ")} </p>
            <p>Time to win : {guilds.map(elem => elem.timeToWin).join(" - ")} </p>
            <p>Attacks used : {guilds.map(elem => elem.attacksUsed).join(" - ")} </p>
            <p>Attacks left : {guilds.map(elem => elem.attacksLeft).join(" - ")}  </p>
            <p>Winrate : {guilds.map(elem => elem.winRate).join("% - ")} % </p>
            </div>
        </div>
    )
}
export default LoadDatas
