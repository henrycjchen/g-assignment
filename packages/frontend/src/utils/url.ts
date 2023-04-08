export function getSearchParams(key: string) {
  return new URL(location.href).searchParams.get(key);
}
