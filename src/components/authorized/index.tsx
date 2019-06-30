import Authorized from './authorized';
import AuthorizedRoute from './authorized-route';
import Secured from './secured';
import check from './check-permissions';
import renderAuthorize from './render-authorize';

Authorized.Secured = Secured;
Authorized.AuthorizedRoute = AuthorizedRoute;
Authorized.check = check;

const RenderAuthorize = renderAuthorize(Authorized);

export default RenderAuthorize;
