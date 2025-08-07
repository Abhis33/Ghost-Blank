const {SafeString} = require('handlebars');

function pad(value) {
  return String(value).padStart(2, '0');
}

module.exports = {
  duration_format(seconds) {
    if (!seconds && seconds !== 0) return '';
    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const parts = [];
    if (h) parts.push(h);
    parts.push(h ? pad(m) : m);
    parts.push(pad(s));
    return parts.join(':');
  },

  equipment_list(items) {
    if (!items) return '';
    if (typeof items === 'string') {
      try {
        items = JSON.parse(items);
      } catch (e) {
        items = items.split(',').map(i => i.trim());
      }
    }
    if (!Array.isArray(items)) items = [items];
    const html = items.map(item => `<li>${item}</li>`).join('');
    return new SafeString(`<ul class="equipment-list">${html}</ul>`);
  },

  festival_badges(awards) {
    if (!awards) return '';
    if (typeof awards === 'string') {
      try {
        awards = JSON.parse(awards);
      } catch (e) {
        awards = awards.split(',').map(a => ({image: a.trim()}));
      }
    }
    if (!Array.isArray(awards)) awards = [awards];
    const html = awards.map(a => {
      const src = a.image || a.src || a.url;
      const alt = a.name || 'Festival badge';
      return `<img src="${src}" alt="${alt}" class="festival-badge"/>`;
    }).join('');
    return new SafeString(html);
  }
};

