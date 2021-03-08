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

api.addResponseTransform(({ data, headers }) => {
  if (data) {
    data = deserializer.serialize(data);
    headers = deserializer.serialize(headers);
  }
});

api.addRequestTransform(({ data, params }) => {
  if (params) {
    params = serializer.serialize(params);
  }
  if (data) {
    data = serializer.serialize(data);
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
