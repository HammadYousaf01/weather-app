export async function geocodeLatLng(
  latitude: number,
  longitude: number
): Promise<string> {
  const latlng = new window.google.maps.LatLng(latitude, longitude);
  const geocoder = new window.google.maps.Geocoder();
  try {
    const results = await geocoder.geocode({ location: latlng });
    if (results !== null) {
      return filterCityName(results.results);
    }
  } catch (_error) {}

  return "";
}

function filterCityName(results: google.maps.GeocoderResult[]): string {
  const singleResultsEntry = results[0].address_components;

  const cityName = singleResultsEntry.filter(
    (result) =>
      result.types.includes("locality") && result.types.includes("political")
  );
  return cityName[0].long_name;
}
