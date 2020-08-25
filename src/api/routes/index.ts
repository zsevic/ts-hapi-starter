import { ServerRoute } from '@hapi/hapi';
import authorRoutes from './author';
import postRoutes from './post';

export default [...authorRoutes, ...postRoutes] as ServerRoute[];
