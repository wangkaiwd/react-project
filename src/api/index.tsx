import { request } from '@/http/useRequest';

export const fetchDemo = request.post('/api/profiles/list');
