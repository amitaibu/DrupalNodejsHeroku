settings = {
  scheme: 'http',
  port: process.env.PORT || 5000,
  host: '',
  resource: '/socket.io',
  serviceKey: '',
  backend: {
    host: 'YOU NEED TO CHANGE IT',
    port: 80,
    scheme: 'http',
    messagePath: '/nodejs/message'
  },
  transports: ['xhr-polling'],
  debug: true
};

