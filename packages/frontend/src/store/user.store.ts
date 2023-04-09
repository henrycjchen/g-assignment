import { getSearchParams } from '@/utils/url';

export let userId = '';

export function login(id: string) {
  userId = id || getSearchParams('userId') || '';
}
