/**
 *
 * Asynchronously loads the component for HyperButton
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
