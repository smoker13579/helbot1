import {dashboardData} from "./dashboard-data";
import {KillKane} from "./features/kill-kane";
import {KillKaneAction} from "./actions/Killkane";

/**
 * @type ConfigType
 */
export const config = {
    name: "HELL - System",
    footer: [
        {
            name: {zh: "支持", en: "Support"},
            url: "https://github.com/smoker112233"
        }
    ],
    settings: detail => [
        {
            id: "say",
            name: "Test",
            type: "string",
            value: detail["say"]
        }
    ],
    actions: {
        "kill_kane": KillKaneAction
    },
    features: {
        "auto_kill_kane": KillKane
    },
    tutorialUrl: "https://github.com/SonMooSans/discord-bot-dashboard",
    serverUrl: "http://localhost:8080",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1380347312026550402&permissions=8&integration_type=0&scope=bot",
    data: {
        dashboard: dashboardData,
    },
}