import 'tsconfig-paths/register';
import 'dotenv/config';
import 'gateways/database/connection';
import { init } from 'api/server';

init();
