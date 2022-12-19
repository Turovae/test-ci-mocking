export default function fetchData(url) {
  if (url) {
    return url;
  }
  throw new Error('Mock this!');
}
