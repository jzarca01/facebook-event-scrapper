module.exports = {
  base_url: 'https://www.facebook.com',
  username: '',
  password: '',
  headless: true,
  event_url: 'https://www.facebook.com/events/${eventId}',
  media_path: __dirname + 'fb/media',
  data_path: __dirname + 'fb',
  scroll_event_page: 1,
  locations: ['Paris, France']
};
