import dotenv from 'dotenv';
dotenv.config(); // Потрібно викликати це перед використанням змінних оточення

import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

(async () => {
  await initMongoConnection();
  setupServer();
})();
