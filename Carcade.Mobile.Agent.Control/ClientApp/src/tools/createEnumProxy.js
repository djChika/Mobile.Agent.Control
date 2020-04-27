function createEnumProxy(data) {
  return new Proxy(data, {
    get: (target, name) => {
      if (!(name in target)) {
        // throw new Error(`Member '${name}' not found in the Enum`);
        // console.log(`Member '${name}' not found in the Enum`);
      }
      return data[name];
    },
    set: (target, name, value) => {
      throw new Error('Adding new members to Enums is not allowed!');
    }
  });
}

export default createEnumProxy;
