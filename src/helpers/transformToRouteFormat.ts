export default function transformToRouteFormat(str: string): string {
  return str.split(' ').join('').toLowerCase();
}
