export const getSavedPetIds = () => {
  const savedPetIds = localStorage.getItem("savedPet")
    ? JSON.parse(localStorage.getItem("savedPet"))
    : [];

  return savedPetIds;
};

export const savePetIds = (petIdArr) => {
  if (petIdArr.length) {
    localStorage.setItem("savedPet", JSON.stringify(petIdArr));
  } else {
    localStorage.removeItem("savedPet");
  }
};

export const removePetId = (petId) => {
  const savedPetIds = localStorage.getItem("savedPet")
    ? JSON.parse(localStorage.getItem("savedPet"))
    : null;

  if (!savedPetIds) {
    return false;
  }

  const updatedSavedPetIds = savedPetIds?.filter(
    (savedPetId) => savedPetId !== petId
  );
  localStorage.setItem("savedPet", JSON.stringify(updatedSavedPetIds));

  return true;
};
