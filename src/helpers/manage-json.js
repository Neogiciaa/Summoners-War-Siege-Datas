const maxScore = 20000

export const manageJson = (datas) => {
	const guilds = []
	for (let i = 0; i < 3; i++) {
		const guildName = datas.attack_log.log_list[0].guild_info_list[i].guild_name
		const memberCount = datas.attack_log.log_list[0].guild_info_list[i].play_member_count
		const score = datas.attack_log.log_list[0].guild_info_list[i].match_score
		const scoreIncrement = datas.attack_log.log_list[0].guild_info_list[i].match_score_increment
		const timeToWin = ((maxScore - score) / scoreIncrement)
		const attacksUsed = datas.attack_log.log_list[0].guild_info_list[i].attack_count
		const attacksLeft = (datas.attack_log.log_list[0].guild_info_list[i].play_member_count * 10) - datas.attack_log.log_list[i].guild_info_list[i].attack_count
		let match
		let winMatch
		if (datas.attack_log.log_list[0].battle_log_list[0].guild_name === guildName) {
			match = datas.attack_log.log_list[0].battle_log_list
			winMatch = match.filter(
				element => element.win_lose === 1
			)
		}
		else {
			match = datas.defense_log.log_list[0].battle_log_list
			match = match.filter(e => e.opp_guild_name === guildName)
			winMatch = match.filter(
				element => element.win_lose === 2
			)
		}
		function calculateTime(number) {
			let minutesTotales = number
			let heuresTotales = parseInt(minutesTotales / 60)
			let minutesReelles = parseInt(minutesTotales % 60)
			let secondesTotales = parseInt(minutesTotales * 60)
			let secondesReelles = parseInt(secondesTotales % 60)
			if (heuresTotales + minutesReelles + secondesReelles === 0) {
				return "Winner"
			} else {
				return heuresTotales + " h " + minutesReelles + " m " + secondesReelles + " s ";
			}
		}
		guilds.push({
			guildName: guildName,
			memberCount: memberCount,
			score: parseInt(score),
			scoreIncrement: scoreIncrement,
			timeToWin: calculateTime(timeToWin),
			attacksUsed: attacksUsed,
			attacksLeft: attacksLeft,
			winRate: parseInt((winMatch.length / match.length) * 100),
		})
	}
	return guilds
}
