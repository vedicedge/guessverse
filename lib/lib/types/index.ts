export interface Room {
  id: string;
  room_code: string;
  category: string | null;
  status: string;
}

export interface Player {
  id: string;
  room_id: string;
  nickname: string;
  ready: boolean;
  connected: boolean;
  is_host: boolean;
}
