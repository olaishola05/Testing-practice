const stringLength = (string) => (string.length === 1 || string.length <= 9 ? `${string.length}: String passed too short` : string.length);

module.exports = stringLength;
