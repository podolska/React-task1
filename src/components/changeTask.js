export default function changeTask (name) {
    switch (name) {
      case 'smiles':
        return [true, false, false, false];
      case 'todo':
        return [false, true, false, false];
      case 'formik':
        return [false, false, true, false];
      case 'users':
        return [false, false, false, true];
      default: break;
    };
};
