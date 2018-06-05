// compare Unix timestamp in seconds against current time
export function GetLapsedTime(time : number) : string {
  // time difference in minutes
  let diff : number = Math.round((Date.now() / 1000 - time) / 60);

  // if difference is less than 60 minutes
  if (diff < 60) {
    return _compileLapsedTime(diff, 'minute');
  }

  // time difference in hours
  diff = Math.round(diff / 60);

  // if difference is less than 24 hours
  if (diff < 24) {
    return _compileLapsedTime(diff, 'hour');
  }

  // time difference in days
  diff = Math.round(diff / 24);

  // if difference is less than 10 days
  if (diff < 10) {
    return _compileLapsedTime(diff, 'day');
  }

  // time difference in weeks
  diff = Math.round(diff / 7);

  // if difference is less than 6 weeks
  if (diff < 6) {
    return _compileLapsedTime(diff, 'week');
  }

  // time difference in months
  diff = Math.round(diff / 4);

  // if difference is less than 18 months
  if (diff < 18) {
    return _compileLapsedTime(diff, 'month');
  }

  // time difference in years
  diff = Math.round(diff / 12);

  return _compileLapsedTime(diff, 'year');
}

function _compileLapsedTime(diff : number, unit : string) : string {
  return `${ diff < 1 ? 1 : diff } ${ unit }${ diff <= 1 ? '' : 's' }`;
}