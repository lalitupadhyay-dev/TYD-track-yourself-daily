async function findExistenceInDbById(Model, _id) {
  const isExist = await Model.findById({ _id });

  if (!isExist) {
    return false;
  }

  return true;
}

export default findExistenceInDbById;
