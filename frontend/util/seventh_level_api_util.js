export const createSeventhLevel = (seventhLevelData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/seventh_levels',
    data: { seventhLevelData }
  });
};

export const fetchSeventhLevel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/seventh_levels/${id}`
  });
};

export const fetchNewestSeventhLevel = () => {
  return $.ajax({
    method: 'GET',
    url: `api/home`
  });
};

export const fetchSeventhLevels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/seventh_levels'
  });
};

export const updateSeventhLevel = (seventh_level) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/seventh_levels/${seventh_level.id}`,
    data: {
      seventh_level
      }
  });
};

export const deleteSeventhLevel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/seventh_levels/${id}`
  });
};
