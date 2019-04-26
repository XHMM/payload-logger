import * as signale from "signale";
import { Request, Response, NextFunction } from "express";

const logger = new signale.Signale({
  types: {
    query: {
      badge: "request",
      color: "cyanBright",
      label: "query"
    },
    body: {
      badge: "request",
      color: "cyan",
      label: "body"
    }
  }
});
logger.config({
  displayTimestamp: true, // [13:22:22]
  // displayDate:true,  [2019-2-13]
  underlineLabel: false,
  displayFilename: true
});

export default function payloadLogger(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (Object.getOwnPropertyNames(req.query).length) {
    logger.query(req.path, req.query);
  }
  if (Object.getOwnPropertyNames(req.body).length) {
    // 目前暂不清楚：当content-type为application/x-www-form-urlencoded时，直接打印req.body会出现[Object: null prototype] {body content}
    // 网上查了下，没说具体啥原因，只能暂用JSON.xx即可解决
    logger.body(req.path, JSON.parse(JSON.stringify(req.body)));
  }
  next();
}
