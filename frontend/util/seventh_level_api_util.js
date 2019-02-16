export const createSeventhLevel = () => {
  const seventh_level = {
    title: "New Seventh Level",
    phrase: "",
    core1: "",
    core2: "",
    core3: "",
    core4: "",
    core5: "",
    action1: "",
    question1: "",
    goal1: "",
    action2: "",
    question2: "",
    goal2: "",
    action3: "",
    question3: "",
    goal3: "",
    action4: "",
    question4: "",
    goal4: "",
    action5: "",
    question5: "",
    goal5: "",
    action6: "",
    question6: "",
    goal6: "",
    action7: "",
    question7: "",
    goal7: "",
  };
  return $.ajax({
    method: 'POST',
    url: 'api/seventh_levels',
    data: { seventh_level }
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
