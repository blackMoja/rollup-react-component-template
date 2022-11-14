export const camelize = (str: string) =>
  str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase());

export const pascalize = (str: string) => {
  const camel = camelize(str);
  return camel[0].toUpperCase() + camel.slice(1);
};

export const pascaliseCamelGroup = (str: string) => {
  const splitted = str.split('-');
  return splitted.map((s) => s[0].toUpperCase() + s.slice(1)).join(' ');
};
