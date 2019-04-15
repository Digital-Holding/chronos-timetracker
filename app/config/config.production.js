const config = {
  apiUrl: 'https://chronos-api.web-pal.com/api', // server url
  socketUrl: 'https://chronos-socket.web-pal.com', // url of socket server

  supportLink: 'https://web-pal.atlassian.net/servicedesk/customer/portal/2',
  githubLink: 'https://github.com/web-pal/chronos-timetracker',

  screenshotsPeriod: 600,
  // idleTimeThreshold: 60 * 60 * 24, // seconds of inactivity considering user is idle
  idleTimeThreshold: 300,
  checkUpdates: true,
  infoLog: false,
  issueWindowDevTools: false,
  idleWindowDevTools: false,
  loginWindowDevTools: false,
  attachmentsWindowDevtools: false,
  screenshotNotificationWindowDevtools: false,
  screenshotsViewerWindowDevtools: false,
};

export default config;
