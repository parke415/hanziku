const BASE_URL = '/api/characters';

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(character) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  }).then(res => res.json());
}

export function update(character) {
  return fetch(`${BASE_URL}/${character._id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  }).then(res => res.json());
}

export function deleteOne(characterID) {
  return fetch(`${BASE_URL}/${characterID}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  });
}