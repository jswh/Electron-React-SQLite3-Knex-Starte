import { ipcMain } from "electron";
import { Api, DB_CHANNEL, TestRequest } from "./types";
import { Router } from "../../../libs/Router";

const router = new Router();
router.route(Api.Test, async (req: TestRequest) => {
  return req.shouldResponse;
})

export const registerApiHandlers = () => {
  ipcMain.handle(DB_CHANNEL, (_, api, ...args) => {
    return router.callRoute(api, ...args)
  })
}
