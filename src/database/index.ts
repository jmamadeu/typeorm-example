import { createConnection } from 'typeorm';

export default async function connect() {
  return await createConnection();
}
