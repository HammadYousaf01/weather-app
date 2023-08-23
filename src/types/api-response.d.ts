interface ApiResponse {
  cod: string;
  message: number;
  cnt: 40;
  list: Forecast[];
  city: City;
}

interface ApiError {
  status: number;
  data: { cod: string; message: string };
}
