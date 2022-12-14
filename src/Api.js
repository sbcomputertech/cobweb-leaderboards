import { supabase } from "./SBClient";

export const getLeaderboardByGUID = async (guid) => {
    const { data } = await supabase.from("Leaderboards").select("*").eq("mod_guid", guid)
    return data
}

export const getAllLeaderboardMods = async () => {
    const { data } = await supabase.from("Leaderboards").select("mod_guid")
    return data
}

export const addNewEntry = async (guid, score, player_name, mod_name) => {
    const { data, error } = await supabase
    .from('Leaderboards')
    .insert([
        {
            "mod_guid": guid,
            "score": score,
            "player_name": player_name,
            "mod_name": mod_name
        },
    ])
}
