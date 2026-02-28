import { Routes } from "@angular/router";
import { Layout } from "./layout";

export const layoutRoutes: Routes = [
    {
        path: "",
        component: Layout,
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", loadComponent: () => import("./dashboard/dashboard").then((c) => c.Dashboard) },
            // { path: "game", loadComponent: () => import("./game/game").then((c) => c.Game) },
            // { path: "online", loadComponent: () => import("./online-lobby/online-lobby").then((c) => c.OnlineLobbyComponent) },
            // { path: "online-game", loadComponent: () => import("./online-game/online-game").then((c) => c.OnlineGameComponent) },
        ]
    }
]