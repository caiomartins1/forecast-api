import { resolve, join } from 'path';
import moduleAlias from 'module-alias';

const root = resolve(__dirname, '../../');

moduleAlias.addAliases({
  '@src': join(root, 'src'),
  '@test': join(root, 'test'),
});
