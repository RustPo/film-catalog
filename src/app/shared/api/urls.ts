import { environment } from 'src/environments/environment';

export const API_URL = `${environment.baseApiUrl}/mock-api` as const;

export const API_MOVIES_GET = `${API_URL}/movies` as const;
