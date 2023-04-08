import { getSearchParams } from '@/utils/url';

export let userId = '';

export function login() {
  userId = getSearchParams('userId') || '';
}
