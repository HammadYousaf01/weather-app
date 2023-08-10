interface ApiResponse {
  cod: string;
  message: number;
  cnt: 40;
  list: Forcast[];
  city: City;
}

interface ApiError {
  status: number;
  data: { cod: string; message: string };
}
