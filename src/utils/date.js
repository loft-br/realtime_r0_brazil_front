export const formatDate = (date, options) =>
  new Intl.DateTimeFormat('pt-BR', options).format(date);

export const fullFormatDate = (date) =>
  formatDate(date, { month: 'long', day: 'numeric', year: 'numeric' });

export const shortFormatDate = (date) => formatDate(date);
