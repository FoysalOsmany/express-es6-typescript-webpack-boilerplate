import {server, port} from './app.ts';

console.log(`Listening on port ${port}...`);
server.listen(port);