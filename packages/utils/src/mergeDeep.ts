const isObject = (item: unknown): item is Record<string, unknown> => {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
};

const cloneDeep = <T>(source: T) => {
  if (!isObject(source)) {
    return source;
  }

  const output = { ...source };

  Object.keys(source).forEach((key) => {
    (output as Record<string, unknown>)[key] = cloneDeep(source[key]);
  });

  return output;
};

export const mergeDeep = <T extends object, S extends object>(
  target: T,
  source: S
): T & S => {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  let output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        (output as Record<string, unknown>)[key] = mergeDeep(
          target[key] as object,
          source[key] as object
        );
      } else {
        (output as Record<string, unknown>)[key] = isObject(source[key])
          ? cloneDeep(source[key])
          : source[key];
      }
    });
  }

  return output;
};
