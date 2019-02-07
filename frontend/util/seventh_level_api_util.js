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

export const fetchSeventhLevels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/seventh_levels'
  });
};

export const updateSeventhLevel = (seventhLevelData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/seventh_levels/${seventhLevelData.id}`,
    data: { seventhLevelData }
  });
};

export const deleteSeventhLevel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/seventh_levels/${id}`
  });
};
