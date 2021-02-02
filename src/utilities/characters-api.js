import sendRequest from './send-request';

const BASE_URL = '/api/characters';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getOne(characterID) {
  return sendRequest(`${BASE_URL}/${characterID}`);
}

export function create(newCharacterData) {
  return sendRequest(BASE_URL, 'POST', newCharacterData);
}

export function update(character) {
  return sendRequest(`${BASE_URL}/${character._id}`, 'PUT', character);
}

export function deleteOne(characterID) {
  return sendRequest(`${BASE_URL}/${characterID}`, 'DELETE');
}
