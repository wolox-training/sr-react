import { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

const baseURL = process.env.REACT_APP_BASE_URL || '';
const deserializer = new CamelcaseSerializer();
const serializer = new SnakecaseSerializer();

if (baseURL === 'http://wolox.com') {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const STATUS_CODES = {
  unauthorized: 401
};

const api = create({
  baseURL,
  timeout: 15000
});

api.addResponseTransform(response => {
  if (response.data) {
    response.data = deserializer.serialize(response.data);
    response.headers = deserializer.serialize(response.headers);
  }
});

api.addRequestTransform(request => {
  if (request.params) {
    request.params = serializer.serialize(request.params);
  }
  if (request.data) {
    request.data = serializer.serialize(request.data);
  }
});

// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = dispatch => {
  api.addMonitor(response => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
       */
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
    }
  });
};

export default api;
