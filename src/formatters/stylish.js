import _ from 'lodash';

const myStringify = (data, deppth) => {
  const iter = (value, depth) => {
    if (!_.isObject(value)) {
      return `${value}`;
    }
    const currentIndent = '  '.repeat(depth);
    const bracketIndent = '  '.repeat(depth - 1);
    const lines = Object
      .entries(value)
      .map(([key, val]) => `${currentIndent}  ${key}: ${iter(val, depth + 2)}`);

    return ['{',
      ...lines,
      `${bracketIndent}}`].join('\n');
  };
  return iter(data, deppth);
};

const getFormat = (difference) => {
  const goingDeep = (coll, depth) => {
    const currentIndent = '  '.repeat(depth);
    const bracketIndent = '  '.repeat(depth - 1);

    const lines = coll.flatMap((currentColl) => {
      const { type, key } = currentColl;
      if (type === 'add') {
        return `${currentIndent}+ ${key}: ${myStringify(currentColl.value, depth + 2)}`;
      }
      if (type === 'remove') {
        return `${currentIndent}- ${key}: ${myStringify(currentColl.value, depth + 2)}`;
      }
      if (type === 'update') {
        return `${currentIndent}- ${key}: ${myStringify(currentColl.valueOld, depth + 2)}\n${currentIndent}+ ${key}: ${myStringify(currentColl.valueNew, depth + 2)}`;
      }
      if (type === 'nothing') {
        return `${currentIndent}  ${key}: ${myStringify(currentColl.value, depth + 2)}`;
      }
      return `${currentIndent}  ${key}: ${goingDeep(currentColl.value, depth + 2)}`;
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return goingDeep(difference, 1);
};

export default getFormat;
