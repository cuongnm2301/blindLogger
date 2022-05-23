const selector = {
  success: "#4AA36A",
  info: "#3797EF",
  warning: "#ff8f00",
  error: "#ff002b",
  tracking: "#2C5545",
  debug: "#03034A",
};

const LogLevel = {
  Success: "success",
  Info: "info",
  Warning: "warning",
  Error: "error",
};

const log = (tag, logLevel, ...message) => {
  console.log(
    "%c" + tag,
    `background-color:${selector[logLevel]};color:white;padding:2px`,
    ...message
  );
};

const Logger = {
  logInfo: (tag, ...message) => {
    log(tag, LogLevel.Info, ...message);
  },
  logSuccess: (tag, ...message) => {
    log(tag, LogLevel.Success, ...message);
  },
  logWarning: (tag, ...message) => {
    log(tag, LogLevel.Warning, ...message);
  },
  logError: (tag, ...message) => {
    log(tag, LogLevel.Error, ...message);
  },
  logCatchError: (e) => {
    log("ERROR", LogLevel.Error, e.message || e);
  },
  logTracking: (tag, ...message) => {
    log(tag, "tracking", ...message);
  },
  logDebug: (tag, ...message) => {
    log(tag, "debug", ...message);
  },
};
