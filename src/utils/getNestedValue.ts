export const getNestedValue = (obj: object, path: string) => {
  const keys = path.split('.');
  let value: any = obj;
  for (const key of keys) {
    if (!value || typeof value !== 'object') return undefined; // Handle invalid paths
    value = value?.[key];
  }
  return value;
};
