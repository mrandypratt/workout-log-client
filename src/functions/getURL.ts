export const getServerURL = (): string => {
  let serverURL;

  switch (process.env.REACT_APP_STAGE) {
    case "prod":
      serverURL = "8787"
      break;
    case "dev":
      serverURL = "http://localhost:5000";
      break;
    case "test":
      serverURL = "8787";
      break;
    default:
      serverURL = "http://localhost:5000";
  }

  return serverURL;
}

